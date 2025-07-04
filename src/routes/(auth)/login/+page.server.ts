import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/db';
import { users, sessions } from '$lib/schema';
import bcrypt from 'bcrypt';
import { eq, and, gt, ne, lt } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { serialize } from 'cookie';

const SESSION_COOKIE_NAME = 'session_id';
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

// Rate limiting: 5 failed attempts per IP in 10 minutes
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const loginAttempts = new Map(); // key: IP, value: { count, firstAttempt }

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies, getClientAddress }: RequestEvent) => {
    const ip = getClientAddress();
    const now = Date.now();
    const attempt = loginAttempts.get(ip) || { count: 0, firstAttempt: now };
    if (attempt.count >= RATE_LIMIT_MAX_ATTEMPTS && now - attempt.firstAttempt < RATE_LIMIT_WINDOW_MS) {
      return fail(429, { error: 'Too many failed login attempts. Please try again later.' });
    }
    if (now - attempt.firstAttempt >= RATE_LIMIT_WINDOW_MS) {
      attempt.count = 0;
      attempt.firstAttempt = now;
    }

    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase();
    const password = String(form.get('password'));

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.' });
    }

    // Look up user by email
    const user = await db.select().from(users).where(eq(users.email, email)).then(rows => rows[0]);
    if (!user) {
      attempt.count++;
      loginAttempts.set(ip, attempt);
      return fail(400, { error: 'Invalid email or password.' });
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.hashed_password);
    if (!valid) {
      attempt.count++;
      loginAttempts.set(ip, attempt);
      return fail(400, { error: 'Invalid email or password.' });
    }

    // Reset rate limit on successful login
    loginAttempts.delete(ip);

    // Clean up expired sessions for this user
    await db.delete(sessions).where(and(eq(sessions.user_id, user.id), lt(sessions.expires_at, new Date())));

    // Create new session
    const sessionId = nanoid();
    const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000);
    await db.insert(sessions).values({
      id: sessionId,
      user_id: user.id,
      expires_at: expiresAt
    });

    // Revoke all other active sessions for this user
    await db.delete(sessions).where(and(eq(sessions.user_id, user.id), ne(sessions.id, sessionId)));

    // Set session cookie
    cookies.set(SESSION_COOKIE_NAME, sessionId, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_MAX_AGE
    });

    throw redirect(303, '/protected');
  }
};
