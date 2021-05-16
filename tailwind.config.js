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
        'KumbSans' : ['Kumbh Sans', 'sans-serif'],
        'Spartan' : ['Spartan', 'sans-serif'],
        'PorterSans' : ['Porter Sans Block', 'sans-serif'],
        'OpenSans' : ['Open Sans'],
        'Manrope' : ['Manrope'],
        'Inter' : ['Inter'],
        'Poppins' : ['Poppins']
      },
      animation: {
        growWidth: 'growWidth 1s ease-out',
        comeUp: 'comeUp 200ms ease-out',
        comeDown: 'comeDown 200ms ease-out'
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      margin : ['last']
    },
  },
  plugins: [],
}
