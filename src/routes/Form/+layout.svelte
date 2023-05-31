<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  import testImage from '$lib/images/image.svg';
  
  import type { PageData } from './$types';
  
  export let data: PageData;

  $: ({ supabase, session } = data)

  async function  signout() {
    const { error } = await supabase.auth.signOut();
  }
</script>


{#if session}
  <button on:click={signout}>Sign Out</button>
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen">
    <div>
      <img src={testImage} alt="graphics">
    </div>

    <Card>
      <slot />
    </Card>
  </div>
{/if}