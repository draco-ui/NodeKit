import type { PlatformConfig, Transform, TransformedToken } from 'style-dictionary/types'

export const namePathToKebabCase: Transform = {
  name: 'name/pathToKebabCase',
  type: 'name',
  transform: (token: TransformedToken, options?: PlatformConfig): string => {
    return (
      [options?.prefix, ...token.path]

        .filter((part: unknown): part is string => typeof part === 'string' && part !== '@')
        .join('-')
    )
  },
}