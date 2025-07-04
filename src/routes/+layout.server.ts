import type { LayoutServerLoad } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.user
  };
}; 