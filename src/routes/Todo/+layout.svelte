<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  $: ({ supabase } = data);

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar>
      <!-- <NOT SURE IF THIS IS THE RIGHT WAY BUT SURELY THERE SHOULD BE A BETTER WAY> -->
      <button 
        class="w-full my-1 py-1 hover:bg-secondary-400 active:scale-105 active:rounded-full duration-75"
        on:click={signout}  
        >
        Sign out
      </button>
      <!-- ---- / ---- -->
    </Sidebar>
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
