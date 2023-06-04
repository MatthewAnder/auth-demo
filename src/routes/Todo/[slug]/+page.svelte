<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="mx-32 my-16">
  {@html data.content}

</main>