/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js}',
    './src/components/*.{js,jsx}',
    './src/components/cards/*.{js,jsx}',
    './src/pages/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fill: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      '--tw-gradient-from': '#6366f1', // indigo-500
      '--tw-gradient-via': '#a855f7', // purple-500
      '--tw-gradient-to': '#ec4899', // pink-500
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

