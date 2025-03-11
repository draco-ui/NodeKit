import { isSource } from '../filters/isSource.ts';

import type {PlatformConfig} from 'style-dictionary/types';

export const docJson = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: [
    'name/pathToKebabCase',
    'color/hex',
    'dimension/rem',
    //'shadow/css',
    'border/css',
    //'typography/css',
    'fontFamily/css',
    //'fontWeight/number',
  ],
  options: {
    propertyConversion: {
      $value: 'value',
      $type: 'type',
      $description: 'description',
    },
  },
  files: [
    {
      destination: outputFile,
      format: `json/asset`,
      filter: isSource,
      options: {
        outputReferences: false,
        outputVerbose: true,
      },
    },
  ],
})