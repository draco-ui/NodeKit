import { isSource } from '../filters/isSource.ts';

import type { PlatformConfig } from 'style-dictionary/types';

export const scss = (outputFile, prefix, buildPath, options): PlatformConfig => {
  return {
    prefix,
    buildPath,
    preprocessors: ['themeOverrides'],
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      'cubicBezier/css',
      'dimension/rem',
      'duration/css',
      'value/px',
      'border/css',
      'fontFamily/css',
    ],
    options: {
      themeOverrides: {
        theme: options?.theme,
      },
    },
    files: [
      {
        destination: `${outputFile}`,
        format: 'scss/map-deep',
        filter: token =>
          isSource(token) &&
          options?.themed !== true,
        options: {
          mapName: 'draco',
          outputReferences: false,
        }
      }
    ],
  }
}
