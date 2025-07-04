import { github } from '$lib/auth/oauth';
import { db } from '$lib/db';
import { users, sessions } from '$lib/schema';
import { nanoid } from 'nanoid';
import { eq, and, ne, lt } from 'drizzle-orm';
import { redirect, type RequestHandler } from '@sveltejs/kit';

const SESSION_COOKIE_NAME = 'session_id';
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
  const state = url.searchParams.get('state');
  const code = url.searchParams.get('code');
  const storedState = cookies.get('oauth_state');
  if (!state || !code || !storedState || state !== storedState) {
    throw redirect(303, '/login?error=oauth_state');
  }
  cookies.delete('oauth_state', { path: '/' });

  let tokens, userInfo, email;
  try {
    tokens = await github.validateAuthorizationCode(code);
    
    // Fetch user info from GitHub
    const res = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${tokens.accessToken()}` }
    });
    userInfo = await res.json();
    
    // Get email - try user endpoint first, then /user/emails if needed
    email = userInfo.email;
    if (!email) {
      const emailRes = await fetch('https://api.github.com/user/emails', {
        headers: { Authorization: `Bearer ${tokens.accessToken()}` }
      });
      const emails = await emailRes.json();
      // Find primary verified email, fallback to first email
      email = emails.find((e: any) => e.primary && e.verified)?.email || emails[0]?.email;
    }
  } catch (e) {
    console.error('OAuth error:', e);
    throw redirect(303, '/login?error=oauth_error');
  }

  if (!email) {
    throw redirect(303, '/login?error=oauth_no_email');
  }

  // Merge or create user
  let user = await db.select().from(users).where(eq(users.email, email)).then(rows => rows[0]);
  if (!user) {
    // Create new user with placeholder password
    const [newUser] = await db.insert(users).values({
      email,
      hashed_password: '',
      email_verified: true, // OAuth emails are verified
      two_factor_enabled: false
    }).returning();
    user = newUser;
  }

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
}; 