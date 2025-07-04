import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

// Use a single DATABASE_URL environment variable for connection
const client = postgres(DATABASE_URL);

export const db = drizzle(client); 