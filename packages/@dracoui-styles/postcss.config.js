import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: {
    'postcss-import': {
      root: __dirname,
      path: [resolve(__dirname, 'node_modules')],
    },
    'postcss-normalize-charset': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: {},
    cssnano: {
      preset: ['cssnano-preset-default', { discardComments: true }],
    },
  },
};
