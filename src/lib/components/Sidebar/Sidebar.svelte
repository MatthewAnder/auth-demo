<script lang="ts">
  import { page } from '$app/stores';

  import { Avatar } from '@skeletonlabs/skeleton';
  import Icon from '$lib/components/Icon.svelte';
  import Combobox from './Combobox.svelte';

  const itemData = ['Dashboard', 'Important', 'Projects', 'Flagged', 'Tasks', 'Calender'];
  let userName: string = 'matthewanh@hotmail.com'
  
  $: listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-500 text-surface-700' : '');
</script>

<main class="min-h-screen flex flex-col bg-surface-100-800-token w-96">

  <section class="grid grid-cols-[auto_1fr_auto] mx-5 mt-5 p-1">
    <Avatar background="bg-primary-500" initials={userName.slice(0, 2)} />
    <div class="grid grid-flow-row px-3">
      <span class="text-2xl font-medium grid grid-cols-[auto_1fr_auto] items-center">
        Hello, {userName.slice(0, 9)}! <Combobox><slot /></Combobox>
      </span>
      <span class="text-neutral-400 text-sm">"Opportunities don't happen, you create them."</span>
    </div>
  </section>
  
  <nav>
    <ul class="mx-4 my-3">
    {#each itemData as item}
      <li class="grid grid-cols-1">
        <a class="sideitem-btn {listboxItemActive(item)}" href="/Todo/{item}">
        <Icon name={item} class="mx-2" /> {item}
        </a>
      </li>
    {/each}
    </ul>
  </nav>
   


  <hr class="mx-7">
  <p class="px-8 py-4 text-base font-semibold text-gray-400">Custom List</p>


  <footer class="flex px-2 mt-auto mb-3">
    <button class="w-auto mx-2 align-middle rounded-full hover:bg-slate-700 hover:text-white"><Icon name="Add" class="w-7" /></button>
    <input class="bg-slate-100 w-full mr-2 text-xl" type="text" placeholder="Add List" name="" id="">
  </footer>
</main>

