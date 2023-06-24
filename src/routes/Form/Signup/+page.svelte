<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Form/Divider.svelte';
  import Textbox from '$lib/components/Form/Textbox.svelte';
  import type { ActionData } from './$types';
  import  { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

  export let form: ActionData

  //  ERROR MESSAGES
  const errorMessage: ToastSettings = {
    message: form?.values.error as string,
    timeout: 2000,
  };

  if(form?.values.incorrect){
    toastStore.trigger(errorMessage);
  }

</script>

<span class="text-5xl font-bold m-5">Register</span>
<!-- REGISTER FORM -->
<form method="POST" action="?/register">
  <Textbox placeholder="Enter Your Name" label="Name" value={form?.values.name ?? ''}/>
  <Textbox placeholder="Enter Your Email" label="Email" value={form?.values.email ?? ''}/>
  <Textbox placeholder="Enter Your Password" label="Password" value=""/>
  <Textbox placeholder="Confirm It!" label="Confirm Password" value=""/>

  <!-- SOME LINKS -->
  <div class="mx-5">
    Have an account? <a href="/Form">Log in now!</a>
  </div>

  <Button btnName="Register" />

  <Divider />
</form>
