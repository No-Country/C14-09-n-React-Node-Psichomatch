/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple':  '#B0A0DF',
      'purple-ligth':  '#DFD6FB',
      'green': '#BEDEBA',
      'gray-dark': '#383838',
      'gray': '#E9E9E9',
    },
    extend: {},
  },
  plugins: [],
}

