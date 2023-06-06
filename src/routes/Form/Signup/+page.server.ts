import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { AuthApiError } from '@supabase/supabase-js';

export const actions: Actions = {
  register: async ({ request, locals}) => {
    const formData = await request.formData();

    const email = formData.get('email') as string,
      password = formData.get('password') as string,
      confirmPassword = formData.get('confirmPassword') as string;

    if (confirmPassword !== password) {
			return fail(400, { email, incorrect: true });
		}


    const { error } = await locals.supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          incorrect: true,
          values: {
            email,
          },
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    throw redirect(303, '/Verify');
  }
} satisfies Actions;  