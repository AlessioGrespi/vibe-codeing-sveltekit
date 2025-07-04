import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/db';
import { users, sessions } from '$lib/schema';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { serialize } from 'cookie';

const SESSION_COOKIE_NAME = 'session_id';
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }: RequestEvent) => {
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase();
    const password = String(form.get('password'));

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.' });
    }

    // Look up user by email
    const user = await db.select().from(users).where(eq(users.email, email)).then(rows => rows[0]);
    if (!user) {
      return fail(400, { error: 'Invalid email or password.' });
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.hashed_password);
    if (!valid) {
      return fail(400, { error: 'Invalid email or password.' });
    }

    // Create session
    const sessionId = nanoid();
    const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000);
    await db.insert(sessions).values({
      id: sessionId,
      user_id: user.id,
      expires_at: expiresAt
    });

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
