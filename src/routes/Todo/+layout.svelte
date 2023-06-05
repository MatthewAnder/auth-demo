<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
