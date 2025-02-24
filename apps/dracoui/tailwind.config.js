module.exports = {
  mode: 'jit',
  important: true,
  content: ['./app/**/*.{js,ts,hbs}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: '#A1A1A1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
