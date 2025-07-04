import type { Config } from 'drizzle-kit';
// For config files, use process.env. See .cursor/rules/env-vars.mdc

// Helper to parse DATABASE_URL
function parseDatabaseUrl(url: string) {
  const { hostname: host, port, username: user, password, pathname } = new URL(url);
  return {
    host,
    port: port ? Number(port) : 6000,
    user,
    password,
    database: pathname.replace(/^\//, ''),
  };
}

const dbCredentials = parseDatabaseUrl(process.env.DATABASE_URL!);

export default {
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials,
} satisfies Config;