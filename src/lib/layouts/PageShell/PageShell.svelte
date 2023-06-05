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

<main>
  <span class="block text-4xl font-bold px-20 pt-11">{pageData.emoji} {pageData.name}</span>
</main>