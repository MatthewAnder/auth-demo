<script lang="ts">
  export let name: string;
  let width: string = "1.75rem";
  let focusable: string = 'false';
  let icons = [
    {
      name: "Dashboard",
      box: 36,
      svg: `<path fill="currentColor" d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/>`
    },
    {
      name: "Important",
      box: 24,
      svg: `<path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873L12 2Z"/>`
    },
    {
      name: "Projects",
      box: 24,
      svg: `<path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>`
    },
    {
      name: "Flagged Email",
      box: 36,
      svg: `<path fill="currentColor" d="M6 34a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v30a1 1 0 0 1-1 1Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M30.55 3.82a1 1 0 0 0-1 0a14.9 14.9 0 0 1-6.13 1.16a13.11 13.11 0 0 1-5.18-1.49a12.78 12.78 0 0 0-5-1.45A10.86 10.86 0 0 0 9 2.85v2.23A8.8 8.8 0 0 1 13.25 4a11.22 11.22 0 0 1 4.2 1.28a14.84 14.84 0 0 0 6 1.66A18.75 18.75 0 0 0 29 6.12v12.83a16.16 16.16 0 0 1-5.58.93a13.11 13.11 0 0 1-5.18-1.49a12.78 12.78 0 0 0-5-1.45a10.86 10.86 0 0 0-4.24.85V20a8.8 8.8 0 0 1 4.25-1.08a11.22 11.22 0 0 1 4.2 1.28a14.84 14.84 0 0 0 6 1.66a16.79 16.79 0 0 0 7-1.37a1 1 0 0 0 .55-.89V4.67a1 1 0 0 0-.45-.85Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/>`
    },
    {
      name: "Tasks",
      box: 36,
      svg: `<path fill="currentColor" d="M31 34H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1Zm-17-2h16V12H14Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M16 16h12v2H16z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M16 20h12v2H16z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M16 24h12v2H16z" class="clr-i-outline clr-i-outline-path-4"/><path fill="currentColor" d="M6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z" class="clr-i-outline clr-i-outline-path-5"/><path fill="currentColor" d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z" class="clr-i-outline clr-i-outline-path-6"/><path fill="none" d="M0 0h36v36H0z"/>`
    },
    {
      name: "Calender",
      box: 24,
      svg: `<path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/>`
    },
    {
      name: "Add",
      box: 24,
      svg: `<path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1z"/>`
    },
    {
      name: "Chevron",
      box: 24,
      svg: `<g transform="rotate(180 12 12)"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"/></g>`
    }
    
  ]
    

  let displayIcon: any = icons.find((e) => e.name === name);
</script>

<svg
  class={$$props.class}
  {focusable}
  {width}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
  xmlns="http://www.w3.org/2000/svg"
  >
  {@html displayIcon.svg}
</svg>