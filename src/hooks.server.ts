import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
} from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  });

  event.locals.getSession = async () => {
    const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
  };
  
  // protect requests to all routes that start with /protected-routes
  if (event.url.pathname.startsWith('/Todo')) {
    const session = await event.locals.getSession()
    if (!session) {
      // the user is not signed in
      throw redirect(303, '/Form')
    }
  }

  return resolve(event);
};