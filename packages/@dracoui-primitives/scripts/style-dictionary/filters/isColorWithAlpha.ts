import { isColor } from './isColor.js';

import type { TransformedToken } from 'style-dictionary/types';

export const isColorWithAlpha = (token: TransformedToken): boolean => {
  return isColor(token) && token.alpha !== undefined && typeof token.alpha === 'number'
}