import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/db';
import { users } from '$lib/schema';
import bcrypt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: RequestEvent) => {
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase();
    const password = String(form.get('password'));

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.' });
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
        return fail(400, { error: 'Email already registered.' });
      }
      throw e;
    }

    // Optionally: send verification email here

    // Redirect to login or home
    throw redirect(303, '/login');
  }
};
