<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData

  
  $: ({ session } = data);
</script>




<section class="grid content-center min-h-screen text-center">
  <h1>MAKE YOUR TODO LIST NOW!</h1>
  <a href={session ? '/Todo/Dashboard' : '/Form'}>LET'S GET STARTED</a>
</section>


