<script lang="ts">
    import { type PopupSettings, popup } from "@skeletonlabs/skeleton";

    const popupCombobox: PopupSettings = {
      event: 'click',
      target: 'popupCombobox',
      placement: 'bottom',
      closeQuery: '.listbox-item'
    };
</script>

<main class="mx-2">
  <button class="rounded-full scale-75" use:popup={popupCombobox}>
    <i class="fa-solid fa-chevron-down rounded-full p-1 hover:scale-110 hover:bg-secondary-500 hover:text-white active:scale-100 duration-100"></i>
  </button>
  
  
  <div class="card rounded-lg w-20 shadow-xl py-1 variant-filled-secondary" data-popup="popupCombobox">
    <ul class="text-sm ">
      <li>
        <button 
          class="w-full my-1 py-1 hover:bg-secondary-400 active:scale-105 active:rounded-full duration-75"
          on:click
          >
          Settings
        </button>
      </li>

      <li>
        <slot />
      </li>
    </ul>
    <div class="arrow variant-filled-secondary" />
  </div>

</main>
