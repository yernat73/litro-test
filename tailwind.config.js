const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    outline: false,
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    colors: {
      white: 'white',
      black: 'black',
      green: colors.green,
      violet: {
        600: "#262940",
        800: "#191B2A",
        900: '#111320',
        1000: "#0D0F19",
      },
      gray: colors.gray,
      red: colors.red,
    },
    extend: {
      cursor: ['disabled'],
      spacing: {
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
  corePlugins: {
      outline: false,
  },
}
