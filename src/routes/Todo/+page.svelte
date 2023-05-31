<script lang="ts">
  import type { PageData } from '../$types';
  import Button from '$lib/components/Button.svelte';
  
  export let data: PageData;

  $: ({ supabase, session } = data)

  async function  signout() {
    const { error } = await supabase.auth.signOut();
  }
</script>



<Button on:click={signout}>Sign Out</Button>