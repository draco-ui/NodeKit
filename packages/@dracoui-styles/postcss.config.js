export default {
  plugins: {
    'postcss-import': {},
    'postcss-normalize-charset': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: {},
    cssnano: {
      preset: ['cssnano-preset-default', { discardComments: true }],
    },
  },
};
