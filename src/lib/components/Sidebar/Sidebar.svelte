<script lang="ts">
    import { itemData } from './Sideitems';
    import Icon from '../Icon.svelte';
    import Sideitem from './Sideitem.svelte';
</script>

<main class="min-h-screen border-r-2 border-slate-300 bg-slate-100 w-96">
  <ul class="p-7">  
    {#each itemData as item}
    <Sideitem href = {item.link}>
      <Icon name = {item.icon} />
      {item.name}
    </Sideitem>
    {/each}
  </ul>
</main>

