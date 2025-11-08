import { useEffect, useState } from 'react';
import { useAsync } from 'react-use';
import { getAllCSSVariables, parseTokensFromCSS, groupColorsByPalette, filterTokens } from './utils';

/**
 * Hook to load all CSS variables with a delay
 */
export const useTokens = (delay = 100) => {
  const [tokens, setTokens] = useState<Record<string, string>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTokens(getAllCSSVariables());
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return tokens;
};

/**
 * Hook to load theme tokens from CSS files
 */
export const useThemeTokens = () => {
  return useAsync(async () => {
    const [light, dark] = await Promise.all([
      parseTokensFromCSS('/node_modules/@dracoui/primitives/dist/docs/functional/themes/light.tokens.css'),
      parseTokensFromCSS('/node_modules/@dracoui/primitives/dist/docs/functional/themes/dark.tokens.css'),
    ]);

    return { light, dark };
  }, []);
};

/**
 * Hook to organize tokens by category
 */
export const useCategorizedTokens = (tokens: Record<string, string>) => {
  const baseColorEntries = Object.entries(tokens).filter(([key]) => key.startsWith('--draco-base-color'));
  const colorPalettes = groupColorsByPalette(Object.fromEntries(baseColorEntries));

  return {
    colorPalettes,
    productColors: filterTokens(tokens, '--draco-product-color'),
    buttonTokens: filterTokens(tokens, 'button'),
    badgeTokens: filterTokens(tokens, 'badge'),
    inputTokens: filterTokens(tokens, 'input'),
    spacingTokens: filterTokens(tokens, /spacing|gap|padding/),
    borderTokens: filterTokens(tokens, /border|radius/),
    typographyTokens: filterTokens(tokens, /text|font|weight|line-height/),
    motionTokens: filterTokens(tokens, /duration|easing/),
  };
};
