/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       
    "./js/**/*.js",   
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#16f2b3',
        secondary: '#0d1224'
      }
    }
  },
  plugins: [],
}
