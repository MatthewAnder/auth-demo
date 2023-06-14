import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js'
import type { Actions } from './$types'
import { stringify } from 'postcss';

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
          values: {
            email,
            invalid: true,
          },
        });
      }
      return fail(500, {
        values: {
          error: 'Server error. Try again later.',
          invalid: true,
          email,
        },
      });
    }

    throw redirect(303, '/Todo/Dashboard');
  }
} satisfies Actions;