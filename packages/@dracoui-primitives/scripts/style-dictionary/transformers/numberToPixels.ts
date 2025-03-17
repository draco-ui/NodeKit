import type { Transform, TransformedToken } from 'style-dictionary/types';

export const numberToPixels: Transform = {
  name: 'value/px',
  type: 'value',
  transitive: true,
  transform: (token: TransformedToken) => {
    const value = token.$value ?? token.value;
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  },
};
