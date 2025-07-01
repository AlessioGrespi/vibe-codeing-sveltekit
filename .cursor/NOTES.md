# Supabase SvelteKit Server-Side Auth Integration

- **Install Packages:**  
  `@supabase/supabase-js` and `@supabase/ssr` are required.

- **Environment Variables:**  
  Set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

- **Server-Side Hooks:**  
  Implement `src/hooks.server.ts` to:
  - Create a request-specific Supabase client using cookies.
  - Add `safeGetSession` to validate JWTs.
  - Add an auth guard to protect `/private` routes and redirect as needed.

- **TypeScript Definitions:**  
  Extend `src/app.d.ts` to type `event.locals` with Supabase client, session, and user.

- **Root Layout Supabase Client:**  
  Use `+layout.ts` and `+layout.server.ts` to create a Supabase client for both client and server, passing session/user data.

- **Auth Event Listener:**  
  In `+layout.svelte`, listen for auth state changes and invalidate session as needed.

- **Example Page:**  
  Use Supabase client in `+page.server.ts` to fetch data (e.g., from a `colors` table).

- **Signup Confirmation:**  
  Implement `/auth/confirm` route to handle email verification.

- **Private Routes:**  
  Use a `+layout.server.ts` in `/private` to ensure all nested routes are protected.

- **Login/Signup Pages:**  
  Implement `/auth` routes for login and signup, handling errors and redirects.

Reference: [Supabase SvelteKit Auth Guide](https://supabase.com/docs/guides/auth/server-side/sveltekit)

---

# Svelte/SvelteKit LLMs Documentation Convention

- Svelte and SvelteKit support the `llms.txt` convention for making documentation available to LLMs.
- Root-level files like `/llms.txt`, `/llms-full.txt`, `/llms-medium.txt`, and `/llms-small.txt` provide varying levels of documentation detail.
- Package-level documentation is also available for Svelte, SvelteKit, and the CLI.

Reference: [Svelte LLMs Documentation](https://svelte.dev/docs/llms) 