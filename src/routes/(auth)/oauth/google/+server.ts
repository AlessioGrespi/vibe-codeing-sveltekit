import { google, generateState } from '$lib/auth/oauth';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { randomBytes } from 'crypto';

export const GET: RequestHandler = async ({ cookies }) => {
  const state = generateState();
  const codeVerifier = randomBytes(32).toString('base64url');
  cookies.set('oauth_state', state, { path: '/', httpOnly: true, maxAge: 300 });
  cookies.set('oauth_code_verifier', codeVerifier, { path: '/', httpOnly: true, maxAge: 300 });
  const url = google.createAuthorizationURL(state, codeVerifier, ['openid', 'profile', 'email']);
  url.searchParams.set("access_type", "offline");
  throw redirect(302, url.toString());
}; 