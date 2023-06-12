<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  import testImage from '$lib/images/image.svg';
</script>


<div class="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-screen">
  <img class="hidden lg:inline-block" src={testImage} alt="graphics">

  <Card>
    <slot />
  </Card>
</div>