/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all React components
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add your font here
        poppins:['Poppins', 'sans-serif'],
        syne:['Syne', 'sans-serif'],
      },
      backgroundImage:{
        'hero': "url('./assets/imgs/hero.jpg')",
        'workflow':"url('./assets/imgs/workflow.jpg')",
        'black-pattern':"url('./assets/imgs/black.jpg')"
      },
      screens:{
        'xs':'480px'
      },
      colors: {
        peach: '#f9d0bf',
        lavender: '#df82ff',
      },
      rotate:{
        '-60':'-55deg',
      },
      fontSize:{
        'xxs':'8px'
      }
    }, // Extend themes here if needed
  },
  plugins: [],
};
