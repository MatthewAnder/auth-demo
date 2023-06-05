import type { LayoutLoad } from './$types';
import { onMount } from 'svelte';





export const load: LayoutLoad = (({ params }) => {
  const emojis = ['🎨','🍜','🚈','🎂','🧇','🥪','😮','🎅',,'🥽','⚽','🧿','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲'];
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return {
    title: params.slug,
    emoji: randomEmoji,
    content: `Welcome to ${params.slug}. Lorem ior sit amet...`
  };
}) satisfies LayoutLoad;