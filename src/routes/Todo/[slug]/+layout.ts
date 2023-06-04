import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (({ params }) => {
  return {
    title: params.slug,
    content: 'Welcome to our blog. Lorem ior sit amet...'
  };
}) satisfies LayoutLoad;