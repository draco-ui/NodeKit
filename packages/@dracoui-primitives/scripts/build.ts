import StyleDictionary from 'style-dictionary';
import type { Config, DesignToken, Transform } from 'style-dictionary/types';

import tinycolor from 'tinycolor2';

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cloneDeep } from 'lodash-es';

// SCRIPT CONFIG

const __filename = fileURLToPath(import.meta.url); // Get the file path of the current module
const __dirname = dirname(__filename); // Get the directory name of the current module
const distFolder = path.resolve(__dirname, '../dist');

// CUSTOM TRANSFORMS

const transformPxToRem: Transform['transform'] = (token, platform) => {
    const val = parseFloat(token.value);
    const baseFont = platform?.basePxFontSize || 16;
    if (isNaN(val)) throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'rem'.\n`;
    return `${(token.value / baseFont)}rem`;
}

StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    filter: function(token) {
        return token.type === 'size';
    },
    transform: function (token) {
        const val = parseFloat(token.value);
        if (isNaN(val)) throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'px'.\n`;
        return `${token.value}px`;
    }
});

StyleDictionary.registerTransform({
  name: 'border/px',
  type: 'value',
  filter: function(token) {
      return token?.attributes?.category === 'border';
  },
  transform: function (token) {
      const val = parseFloat(token.value);
      if (isNaN(val)) return token.value;
      return `${token.value}px`;
  }
});


StyleDictionary.registerTransform({
    name: 'font-size/rem',
    type: 'value',
    filter: function(token) {
        return token?.attributes?.category === 'typography' && token.type === 'font-size';
    },
    transform: transformPxToRem
});

StyleDictionary.registerTransform({
    name: 'font-size/px',
    type: 'value',
    filter: function(token) {
        return token?.attributes?.category === 'typography' && token.type === 'font-size';
    },
    transform: function (token) {
        const val = parseFloat(token.value);
        if (isNaN(val)) throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'px'.\n`;
        return `${token.value}px`;
    }
});

StyleDictionary.registerTransform({
    name: 'color/with-alpha',
    type: 'value',
    transitive: true, // see: https://amzn.github.io/style-dictionary/#/transforms?id=transitive-transforms
    filter: function(token: DesignToken) {
        return token.type === 'color' && token.alpha;
    },
    transform: function (token) {
        const color = tinycolor(token.value);
        if (!color.isValid) throw `Invalid Color: '${token.name}: ${token.value}' is not a valid color.\n`;
        const alpha = parseFloat(token.alpha);
        if (!(alpha > 0 && alpha < 1)) throw `Invalid Alpha: '${token.name}: ${token.value}' is not a valid alpha value (should be in the format 0.x).\n`;
        // https://caniuse.com/mdn-css_types_color_alpha_hexadecimal_notation
        return color.setAlpha(alpha).toHex8String();
    }
});

StyleDictionary.registerTransform({
    name: 'time/sec',
    type: 'value',
    filter: function (token) {
        return token.type === 'time' && token.value.match(/^[\d.]+$/);
    },
    transform: function (token) {
        return `${token.value}s`;
    },
});

StyleDictionary.registerTransformGroup({
    name: 'products/web',
    transforms: ['attribute/cti', 'name/kebab', 'font-size/rem', 'size/px', 'color/css', 'color/with-alpha', 'time/sec']
});

StyleDictionary.registerTransformGroup({
    name: 'products/email',
    // notice: for emails we need the font-size in `px` (not `rem`)
    transforms: ['attribute/cti', 'name/kebab', 'font-size/px', 'size/px', 'color/css', 'color/with-alpha', 'time/sec']
});

StyleDictionary.registerTransformGroup({
    name: 'marketing/web',
    transforms: ['attribute/cti', 'name/kebab', 'font-size/rem', 'size/px', 'color/css', 'color/with-alpha', 'time/sec']
});

StyleDictionary.registerFormat({
    name: 'docs/json',
    format: function (dictionary: any) {
        // console.log(dictionary.allTokens);
        // Notice: this object shape is used also in the documentation so any updates
        // to this format should be reflected in the corresponding type definition.
        const output: {}[] = [];
        dictionary.allTokens.forEach((token: any) => {
            // we remove the "filePath" prop from the token because the orginal file path is irrelevant for us
            // (plus its value is an absolute path, so it causes useless diffs in git)
            const outputToken = cloneDeep(token);
            delete outputToken.filePath;
            delete outputToken.isSource;
            output.push(outputToken);
        });
        return JSON.stringify(output, null, 2);
    },
});

// DYNAMIC CONFIG

const targets = {
    'colors': {
        'source': [
            `src/color/**/*.json`,
        ],
        'transformGroup': 'products/web',
        'platforms': ['web/css-variables', 'docs/json']
    },
    'borders': {
      'source': [
          `src/border/**/*.json`,
      ],
      'transformGroup': 'products/web',
      'platforms': ['web/css-variables', 'docs/json']
  },
};

function getStyleDictionaryConfig({ target }: { target: string }): Config {
    // @ts-ignore safe to ignore, since we control the `targets` object, and the `getStyleDictionaryConfig` invocations
    const { source, transformGroup, platforms } = targets[target];

    // we need to explicitly initialize the `config` object this way to make TS happy
    const config: Config = {};
    config.source = source;
    config.platforms = {};

    if (platforms.includes('web/css-variables')) {
        config.platforms['web/css-variables'] = {
            transformGroup,
            "buildPath": `dist/${target}/css/`,
            "prefix": "token",
            "basePxFontSize": 16,
            "files": [
                {
                    "destination": `${target}.css`,
                    "format": "css/variables",
                    "filter": function(token: DesignToken) {
                        return !token.private;
                    },
                }
            ],
        }
    }

    if (platforms.includes("docs/json")) {
        config.platforms["docs/json"] = {
            transformGroup,
            "buildPath": `dist/docs/${target}/`,
            "prefix": "token",
            "basePxFontSize": 16,
            "files": [
                {
                    "destination": `${target}.json`,
                    "format": "docs/json",
                    "filter": function(token: DesignToken) {
                        return !token.private;
                    },
                }
            ]
        }
    }

    if (platforms.includes("json")) {
        config.platforms["json"] = {
            transformGroup,
            "buildPath": `dist/${target}/`,
            "prefix": "token",
            "basePxFontSize": 16,
            "files": [
                {
                    "destination": `${target}.json`,
                    "format": "json",
                    "filter": function(token: DesignToken) {
                        return !token.private;
                    },
                }
            ]
        }
    }

    return config;
}

// PROCESS THE DESIGN TOKENS

console.log('Build started...');
console.log('\n==============================================');

// empty the dist folder
console.log(`\nCleaning up dist folder`);
fs.emptyDirSync(distFolder);

for (const target of Object.keys(targets)) {
    const StyleDictionaryInstance = new StyleDictionary(getStyleDictionaryConfig({ target }));

    console.log(`\nProcessing target "${target}"...`);
    await StyleDictionaryInstance.hasInitialized;
    await StyleDictionaryInstance.buildAllPlatforms()
    console.log('\nEnd processing');
}


console.log('\n==============================================');
console.log('\nBuild completed!');