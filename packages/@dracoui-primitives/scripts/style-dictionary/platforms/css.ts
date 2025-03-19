import { isSource } from '../filters/isSource.ts';
import { outputReferencesTransformed, outputReferencesFilter}  from 'style-dictionary/utils';

import type { PlatformConfig } from 'style-dictionary/types';

const getCssSelectors = (outputFile: string) => {
  // check for dark in the beginning of the output filename
  const lastSlash = outputFile.lastIndexOf('/')
  const outputBasename = outputFile.substring(lastSlash + 1, outputFile.indexOf('.'))
  const themeName = outputBasename.replace(/-/g, '_')
  const mode = outputBasename.substring(0, 4) === 'dark' ? 'dark' : 'light'

  return [
    {
      selector: `[data-color-mode="${mode}"][data-${mode}-theme="${themeName}"], [data-color-mode="${mode}"][data-${mode}-theme="${themeName}"] ::backdrop, [data-color-mode="auto"][data-light-theme="${themeName}"], [data-color-mode="auto"][data-light-theme="${themeName}"] ::backdrop`,
    },
    {
      query: '@media (prefers-color-scheme: dark)',
      selector: `[data-color-mode="auto"][data-dark-theme="${themeName}"], [data-color-mode="auto"][data-dark-theme="${themeName}"] ::backdrop`,
    },
  ]
}

export const css = (outputFile, prefix, buildPath, options): PlatformConfig => {
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
      //'shadow/css',
      'border/css',
      //'typography/css',
      'fontFamily/css',
      //'fontWeight/number',
    ],
    options: {
      themeOverrides: {
        theme: options?.theme,
      },
    },
    files: [
      {
        destination: `${outputFile}`,
        format: `css/variables`,
        filter: token =>
          isSource(token) &&
          options?.themed !== true,
        options: {
          showFileHeader: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
          descriptions: false,
          queries: getCssSelectors(outputFile),
          ...options?.options,
        },
      }
    ],
  }
}