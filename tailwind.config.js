/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include all JS/TS files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JS/TS files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#000d1a',
        'light-gray': '#001f33',
      }
    },
  },
  plugins: [],
}