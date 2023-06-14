<script lang="ts">
  export let placeholder: string;
  export let label: string;

  let name: string = label.toLowerCase().split(" ").join("");
</script>

<div class="bg-surface-500 rounded-xl py-2 px-5 m-5 h-auto focus-within:bg-surface-600 outline outline-0 outline-tertiary-400 focus-within:outline-4 duration-75">

  <p class="font-medium">{label}</p>
    <input 
      value={$$props.value}
      name={name}
      type={name==="confirmpassword" ? "password" : name} 
      class="bg-inherit w-full" 
      placeholder={placeholder}
      autocomplete="off"
      >

</div>