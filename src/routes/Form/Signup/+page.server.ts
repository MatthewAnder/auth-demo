import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  register: async ({ request, locals}) => {
    const formData = await request.formData();

    const email = formData.get('email') as string,
      password = formData.get('password') as string,
      confirmPassword = formData.get('confirmpassword') as string;
    
    if (email === " " && confirmPassword !== password) {
      return fail(400, {
        values: {
          email,
          incorrect: true,
        },
      });
    }

    const { error } = await locals.supabase.auth.signUp({
      email,
      password
    })

    throw redirect (303, ('/Verify'));
  }
} satisfies Actions;  