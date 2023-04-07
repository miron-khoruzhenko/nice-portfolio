/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm  : '480px',
      md  : '768px',
      lg  : '976px',
      xl  : '1440px'
    },
    extend: {
      colors : {
        'gold' : '#c49b66'
      },
      backgroundImage : {
        'footer-bg' : 'linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../imgs/b5.jpg)'
      }
    },
  },
  plugins: [],
}
