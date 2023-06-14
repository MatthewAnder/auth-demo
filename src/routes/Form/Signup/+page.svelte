<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Textbox from '$lib/components/Textbox.svelte';
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
  <Textbox placeholder="Enter Your Email" label="Email"/>
  <Textbox placeholder="Enter Your Password" label="Password" />
  <Textbox placeholder="Confirm It!" label="Confirm Password" />

  <!-- SOME LINKS -->
  <div class="mx-5">
    Have an account? <a href="/Form">Log in now!</a>
  </div>

  <Button btnName="Register" />

  <Divider />
</form>
