import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js'
import type { Actions } from './$types'


export const actions: Actions = {
  login: async({ request, locals }) => {

    const formData = await request.formData();

    const email = formData.get('email') as string,
      password = formData.get('password') as string;

    const { data, error } = await locals.supabase.auth.signInWithPassword({
      email,
      password
    });
    
    const { data: profile } = await locals.supabase
      .from('profiles')
      .select('id, name')

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          values: {
            error: 'Credentials unknown. Please try again.',
            data,
            email,
            invalid: true,
          },
        });
      }
      return fail(500, {
        values: {
          error: 'Server error. Try again later.',
          data,
          invalid: true,
          email,
        },
      });
    }

    throw redirect(303, '/Todo/Dashboard');		
  }
} satisfies Actions;