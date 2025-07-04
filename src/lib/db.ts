import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Import environment variable - this will be undefined during build if not available
import { DATABASE_URL } from '$env/static/private';

// Create database connection only if DATABASE_URL is available
const client = DATABASE_URL ? postgres(DATABASE_URL) : null;
export const db = client ? drizzle(client) : null; 