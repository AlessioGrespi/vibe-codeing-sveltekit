import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/db';
import { users } from '$lib/schema';
import bcrypt from 'bcrypt';

// Rate limiting: 5 failed attempts per IP in 10 minutes
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const registerAttempts = new Map(); // key: IP, value: { count, firstAttempt }

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, getClientAddress }: RequestEvent) => {
    const ip = getClientAddress();
    const now = Date.now();
    const attempt = registerAttempts.get(ip) || { count: 0, firstAttempt: now };
    if (attempt.count >= RATE_LIMIT_MAX_ATTEMPTS && now - attempt.firstAttempt < RATE_LIMIT_WINDOW_MS) {
      return fail(429, { error: 'Too many registration attempts. Please try again later.' });
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

    // Password requirements: 8+ chars, symbol, number, uppercase
    const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
    if (!passwordValid) {
      attempt.count++;
      registerAttempts.set(ip, attempt);
      return fail(400, { error: 'Password must be at least 8 characters, include a symbol, a number, and an uppercase letter.' });
    }

    // Hash password using bcrypt
    const hashed_password = await bcrypt.hash(password, 12);

    try {
      await db.insert(users).values({
        email,
        hashed_password,
        email_verified: false,
        two_factor_enabled: false
      });
    } catch (e) {
      // Unique violation (duplicate email)
      if ((e as any)?.code === '23505') {
        attempt.count++;
        registerAttempts.set(ip, attempt);
        return fail(400, { error: 'Email already registered.' });
      }
      throw e;
    }

    // Reset rate limit on successful registration
    registerAttempts.delete(ip);

    // Optionally: send verification email here

    // Redirect to login or home
    throw redirect(303, '/login');
  }
};
