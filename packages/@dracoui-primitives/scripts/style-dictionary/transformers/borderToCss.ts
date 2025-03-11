import { isBorder } from '../filters/isBorder.ts'

import type {Transform, TransformedToken} from 'style-dictionary/types'

const checkForBorderTokenProperties = (border: Record<string, unknown>) => {
  if ('color' in border && 'width' in border && 'style' in border) {
    return true
  }
  return false
}

export const borderToCss: Transform = {
  name: 'border/css',
  type: 'value',
  transitive: true,
  filter: isBorder,
  transform: (token: TransformedToken) => {
    const value = token.$value ?? token.value
    // if value === string it was probably already transformed
    if (typeof value === 'string') {
      return value
    }
    //
    if (!checkForBorderTokenProperties(value)) {
      throw new Error(
        `Invalid border token property ${JSON.stringify(value)}. Must be an object with color, width and style properties.`,
      )
    }
    /* width | style | color */
    return `${value.width} ${value.style} ${value.color}`
  },
}