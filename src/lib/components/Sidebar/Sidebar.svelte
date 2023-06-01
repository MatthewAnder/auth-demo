<script lang="ts">
    import { itemData } from './Sideitems';
    import Icon from '../Icon.svelte';
    import Sideitem from './Sideitem.svelte';
</script>

<main class="min-h-screen flex flex-col border-r-2 border-slate-300 bg-slate-100 w-96">
  <section class="inline-grid grid-row-2 grid-flow-col ml-5 mt-5">
    <Icon name = "Account" class="w-12 row-span-2" />
    <span class="pl-4 text-xl font-medium">Hello, Matthew!</span>
    <span class="px-4">"Opportunities don't happen, yo  em."</span>
  </section>

  <ul class="p-4">  
    {#each itemData as item}
    <Sideitem href = {item.link}>
      <Icon name = {item.name} class="mx-2" />
      {item.name}
    </Sideitem>
    {/each}
  </ul>

  <hr class="mx-7">

  <p class="px-8 py-4 text-lg font-medium">Custom List</p>

  <footer class="flex px-2 mt-auto mb-3">
    <button class="w-auto mx-2 align-middle rounded-full hover:bg-slate-700 hover:text-white"><Icon name="Add" class="w-7" /></button>
    <input class="bg-slate-100 w-full mr-2 text-xl" type="text" placeholder="Add List" name="" id="">
  </footer>
</main>

