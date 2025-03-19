import path from 'node:path';
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import cleaner from 'rollup-plugin-cleaner';
import flexbugs from 'postcss-flexbugs-fixes';
import normalizeCharset from "postcss-normalize-charset";

export default {
  input: path.resolve(__dirname, 'index.scss'),
  output: [
    {
      file: path.resolve(__dirname, 'dist', 'css', 'styles.css'),
      format: 'es',
    },
  ],
  plugins: [
    cleaner({
      targets: [
        './dist/*'
      ]
    }),
    postcss({
      extract: true,
      use: ['sass'],
      extensions: ['.scss'],
      plugins: [
        autoprefixer(),
        normalizeCharset(),
        flexbugs(),
        // cssnano({
        //   preset: [
        //     'cssnano-preset-default', { discardComments: false }
        //   ]
        // }),
      ],
      sassOptions: {
        includePaths: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'node_modules/@dracoui/primitives/dist/css/primitives'),
        ],

      },
    }),
    copy({
      targets: [
        { src: 'src/**/*', dest: 'dist/scss' },
        { src: 'index.scss', dest: 'dist' },
      ],
      hook: 'writeBundle'
    })
  ],
};
