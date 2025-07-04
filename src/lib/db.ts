import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

// Create database connection only if DATABASE_URL is available
const client = env.DATABASE_URL ? postgres(env.DATABASE_URL) : null;
export const db = client ? drizzle(client) : null; 