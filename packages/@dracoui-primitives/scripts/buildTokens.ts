import fs from "node:fs";
import glob from 'fast-glob';
import { css } from './style-dictionary/platforms/css';
import { docJson } from './style-dictionary/platforms/docJson';
import { javascript } from './style-dictionary/platforms/javascript';
import { scss } from './style-dictionary/platforms/scss';
import { themes } from '../theme.config';
import { DracoStyleDictionary } from "../style-dictionary.config";

/*
 * Generates Style Dictionary configuration object.
 * @param {string} filename - The base filename for output files.
 * @param {string[]} source - Array of source paths for tokens.
 * @param {string[]} include - Array of include paths for tokens.
 * @param {object} options - Options object (e.g., prefix, buildPath, theme).
 * @param {object} platforms - Additional platform configurations.
 * @returns {object} Style Dictionary configuration object.
 */
const getStyleDictionaryConfig = (filename, source, include, options, platforms = {}) => ({
  source,
  include,
  log: { warnings: 'disabled' as 'disabled', verbosity: 'silent' as 'silent', errors: { brokenReferences: 'throw' as 'throw' } },
  platforms: Object.fromEntries(
    Object.entries({
      css: css(`css/${filename}.css`, options.prefix, options.buildPath, { theme: options.theme }),
      scss: scss(`scss/${filename}.scss`, options.prefix, options.buildPath, { theme: options.theme }),
      docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath, { theme: options.theme }),
      ...platforms,
    }).filter(([, platform]) => platform !== undefined),
  ),
});

/*
 * Extends Style Dictionary and builds all platforms for a given token set.
 * @param {string} filename - Filename for the token set.
 * @param {string[]} source - Source paths for tokens.
 * @param {string[]} include - Include paths for tokens.
 * @param {object} buildOptions - Build options.
 * @param {object} additionalPlatforms - Additional platform configurations.
 */
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

/*
 * Combines files matching a glob pattern into a single output file.
 * @param {string} globPattern - Glob pattern to find files.
 * @param {((filePath: string) => boolean)[]} excludePaths - Array of functions to exclude file paths.
 * @param {string} outputFile - Path to the output file.
 */
const combineFiles = (globPattern, excludePaths, outputFile) => {
  const allFilesContent: string[] = [];
  for (const filePath of glob.sync(globPattern)) {
    if (excludePaths.some(matcher => matcher(filePath))) continue;
    allFilesContent.push(fs.readFileSync(filePath, { encoding: 'utf8' }).trim());
  }
  fs.writeFileSync(outputFile, `${allFilesContent.join('\n')}\n`);
};

/*
 * Builds design tokens for all categories and themes.
 * @param {object} buildOptions - Build options (e.g., buildPath, prefix).
 */
export const buildDesignTokens = async (buildOptions) => {
  await buildTokens('base/colors', ['src/base/colors/**/*.json5'], [], buildOptions);
  for (const { filename, source, include, theme } of themes) {
    await buildTokens(`functional/themes/${filename}`, source, include, { ...buildOptions, themed: true, theme: [theme] }, { fallbacks: undefined });
  }
  await buildTokens('base/borders', ['src/base/borders/**/*.json5'], [], buildOptions);
  await buildTokens('base/sizes', ['src/base/size.json5'], [], buildOptions);
  await buildTokens('base/motion', ['src/base/motion/**/*.json5'], [], buildOptions);
  await buildTokens('base/typography', ['src/base/typography/**/*.json5'], [], buildOptions);

  const excludePathsCSS = [
    (filePath) => filePath === 'dist/css/functional/size/viewport.css',
    (filePath) => filePath.startsWith('dist/css/functional/themes/'),
  ];

  combineFiles('dist/css/{base,functional}/**/*.css', excludePathsCSS, 'dist/css/primitives.css');
  combineFiles('dist/scss/{base,functional}/**/*.scss', [], 'dist/scss/primitives.scss');
};

await buildDesignTokens({ buildPath: 'dist/', prefix: 'draco' });
