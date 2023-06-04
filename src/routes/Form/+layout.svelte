<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  import testImage from '$lib/images/image.svg';
</script>


<div class="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen">
  <div>
    <img src={testImage} alt="graphics">
  </div>

  <Card>
    <slot />
  </Card>
</div>