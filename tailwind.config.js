module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Lato'],
      'body': ['Raleway'],
    },
    extend: {},
  },
  variants: {
    extend: {
      brightness: ['hover'],
      contrast: ['hover'],
    },
  },
  plugins: [],
}
