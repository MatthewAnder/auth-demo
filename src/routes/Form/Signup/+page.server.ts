import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { AuthApiError } from '@supabase/supabase-js';

export const actions: Actions = {
  register: async ({ request, locals}) => {
    const formData = await request.formData();

    const name = formData.get('name') as string, 
      email = formData.get('email') as string,
      password = formData.get('password') as string,
      confirmPassword = formData.get('confirmpassword') as string;

    const { data, error } = await locals.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    })

    if(error || confirmPassword !== password){
      if(error instanceof AuthApiError && error.status === 400){
        return fail(400, {
          values:{
            name,
            email,
            incorrect: true,
            error: 'Something is wrong!'
          }
        })
      }
      return fail(500, {
        values: {
          name,
          email,
          error: 'Something is wrong!',
          incorrect: true,
        }
      })
    }

    throw redirect (303, ('/Verify'));
  }
} satisfies Actions;  