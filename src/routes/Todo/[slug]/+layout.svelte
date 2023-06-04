<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import type { LayoutData } from './$types';

export let data: LayoutData;
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>

  <svelte:fragment slot="pageHeader">
    <span class="block text-4xl font-bold px-20 pt-11">🥪{data.title}</span>
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
