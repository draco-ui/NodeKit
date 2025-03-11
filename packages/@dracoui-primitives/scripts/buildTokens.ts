import fs from "node:fs";
import glob from 'fast-glob';
import { css } from './style-dictionary/platforms/css';
import { docJson } from './style-dictionary/platforms/docJson';
import { javascript } from './style-dictionary/platforms/javascript';
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
      css: css(`css/${filename}.css`, options.prefix, options.buildPath, {}),
      // javascript: javascript(`docs/${filename}.json`, options.prefix, options.buildPath, {
      //   theme: options.theme,
      // }),
      docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath, {
        theme: options.theme,
      }),
      ...platforms,
    }).filter((entry: [string, unknown]) => entry[1] !== undefined),
  ),
})

export const buildDesignTokens = async (buildOptions) => {
  /** -----------------------------------
   * Colors
   * ----------------------------------- */
  try {
    const colorsSD = await DracoStyleDictionary.extend(
      getStyleDictionaryConfig(
        `base/colors`,
        ['src/base/colors/**/*.json5'],
        [],
        buildOptions
      )
    );
    await colorsSD.buildAllPlatforms();
  } catch (e) {
    console.error('🛑 Error trying to build colors tokens for code output:', e);
  }

  /** -----------------------------------
   * Borders
   * ----------------------------------- */
  try {
    const colorsSD = await DracoStyleDictionary.extend(
      getStyleDictionaryConfig(
        `base/borders`,
        ['src/base/borders/**/*.json'],
        [],
        buildOptions
      )
    );
    await colorsSD.buildAllPlatforms();
  } catch (e) {
    console.error('🛑 Error trying to build borders tokens for code output:', e);
  }

  /** -----------------------------------
   * Typography tokens
   * ----------------------------------- */
  // try {
  //   const extendedSD = await DracoStyleDictionary.extend(
  //     getStyleDictionaryConfig(
  //       `typography`,
  //       ['src/typography.json'],
  //       buildOptions,
  //       {
  //         css: css(
  //           `css/typography.css`,
  //           buildOptions.prefix,
  //           buildOptions.buildPath,
  //           { options: { outputReferences: true } }
  //         ),
  //       }
  //     )
  //   );
  //   await extendedSD.buildAllPlatforms();

  // } catch (e) {
  //   console.error('🛑 Error trying to build typography tokens for code output:', e);
  // }

  // /** -----------------------------------
  //  * Motion tokens
  //  * ----------------------------------- */
  // try {
  //   const extendedSD = await PrimerStyleDictionary.extend(
  //     getStyleDictionaryConfig(
  //       `functional/motion/motion`,
  //       ['src/tokens/functional/motion/*.json5'],
  //       ['src/tokens/base/motion/*.json5'],
  //       buildOptions,
  //       {
  //         css: css(
  //           `css/functional/motion/motion.css`,
  //           buildOptions.prefix,
  //           buildOptions.buildPath,
  //           { options: { outputReferences: true } }
  //         ),
  //       }
  //     )
  //   );
  //   await extendedSD.buildAllPlatforms();

  //   const SdMotion = await PrimerStyleDictionary.extend(
  //     getStyleDictionaryConfig(
  //       `base/motion/motion`,
  //       ['src/tokens/base/motion/*.json5'],
  //       [],
  //       buildOptions
  //     )
  //   );
  //   await SdMotion.buildAllPlatforms();
  // } catch (e) {
  //   console.error('🛑 Error trying to build motion tokens for code output:', e);
  // }

  // /** -----------------------------------
  //  * Deprecated tokens
  //  * ----------------------------------- */
  // const deprecatedBuilds = [
  //   {
  //     filename: 'typography',
  //     source: [
  //       'src/tokens/base/typography/*.json5',
  //       'src/tokens/functional/typography/*.json5',
  //     ],
  //     include: ['src/tokens/base/typography/*.json5'],
  //   },
  //   {
  //     filename: 'size',
  //     source: [
  //       'src/tokens/base/size/*.json5',
  //       'src/tokens/functional/size/*.json5',
  //     ],
  //     include: ['src/tokens/base/size/*.json5'],
  //   },
  //   {
  //     filename: 'motion',
  //     source: [
  //       'src/tokens/base/motion/*.json5',
  //       'src/tokens/functional/motion/*.json5',
  //     ],
  //     include: ['src/tokens/base/motion/*.json5'],
  //   },
  // ];
  // try {
  //   for (const { filename, source, include } of deprecatedBuilds) {
  //     const extendedSD = await PrimerStyleDictionary.extend({
  //       source,
  //       include,
  //       platforms: {
  //         deprecated: deprecatedJson(`deprecated/${filename}.json`, buildOptions.prefix, buildOptions.buildPath),
  //       },
  //       log: {
  //         warnings: 'disabled',
  //         verbosity: 'silent',
  //         errors: {
  //           brokenReferences: 'throw',
  //         },
  //       },
  //     });
  //     await extendedSD.buildAllPlatforms();
  //   }
  // } catch (e) {
  //   console.error('🛑 Error trying to build deprecated tokens output:', e);
  // }

  /** -----------------------------------
   * Copy `removed` files
   * ----------------------------------- */
  // copyFromDir('src/tokens/removed', `${buildOptions.buildPath}removed`);

  const excludePaths = [
    (filePath) => filePath === 'dist/css/functional/size/viewport.css',
    (filePath) => filePath.startsWith('dist/css/functional/themes/'),
  ];

  const all: string[] = []

  for (const cssFile of glob.sync('dist/css/{base,functional}/**/*.css')) {
    let skip = false

    for (const matcher of excludePaths) {
      if (matcher(cssFile)) {
        skip = true
        break
      }
    }

    if (skip) continue

    all.push(fs.readFileSync(cssFile, {encoding: 'utf8'}).trim())
  }
  fs.writeFileSync('dist/css/primitives.css', `${all.join('\n')}\n`);
};

await buildDesignTokens({
  buildPath: 'dist/',
  prefix: 'draco',
});