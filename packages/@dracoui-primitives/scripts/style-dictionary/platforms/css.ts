import { isSource } from '../filters/isSource.ts';
import { isFromFile } from '../filters/isFromFile.ts';
import { outputReferencesTransformed, outputReferencesFilter}  from 'style-dictionary/utils';

import type {PlatformConfig } from 'style-dictionary/types';

export const css = (outputFile, prefix, buildPath, options): PlatformConfig => {
  return {
    prefix,
    buildPath,
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      'cubicBezier/css',
      'dimension/rem',
      'duration/css',
      //'shadow/css',
      'border/css',
      //'typography/css',
      'fontFamily/css',
      //'fontWeight/number',
    ],
    files: [
      {
        destination: `${outputFile}`,
        format: `css/variables`,
        filter: token =>
          isSource(token) &&
          options?.themed !== true &&
          token.$type !== 'custom-viewportRange' &&
          !isFromFile(token, [
            'src/tokens/functional/size/size-coarse.json5',
            'src/tokens/functional/size/size-fine.json5',
          ]),
        options: {
          showFileHeader: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
          descriptions: false,
          ...options?.options,
        },
      }
    ],
  }
}