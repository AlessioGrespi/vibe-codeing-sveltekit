import { fail, type Actions, redirect } from '@sveltejs/kit';
import { db } from '$lib/db';
import { users } from '$lib/schema';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

const PASSWORD_REQUIREMENTS = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

export const actions: Actions = {
  'change-email': async ({ request, locals }) => {
    if (!locals.user) throw redirect(303, '/login');
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase();
    if (!email) {
      return { changeEmailError: 'Email is required.' };
    }
    try {
      await db.update(users).set({ email }).where(eq(users.id, locals.user.id));
      return { changeEmailSuccess: 'Email updated.' };
    } catch (e) {
      if ((e as any)?.code === '23505') {
        return { changeEmailError: 'Email already in use.' };
      }
      throw e;
    }
  },
  'change-password': async ({ request, locals }) => {
    if (!locals.user) throw redirect(303, '/login');
    const form = await request.formData();
    const current_password = String(form.get('current_password'));
    const new_password = String(form.get('new_password'));
    if (!current_password || !new_password) {
      return { changePasswordError: 'All fields are required.' };
    }
    // Check current password
    const user = await db.select().from(users).where(eq(users.id, locals.user.id)).then(rows => rows[0]);
    if (!user || !(await bcrypt.compare(current_password, user.hashed_password))) {
      return { changePasswordError: 'Current password is incorrect.' };
    }
    // Validate new password
    if (!PASSWORD_REQUIREMENTS.test(new_password)) {
      return { changePasswordError: 'Password must be at least 8 characters, include a symbol, a number, and an uppercase letter.' };
    }
    // Hash and update
    const hashed_password = await bcrypt.hash(new_password, 12);
    await db.update(users).set({ hashed_password }).where(eq(users.id, locals.user.id));
    return { changePasswordSuccess: 'Password updated.' };
  }
}; 