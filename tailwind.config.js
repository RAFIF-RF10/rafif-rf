/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/**/*.html',
    './views/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        'slope':['slope'],
        'poppins':['Poppins']
      }
    },
  },
  plugins: [],
}