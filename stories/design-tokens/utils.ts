/**
 * Utility functions for parsing and organizing design tokens
 */

/**
 * Get all CSS variables from the document
 */
export const getAllCSSVariables = (): Record<string, string> => {
  const allVariables: Record<string, string> = {};
  const styles = getComputedStyle(document.documentElement);

  for (let i = 0; i < document.styleSheets.length; i++) {
    try {
      const sheet = document.styleSheets[i];
      if (!sheet.cssRules) continue;

      for (let j = 0; j < sheet.cssRules.length; j++) {
        const rule = sheet.cssRules[j];
        if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
          const style = rule.style;
          for (let k = 0; k < style.length; k++) {
            const prop = style[k];
            if (prop.startsWith('--draco')) {
              allVariables[prop] = styles.getPropertyValue(prop).trim();
            }
          }
        }
      }
    } catch (e) {
      // Skip stylesheets we can't access (CORS)
    }
  }

  return allVariables;
};

/**
 * Parse tokens from a CSS file
 */
export const parseTokensFromCSS = async (cssPath: string): Promise<Record<string, string>> => {
  try {
    const response = await fetch(cssPath);
    const cssText = await response.text();
    const tokens: Record<string, string> = {};

    const regex = /--(draco-[a-z0-9-]+):\s*([^;]+);/g;
    let match;

    while ((match = regex.exec(cssText)) !== null) {
      const [, name, value] = match;
      tokens[`--${name}`] = value.trim();
    }

    return tokens;
  } catch (error) {
    console.error('Error parsing CSS:', error);
    return {};
  }
};

/**
 * Group base colors by palette name (lime, neutral, etc.)
 */
export const groupColorsByPalette = (tokens: Record<string, string>): Record<string, Record<string, string>> => {
  const colorPalettes: Record<string, Record<string, string>> = {};

  Object.entries(tokens).forEach(([key, value]) => {
    const match = key.match(/--draco-base-color-([a-z]+)-/);
    if (match) {
      const paletteName = match[1];
      if (!colorPalettes[paletteName]) {
        colorPalettes[paletteName] = {};
      }
      colorPalettes[paletteName][key] = value;
    }
  });

  return colorPalettes;
};

/**
 * Filter tokens by key pattern
 */
export const filterTokens = (tokens: Record<string, string>, pattern: string | RegExp): Record<string, string> => {
  return Object.entries(tokens)
    .filter(([key]) => {
      if (typeof pattern === 'string') {
        return key.includes(pattern);
      }
      return pattern.test(key);
    })
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};

/**
 * Capitalize first letter of a string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
