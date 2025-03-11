import { colord } from 'colord';
import { isColor } from '../filters/isColor.ts';
import type { PlatformConfig, Transform, TransformedToken } from 'style-dictionary/types';

export const colorToHex: Transform = {
  name: 'color/hex',
  type: 'value',
  transitive: true,
  filter: isColor,
  transform: (token: TransformedToken, config: PlatformConfig) => {
    const baseColor = (token as any).$value ?? token.value;
    if (baseColor === undefined) {
      throw new Error(`Token value is undefined for ${token.name}`);
    }

    const alphaValue = token.alpha;
    if (alphaValue === null || alphaValue === undefined || alphaValue === 1) {
      return colord(baseColor).toHex();
    }

    return colord(baseColor).alpha(alphaValue).toHex();
  },
};
