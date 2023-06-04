<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';

  import { itemData } from './Sideitems';
  import Icon from '../Icon.svelte';
  import Sideitem from './Sideitem.svelte';
  import Combobox from './Combobox.svelte';
</script>

<main class="min-h-screen flex flex-col border-r-2 border-slate-300 bg-slate-100 w-96">


  <section class="grid grid-cols-[auto_1fr_auto] mx-5 mt-5 p-1">
    <Avatar background="bg-primary-100" />
    <div class="grid grid-flow-row px-3">
      <span class="text-2xl font-medium grid grid-cols-[auto_1fr_auto] items-center">
        Hello, Matthew! <Combobox />
      </span>
      <span class="text-neutral-400 text-sm">"Opportunities don't happen, you create them."</span>
    </div>
  </section>
  
  <ul class="px-4 pb-2">  
    {#each itemData as item}
    <Sideitem href = "/Todo/{item}">
      <Icon name={item} class="mx-2" />
      {item}
    </Sideitem>
    {/each}
  </ul>

  <hr class="mx-7">

  <p class="px-8 py-4 text-base font-semibold text-gray-400">Custom List</p>

  <footer class="flex px-2 mt-auto mb-3">
    <button class="w-auto mx-2 align-middle rounded-full hover:bg-slate-700 hover:text-white"><Icon name="Add" class="w-7" /></button>
    <input class="bg-slate-100 w-full mr-2 text-xl" type="text" placeholder="Add List" name="" id="">
  </footer>
</main>

