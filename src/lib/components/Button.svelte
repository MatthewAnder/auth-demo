<script lang="ts">
  export let btnName: string;
  let clicked: boolean = false;

  function onClickHandler(): void {
		clicked = true;
		setTimeout(() => {
			clicked = false;
		}, 1000);
	}
</script>

<button 
  on:click
  disabled={clicked}
  class="bg-primary-500 py-3 m-5 px-6 rounded-full hover:enabled:bg-primary-200 hover:enabled:text-primary-500 font-semibold text-lg duration-100"
  >
  {clicked ? 'Waiting . . .' : btnName}
  
</button>