<script lang="ts">
  //Types
  import type { PagesShellSettings } from './types'
  // Utilities
	import { pageShellDefaults } from './defaults';

  export let settings: PagesShellSettings;

  const pageData: PagesShellSettings= {
    // Define defaults first
    ...pageShellDefaults,
		// Prop Settings Values
		...settings
  }
</script>

<main class="mx-28 mt-16">
  <span class="text-4xl font-bold">{pageData.emoji} {pageData.name}</span>
  <slot />
</main>