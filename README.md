# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# OAuth - Google
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# OAuth - GitHub
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Base URLs for OAuth redirect URIs
# Development (optional - defaults to http://localhost:5173)
DEV_BASE_URL="http://localhost:5173"

# Production (required for production deployment)
PRODUCTION_BASE_URL="https://your-production-domain.com"
```

### OAuth Redirect URI Configuration

The application automatically generates OAuth redirect URIs based on the environment:

- **Development**: Uses `DEV_BASE_URL` (defaults to `http://localhost:5173`)
- **Production**: Uses `PRODUCTION_BASE_URL`

The redirect URIs will be:
- Google: `{BASE_URL}/oauth/callback/google`
- GitHub: `{BASE_URL}/oauth/callback/github`

Make sure to add these redirect URIs to your OAuth provider configurations (Google Console, GitHub OAuth Apps).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
