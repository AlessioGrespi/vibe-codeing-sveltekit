import { db } from '$lib/db';
import { sessions, users } from '$lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

const SESSION_COOKIE_NAME = 'session_id';

const PROTECTED_PATHS = ['/protected']; // Add more protected paths as needed

export const handle: Handle = async ({ event, resolve }) => {
  console.log('🎯 Handle running for:', event.url.pathname, 'method:', event.request.method);
  const sessionId = event.cookies.get(SESSION_COOKIE_NAME);
  
  // Temporary debug logging
  if (event.url.pathname.startsWith('/protected')) {
    console.log('🔍 Protected route access:', {
      pathname: event.url.pathname,
      sessionId: sessionId ? 'present' : 'missing',
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV
    });
  }
  
  event.locals.user = null;

  // Only attempt database operations if db is available
  if (db && sessionId) {
    try {
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
        } else {
          // Session exists but user not found - clean up invalid session
          await db.delete(sessions).where(eq(sessions.id, sessionId));
        }
      } else {
        // Session not found or expired - clean up invalid session cookie
        event.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
      }
    } catch (error) {
      console.error('Database error in hooks:', error);
      // If database is not available, just continue without authentication
    }
  }

  // Route guard: redirect unauthenticated users from protected routes
  if (PROTECTED_PATHS.some((path) => event.url.pathname.startsWith(path)) && !event.locals.user) {
   console.log("ligma balls");
    throw redirect(307, '/login');
  }

  return resolve(event);
};
