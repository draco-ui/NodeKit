import type { TransformedToken } from 'style-dictionary/types'

export const isDimension = (token: TransformedToken): boolean => {
  return token.$type === 'dimension'
}