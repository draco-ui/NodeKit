import StyleDictionary from 'style-dictionary';
import {
  borderToCss,
  // colorToRgbAlpha,
  colorToHex,
  // colorToRgbaFloat,
  // cubicBezierToCss,
  dimensionToRem,
  // dimensionToPixelUnitless,
  durationToCss,
  // figmaAttributes,
  // fontFamilyToCss,
  // fontFamilyToFigma,
  // fontWeightToNumber,
  // jsonDeprecated,
  // namePathToDotNotation,
  // namePathToCamelCase,
  // namePathToPascalCase,
  namePathToKebabCase,
  // namePathToSlashNotation,
  // namePathToFigma,
  // shadowToCss,
  // typographyToCss,
  // dimensionToRemPxArray,
  // floatToPixel,
  // floatToPixelUnitless,
  // colorAlphaToCss
} from './scripts/style-dictionary/transformers/index.js';

// Create the StyleDictionary instance with default logging.
export const DracoStyleDictionary = new StyleDictionary({
  log: {
    verbosity: 'default',
  },
});

// Transformers
const transformers = [
  // colorAlphaToCss,
  // colorToRgbAlpha,
  // colorToRgbaFloat,
  colorToHex,
  // cubicBezierToCss,
  // floatToPixel,
  // floatToPixelUnitless,
  dimensionToRem,
  // dimensionToRemPxArray,
  // dimensionToPixelUnitless,
  durationToCss,
  // figmaAttributes,
  // jsonDeprecated,
  // namePathToCamelCase,
  // namePathToPascalCase,
  // namePathToDotNotation,
  // namePathToFigma,
  namePathToKebabCase,
  // namePathToSlashNotation,
  // shadowToCss,
  borderToCss,
  // typographyToCss,
  // fontWeightToNumber,
  // fontFamilyToCss,
  // fontFamilyToFigma,
];

transformers.forEach((transformer) => {
  DracoStyleDictionary.registerTransform(transformer);
});