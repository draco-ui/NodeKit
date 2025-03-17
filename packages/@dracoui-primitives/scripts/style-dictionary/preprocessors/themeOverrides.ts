import type { PlatformConfig, PreprocessedTokens, Preprocessor, DesignToken } from 'style-dictionary/types';

export const themeOverrides: Preprocessor = {
  name: 'themeOverrides',
  preprocessor: (dictionary: PreprocessedTokens, config: PlatformConfig): PreprocessedTokens => {
    const extensionProp = config.options?.themeOverrides?.extensionProp || 'dev.dracoui.overrides';
    const valueProp = config.options?.themeOverrides?.valueProp || '$value';

    // Inline utility: asArray
    const asArray = (item: unknown) => (Array.isArray(item) ? item : [item]).filter(Boolean);
    const [currentTheme, fallbackTheme] = asArray(config.options?.themeOverrides?.theme);

    // Inline utility: transformTokens
    const transformTokens = (
      token: DesignToken | Record<string, unknown>,
      transform: (token: DesignToken) => DesignToken
    ): DesignToken | Record<string, unknown> => {
      if (typeof token !== 'object' || token === null) return token;
      if ('$value' in token || 'value' in token) {
        return transform(token as DesignToken);
      }
      const nextObj: Record<string, unknown> = {};
      for (const [prop, value] of Object.entries(token)) {
        nextObj[prop] = transformTokens(value, transform);
      }
      return nextObj;
    };

    const tokens = transformTokens(dictionary, token => {
      // return early if no theme value is set
      if (
        !currentTheme ||
        !token.$extensions?.[extensionProp] ||
        (!token.$extensions?.[extensionProp][currentTheme] && !token.$extensions?.[extensionProp][fallbackTheme])
      ) {
        return token;
      }

      // get override
      const override =
        token.$extensions?.[extensionProp][currentTheme] || token.$extensions?.[extensionProp][fallbackTheme];

      return {
        ...token,
        ...(typeof override === 'object' ? override : { [valueProp]: override }),
      };
    });

    return tokens;
  },
};