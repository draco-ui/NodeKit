import type { TransformedToken } from 'style-dictionary/types'

export const isDuration = (token: TransformedToken): boolean => {
  return token.$type === 'duration'
}