<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  import image from '$lib/images/designer.svg';
</script>


<div class="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-screen">
  <img class="hidden lg:inline-block drop-shadow-2xl" src={image} alt="graphics">

  <Card>
    <slot />
  </Card>
</div>