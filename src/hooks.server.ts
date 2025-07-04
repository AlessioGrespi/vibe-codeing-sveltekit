import { db } from '$lib/db';
import { sessions, users } from '$lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

const SESSION_COOKIE_NAME = 'session_id';

const PROTECTED_PATHS = ['/protected']; // Add more protected paths as needed

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(SESSION_COOKIE_NAME);
  event.locals.user = null;

  if (sessionId) {
    // Find session and user
    const session = await db.select().from(sessions)
      .where(and(eq(sessions.id, sessionId), gt(sessions.expires_at, new Date())))
      .then(rows => rows[0]);
    if (session) {
      const user = await db.select().from(users).where(eq(users.id, session.user_id)).then(rows => rows[0]);
      if (user) {
        event.locals.user = {
          id: user.id,
          email: user.email,
          emailVerified: user.email_verified,
          twoFactorEnabled: user.two_factor_enabled
        };
      }
    }
  }

  // Route guard: redirect unauthenticated users from protected routes
  if (PROTECTED_PATHS.some((path) => event.url.pathname.startsWith(path)) && !event.locals.user) {
    throw redirect(303, '/login');
  }

  return resolve(event);
};
