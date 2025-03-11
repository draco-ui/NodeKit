import { colord } from 'colord';
import { isColorWithAlpha } from '../filters/index.js';

import type { PlatformConfig, Transform, TransformedToken } from 'style-dictionary/types';

export const colorToRgbAlpha: Transform = {
  name: 'color/rgbAlpha',
  type: 'value',
  transitive: true,
  filter: isColorWithAlpha,
  transform: (token: TransformedToken, config: PlatformConfig) => {
    const baseColor = token.$value ?? token.value;
    if (baseColor === undefined) {
      throw new Error(`Token value is undefined for token "${token.name}"`);
    }

    if (token.alpha === null || token.alpha === undefined) {
      return baseColor;
    }

    return colord(baseColor).alpha(token.alpha).toRgbString();
  },
};
