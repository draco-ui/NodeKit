import { isSource } from '../filters/isSource.ts';

import type { PlatformConfig } from 'style-dictionary/types';

export const javascript = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: [
    'color/hex',
    'dimension/rem',
    //'shadow/css',
    'border/css',
    //'typography/css',
    'fontFamily/css',
    //'fontWeight/number',
  ],
  options: {
    showFileHeader: false
  },
  files: [
    {
      format: 'javascript/es6',
      destination: outputFile,
      filter: isSource,
    },
  ],
})