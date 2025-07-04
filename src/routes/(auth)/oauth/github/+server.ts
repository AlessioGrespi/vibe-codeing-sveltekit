import { github, generateState } from '$lib/auth/oauth';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
  const state = generateState();
  cookies.set('oauth_state', state, { path: '/', httpOnly: true, maxAge: 300 });
  const url = github.createAuthorizationURL(state, ['user:email']);
  throw redirect(302, url.toString());
}; 