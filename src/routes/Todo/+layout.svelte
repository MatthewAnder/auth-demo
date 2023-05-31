<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import type { PageData } from '../$types';
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  
  export let data: PageData;

  $: ({ session } = data)
</script>

{#if session}
  <AppShell>
    <svelte:fragment slot="sidebarLeft">
      <Sidebar />
    </svelte:fragment>

    <svelte:fragment slot="pageHeader">
      Header
    </svelte:fragment>

    <!-- Router Slot -->
      <slot />
    <!-- ---- / ---- -->

    <svelte:fragment slot="pageFooter">
      Page Footer
    </svelte:fragment>
  </AppShell>
{:else}
  <div class="grid  place-items-center min-h-screen">
    <h3>You are not authenticated. Please <a href="/Form">log in</a> to do so!</h3>
  </div>
{/if}
