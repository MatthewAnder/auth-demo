/** @type {import('tailwindcss').Config}*/

const plugin = require('tailwindcss/plugin')
const config = {
  darkMode: 'class',
  
  content: ["./src/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: {
      fontFamily:{
        'dosis': ['Dosis', 'sans-serif'] 
      }
    },
  },

  plugins: [
      plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.6xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.semibold') }, 
        'h3': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.medium') }, 
        'h4': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.normal') }, 
        'p': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.light') }, 

      })
    }),

    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
};

module.exports = config;
