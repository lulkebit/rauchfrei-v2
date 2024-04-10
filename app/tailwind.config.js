/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js}',
    './src/components/*.{js,jsx}',
    './src/components/cards/*.{js,jsx}',
    './src/pages/*.{js,jsx}',
  ],
  plugins: [require('daisyui')],
};
