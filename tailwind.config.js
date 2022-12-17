/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { 
      fontFamily:{
        sans: "'Fira Sans', sans-serif"
      },
      colors: {
        primary: "rgb(96,105 ,123 )"
      }
     },
  },
  plugins: [],
}
