<script lang="ts">
    import { type PopupSettings, popup } from "@skeletonlabs/skeleton";
    import Icon from '../Icon.svelte';

    const popupCombobox: PopupSettings = {
      event: 'click',
      target: 'popupCombobox',
      placement: 'bottom',
      closeQuery: '.listbox-item'
    };
</script>

<main class="mx-4">
  <button class="w-4 rounded-full scale-150" use:popup={popupCombobox}>
    <Icon name="Chevron" class="w-4 hover:scale-110 hover:bg-slate-200 active:scale-100 duration-100 rounded-full" />
  </button>
  
  
  <div class="card rounded-lg w-20 shadow-xl py-1" data-popup="popupCombobox">
    <ul class="text-sm">
      <li>
        <button 
          class="w-full my-1 py-1 hover:bg-sky-950 hover:text-slate-100 active:scale-105"
          on:click
          >
          Settings
        </button>
      </li>

      <li>
        <button 
          class="w-full my-1 py-1 hover:bg-sky-950 hover:text-slate-100 active:scale-105"
          on:click
          >
          Sign out
        </button>
      </li>
    </ul>
    <div class="arrow bg-surface-100-800-token" />
  </div>

</main>
