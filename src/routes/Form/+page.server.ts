import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js'
import type { Actions } from './$types'

export const actions: Actions = {
  login: async({ request, locals }) => {

    const formData = await request.formData();

    const email = formData.get('email') as string,
      password = formData.get('password') as string;

    const { error } = await locals.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          invalid: true,
          values: {
            email,
          },
        });
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      });
    }

    throw redirect(303, '/Todo/Dashboard');
  }
} satisfies Actions;