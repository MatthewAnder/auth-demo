<script lang="ts">
    //Layout
    import PageShell from '$lib/layouts/PageShell/PageShell.svelte';
    import type { PagesShellSettings } from '$lib/layouts/PageShell/types';

    const settings: PagesShellSettings = {
        emoji:'🤑',
        name:'Flagged Email',
    }
</script>

<PageShell {settings}>

</PageShell>