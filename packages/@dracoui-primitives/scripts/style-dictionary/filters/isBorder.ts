import type { TransformedToken } from 'style-dictionary/types'

export const isBorder = (token: TransformedToken): boolean => {
  return token.$type === 'border'
}