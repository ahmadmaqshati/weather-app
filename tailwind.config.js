/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#24385d',
        date: '#ffffffd1',
        temp: '#fff',
        sky: '#C6F0FF',
        degres: '#C6F0FF'
      }
    },
  },
  plugins: [],
}

