<script lang="ts">
  import { page } from '$app/stores';
  import { itemData } from './SideItems';

  import { Avatar } from '@skeletonlabs/skeleton';
  import Combobox from '$lib/components/Sidebar/Combobox.svelte';

  export let email: string;
  let username: string = email;
  
  $: listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-500 text-surface-700' : '');
</script>

<main class="min-h-screen flex flex-col bg-surface-100-800-token w-96">

  <section class="grid grid-cols-[auto_1fr_auto] mx-5 mt-5 p-1">
    <Avatar background="bg-primary-500" initials={username.slice(0, 2)} />
    <div class="grid grid-flow-row px-3">
      <span class="text-2xl font-medium grid grid-cols-[auto_1fr_auto] items-center">
        Hello, {username.slice(0, 9)}! <Combobox on:quit />
      </span>
      <span class="text-neutral-400 text-sm">"Opportunities don't happen, you create them."</span>
    </div>
  </section>
  
  <nav>
    <ul class="mx-4 my-3">
    {#each itemData as item}
      <li class="grid grid-cols-1">
        <a class="sideitem-btn {listboxItemActive(item.name)}" href="/Todo/{item.name}">
        <i class="{item.icon} scale-125 pt-1 ml-3 mr-4"></i> {item.name=="Flagged" ? "Flagged Email" : item.name}
        </a>
      </li>
    {/each}
    </ul>
  </nav>

  <hr class="mx-7">
  <p class="px-8 py-4 text-base font-semibold text-gray-400">Custom List</p>


  <footer class="flex px-2 mt-auto mb-3">
    <button class="w-auto mx-3 align-middle scale-150">
      <i class="fa-solid fa-square-plus"></i>
    </button>
    <input 
      class="bg-inherit w-full mx-3 text-xl" 
      type="text" 
      placeholder="Add List" 
      maxlength="20"
      >
  </footer>
</main>

