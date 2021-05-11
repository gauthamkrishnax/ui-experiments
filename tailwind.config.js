module.exports = {
  mode: 'jit',
  purge: [   './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '108': '24rem',
      },
      fontFamily: {
        'KumbSans' : ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
