const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray:colors.warmGray,
      red: colors.red,
      orange:colors.orange,
      amber: colors.amber,
      yellow: colors.amber,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    },
    screens: {
      'xs': '200px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      theme: {
        backgroundImage: theme => ({
          'cryptorBg': 'url("/assets/cryptor-bg.png")',
          'roadmap-bg': "url('./assets/cryptor-bg.svg')",
         })
      },
      width: {
        'lg':'1280px'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
}
