<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import type { ActionData } from './$types';
  import  { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

  export let form: ActionData

  //  ERROR MESSAGES
  const errorMessage: ToastSettings = {
    message: 'Incorrect credentials! Please try again',
    timeout: 2000,
  };

  if(form?.incorrect){
    toastStore.trigger(errorMessage);
  }
</script>

<span class="text-5xl font-bold m-5">Register</span>
<!-- REGISTER FORM -->
<form method="POST" action="?/register">
  <div class="bg-slate-200 rounded-xl py-2 px-5 m-5 h-auto">
    <p class="font-medium">Email</p>
      <input 
        name="email"
        type="email" 
        class="bg-slate-200 w-full" 
        placeholder="Enter Your Email"
        >
  </div>

  <div class="bg-slate-200 rounded-xl py-2 px-5 m-5 h-auto">
    <p class="font-medium">Password</p>
    <input 
      name="password"
      type="password" 
      class="bg-slate-200 w-full" 
      placeholder="Enter Your Password"
      >
  </div>

  <div class="bg-slate-200 rounded-xl py-2 px-5 m-5 h-auto">
    <p class="font-medium">Confirm it!</p>
    <input 
      name="confirmPassword"
      type="password" 
      class="bg-slate-200 w-full" 
      placeholder="Confirm Password"
      >
  </div>

  <!-- SOME LINKS -->
  <div class="mx-5">
    Have an account? <a href="/Form">Log in now!</a>
  </div>
  <Button>Register</Button>
</form>