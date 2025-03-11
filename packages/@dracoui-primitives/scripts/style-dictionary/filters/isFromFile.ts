import type { TransformedToken } from 'style-dictionary/types'

export const isFromFile = (token: TransformedToken, files: string[]): boolean => {
  return files?.includes(token.filePath) === true
}