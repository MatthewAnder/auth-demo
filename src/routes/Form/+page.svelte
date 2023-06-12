<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import type { ActionData } from './$types';
  import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

  export let form: ActionData

  // ERROR MESSAGE
  const errorMessage: ToastSettings = {
    message: 'Something is wrong! We cannot get you in',
    timeout: 2000,
  };

  if(form?.invalid){
    toastStore.trigger(errorMessage);
  }
</script>

<main class="">
  <span class="text-5xl font-bold m-5">Log in</span>

  <!-- LOGIN FORM -->
  <form method="POST" action="?/login">
    <div class="form-textbox">
      <p class="font-medium autofill:focus-visible:bg-yellow-500">Email</p>
      <input 
        name="email"
        type="email" 
        class="bg-inherit w-full " 
        placeholder="Enter Your Email"
        autocomplete="off"
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
    
    <!-- SOME LINKS -->
    <div class="m-5">
      New here? <a href="/Form/Signup">Join now!</a>
    </div>
  
    <Button>Log In</Button>
    <Divider />
  </form>
</main>

