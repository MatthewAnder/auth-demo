<script lang="ts">
  import type { PageData } from '../$types';
  import Button from '$lib/components/Button.svelte';
    import { redirect } from '@sveltejs/kit';
  
  export let data: PageData;

  $: ({ supabase, session } = data)

  async function  signout() {
    const { error } = await supabase.auth.signOut();
  }
</script>


{#if session}
  <Button on:click={signout}>Sign Out</Button>
{:else}
  <div class="grid  place-items-center min-h-screen">
    <h1>Bro, do i know you?</h1>
  </div>
{/if}