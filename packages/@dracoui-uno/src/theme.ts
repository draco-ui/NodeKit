/**
 * Tailwind CSS theme configuration using Draco UI tokens
 */

import { tokens } from './tokens';

export const theme = {
  colors: tokens.colors,
  borderRadius: tokens.borderRadius,
  borderWidth: tokens.borderWidth,
  spacing: tokens.spacing,
  fontSize: tokens.fontSize,
  fontWeight: tokens.fontWeight,
  lineHeight: tokens.lineHeight,
  transitionDuration: tokens.transitionDuration,
  transitionTimingFunction: tokens.transitionTimingFunction,
};

export default theme;
