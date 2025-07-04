// Make sure to install lucia and @lucia-auth/adapter-drizzle
import { Lucia } from 'lucia';
import { DrizzleAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from '../db';
import { users, sessions } from '../schema';
import type { InferModel } from 'drizzle-orm';

// Infer user attributes type from users table
import type { users as usersTable } from '../schema';

type UserAttributes = InferModel<typeof usersTable>;

export const lucia = new Lucia(new DrizzleAdapter(db, users, sessions), {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    }
  },
  getUserAttributes: (attributes: UserAttributes) => {
    return {
      email: attributes.email,
      emailVerified: attributes.email_verified,
      twoFactorEnabled: attributes.two_factor_enabled
    };
  }
});

export type Auth = typeof lucia;
