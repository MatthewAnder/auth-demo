<script lang="ts">
    //Layout
    import PageShell from '$lib/layouts/PageShell/PageShell.svelte';
    import type { PagesShellSettings } from '$lib/layouts/PageShell/types';

    const settings: PagesShellSettings = {
        emoji:'💻',
        name:'Tasks',
    }
</script>

<PageShell {settings}>
    <section>
        <input type="text" placeholder="Add Task">
    </section>
</PageShell>