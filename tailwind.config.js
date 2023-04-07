/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./index.html"],
  theme: {
    // container: {
    //   center: true,
    //   screens: {
    //     lg: '1140px',
    //     xl: '1140px',
    //     '2xl': '1140px',
    //   },
    // },
    screens: {
      sm  : '480px',
      md  : '768px',
      lg  : '976px',
      xl  : '1440px'
    },
    extend: {
      colors : {
        'gold' : '#c49b66',
        'port-melon': '#ffb500',
      },
      backgroundImage : {
        'footer-bg' : 'linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../imgs/b5.jpg)',
        'img' : "url('../../imgs/me.jpeg')",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '90': '22rem',
        '100': '30.5rem',
        '136': '36rem',
        '156': '40rem',
      },
      colors: {
        'aft-c': '#C49B66',
        'skil-bg': 'rgba(80, 80, 80, 0.3)',
        'box-c' : '#333333',
      },
      animation: {
        'wid-ani1': 'ToRight1 1.5s ease-in-out',
        'wid-ani2': 'ToRight2 1.5s ease-in-out',
        'wid-ani3': 'ToRight3 1.5s ease-in-out',
        'wid-ani4': 'ToRight4 1.5s ease-in-out',
        'wid-ani5': 'ToRight5 1.5s ease-in-out',
        'wid-ani6': 'ToRight6 1.5s ease-in-out',
        'wid-ani7': 'ToRight7 1.5s ease-in-out',
        'wid-ani8': 'ToRight8 1.5s ease-in-out',
      },
    },
  },
}
