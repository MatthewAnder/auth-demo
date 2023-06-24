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
    <Sidebar on:quit={signout} />
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
