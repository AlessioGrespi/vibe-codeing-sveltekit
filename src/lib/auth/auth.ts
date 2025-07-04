// Authentication utilities - using custom implementation with Drizzle ORM
// No longer using deprecated Lucia package

import type { InferModel } from 'drizzle-orm';
import type { users as usersTable } from '../schema';

// Type for user attributes
export type UserAttributes = InferModel<typeof usersTable>;

// Export user attributes getter function for consistency
export const getUserAttributes = (attributes: UserAttributes) => {
  return {
    email: attributes.email,
    emailVerified: attributes.email_verified,
    twoFactorEnabled: attributes.two_factor_enabled
  };
};
