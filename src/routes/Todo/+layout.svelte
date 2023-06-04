<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>

  <svelte:fragment slot="pageHeader">
    <span class="block text-4xl font-bold px-20 pt-11">🥪Dashboard</span>
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
