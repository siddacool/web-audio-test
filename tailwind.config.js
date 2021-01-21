module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        'm-10': '-10',
      },
    },
    fontFamily: {
      sans: '"Poppins", sans-serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
