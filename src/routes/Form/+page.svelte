<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Form/Divider.svelte';
  import Textbox from '$lib/components/Form/Textbox.svelte';
  import type { ActionData } from './$types';
  import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

  export let form: ActionData

  // ERROR MESSAGE
  const errorMessage: ToastSettings = {
    message: 'Something is wrong! We cannot get you in',
    timeout: 2000,
  }

  if(form?.values.invalid){
    toastStore.trigger(errorMessage);
  }
</script>

<main>
  <span class="text-5xl font-bold m-5">Log in</span>

  <!-- LOGIN FORM -->
  <form method="POST" action="?/login">
    <Textbox placeholder="Enter Your Email" label="Email" value={form?.values.email ?? ''}/>
    <Textbox placeholder="Enter Your Password" label="Password" value="" />
    
    <!-- SOME LINKS -->
    <div class="m-5">
      New here? <a href="/Form/Signup">Join now!</a>
    </div>
  
    <Button btnName="Log In" />
    <Divider />
  </form>
</main>

