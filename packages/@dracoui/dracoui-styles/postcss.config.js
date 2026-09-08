/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cssnano from 'cssnano';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { resolve, dirname } from 'path';
import autoprefixer from 'autoprefixer';
import { pascalCase } from 'change-case';
import postcssImport from 'postcss-import';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssNormalizeCharset from 'postcss-normalize-charset';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);
const postcssRename = require('postcss-rename');

export default {
  plugins: [
    postcssImport({
      root: __dirname,
      path: [resolve(__dirname, 'node_modules')],
    }),
    autoprefixer(),
    postcssFlexbugsFixes(),
    postcssNormalizeCharset(),
    postcssRename({
      by: 'whole',
      strategy: (name) => {
        if (!name.startsWith('draco-') && name !== 'mock-disabled') {
          return name;
        }

        return name
          .split(/(__|--)/)
          .map((part) => (part === '__' || part === '--' ? part : pascalCase(part)))
          .join('');
      },
    }),
    cssnano({
      preset: ['cssnano-preset-default', { discardComments: true }],
    }),
  ],
};
