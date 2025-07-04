import { Google, GitHub, generateState } from 'arctic';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { dev } from '$app/environment';

// Function to determine the base URL for redirect URIs
function getBaseUrl(): string {
  if (dev) {
    // Development environment - use environment variable or default to localhost
    return process.env.DEV_BASE_URL || 'http://localhost:5173';
  } else {
    // Production environment - use environment variable or default
    return process.env.PRODUCTION_BASE_URL || 'https://your-production-domain.com';
  }
}

// Generate redirect URIs dynamically
const baseUrl = getBaseUrl();
const OAUTH_REDIRECT_URI_GOOGLE = `${baseUrl}/oauth/callback/google`;
const OAUTH_REDIRECT_URI_GITHUB = `${baseUrl}/oauth/callback/github`;

export const google = new Google(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_REDIRECT_URI_GOOGLE);
export const github = new GitHub(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, OAUTH_REDIRECT_URI_GITHUB);
export { generateState }; 