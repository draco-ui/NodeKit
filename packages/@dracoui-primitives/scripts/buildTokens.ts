import fs from "node:fs";
import glob from 'fast-glob';
import { css } from './style-dictionary/platforms/css';
import { docJson } from './style-dictionary/platforms/docJson';
import { javascript } from './style-dictionary/platforms/javascript';
import { themes } from '../theme.config';
import { DracoStyleDictionary } from "../style-dictionary.config";

const getStyleDictionaryConfig = (
  filename,
  source,
  include,
  options,
  platforms = {},
) => ({
  source,
  include,
  log: {
    warnings: 'disabled' as 'disabled',
    verbosity: 'silent' as 'silent',
    errors: {
      brokenReferences: 'throw' as 'throw',
    },
  },
  platforms: Object.fromEntries(
    Object.entries({
      css: css(`css/${filename}.css`, options.prefix, options.buildPath, {
        theme: options.theme,
      }),
      docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath, {
        theme: options.theme,
      }),
      ...platforms,
    }).filter((entry: [string, unknown]) => entry[1] !== undefined),
  ),
});

const buildTokens = async (filename, source, include, buildOptions, additionalPlatforms = {}) => {
  try {
    const styleDictionary = await DracoStyleDictionary.extend(
      getStyleDictionaryConfig(filename, source, include, buildOptions, additionalPlatforms)
    );
    await styleDictionary.buildAllPlatforms();
  } catch (e) {
    console.error(`🛑 Error trying to build ${filename} tokens for code output:`, e);
  }
};

export const buildDesignTokens = async (buildOptions) => {
  // Build base color tokens
  await buildTokens('base/colors', ['src/base/colors/**/*.json5'], [], buildOptions);

  // Build theme-specific functional color tokens
  for (const { filename, source, include, theme } of themes) {
    await buildTokens(`functional/themes/${filename}`, source, include, { ...buildOptions, themed: true, theme: [theme] }, { fallbacks: undefined });
  }

  // Build border tokens
  await buildTokens('base/borders', ['src/base/borders/**/*.json5'], [], buildOptions);

  // Build size tokens
  await buildTokens('base/sizes', ['src/base/size.json5'], [], buildOptions);

  // Build motion tokens
  await buildTokens('base/motion', ['src/base/motion/**/*.json5'], [], buildOptions);

  // Build typography tokens
  await buildTokens('base/typography', ['src/base/typography/**/*.json5'], [], buildOptions);

  const excludePaths = [
    (filePath) => filePath === 'dist/css/functional/size/viewport.css',
    (filePath) => filePath.startsWith('dist/css/functional/themes/'),
  ];

  const all: string[] = [];

  for (const cssFile of glob.sync('dist/css/{base,functional}/**/*.css')) {
    if (excludePaths.some(matcher => matcher(cssFile))) continue;
    all.push(fs.readFileSync(cssFile, { encoding: 'utf8' }).trim());
  }

  fs.writeFileSync('dist/css/primitives.css', `${all.join('\n')}\n`);
};

await buildDesignTokens({
  buildPath: 'dist/',
  prefix: 'draco',
});
