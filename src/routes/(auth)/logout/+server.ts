import { redirect, type RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';
import { sessions } from '$lib/schema';
import { eq } from 'drizzle-orm';

const SESSION_COOKIE_NAME = 'session_id';

export const GET: RequestHandler = async ({ cookies, locals }) => {
  const sessionId = cookies.get(SESSION_COOKIE_NAME);
  if (sessionId) {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
    cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
  }
  // Optionally, clear user from locals (not strictly needed)
  locals.user = null;
  throw redirect(303, '/login');
};
