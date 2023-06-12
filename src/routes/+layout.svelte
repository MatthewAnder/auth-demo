<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-vintage.css';
  // This contains the bulk of Skeletons required styles:
  // NOTE: this will be renamed skeleton.css in the v2.x release.
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import { storePopup } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import "../app.postcss";

  import { invalidateAll } from '$app/navigation';
  import { onMount } from 'svelte';
  import type { LayoutData } from "./$types";
  import { Toast } from '@skeletonlabs/skeleton'

  export let data: LayoutData;

  $: ({supabase, session} = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidateAll();
      }
    });

    return () => subscription.unsubscribe();
  });

  // SETTING UP FOR POPUP BUTTON
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>


<main>
  <slot />

  <footer>
    <Toast position='t' background='variant-filled-error' />
  </footer>
</main>
