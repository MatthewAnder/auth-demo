<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  $: ({ supabase, session } = data);

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }
  console.log(session?.user);
  let email: any = session?.user.email;
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar on:quit={signout} {email} />
  </svelte:fragment>

  <!-- Router Slot -->
    <slot />
  <!-- ---- / ---- -->
</AppShell>
