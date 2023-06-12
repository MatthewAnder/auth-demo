<script lang="ts">
  import Button from '$lib/components/Button.svelte';
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
  <div class="form-textbox">
    <p class="font-medium">Email</p>
      <input 
        name="email"
        type="email" 
        class="bg-inherit w-full" 
        placeholder="Enter Your Email"
        >
  </div>

  <div class="form-textbox">
    <p class="font-medium">Password</p>
    <input 
      name="password"
      type="password" 
      class="bg-inherit w-full" 
      placeholder="Enter Your Password"
      >
  </div>

  <div class="form-textbox">
    <p class="font-medium">Confirm it!</p>
    <input 
      name="confirmPassword"
      type="password" 
      class="bg-inherit w-full" 
      placeholder="Confirm Password"
      >
  </div>

  <!-- SOME LINKS -->
  <div class="mx-5">
    Have an account? <a href="/Form">Log in now!</a>
  </div>

  <Button>Register</Button>

  <p 
    class="text-base w-10/12 text-center my-3 mx-auto overflow-hidden before:contents-[''] before:inline-block before:w-1/2 before:align-middle before:border-b before:border-solid before:mr-2 before:ml-[-55%] after:contents-[''] after:inline-block after:w-1/2 after:align-middle after:border-b after:border-solid after:mr-[-55%] after:ml-2  before:border-surface-300 after:border-surface-300"
    >
    or
  </p>
</form>
