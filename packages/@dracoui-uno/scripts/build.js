import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const primitivesPath = resolve(__dirname, '../node_modules/@dracoui/primitives/dist/scss/base');

function parseScss(file) {
  const content = readFileSync(resolve(primitivesPath, file), 'utf-8');
  const vars = {};
  const regex = /\$draco-base-([a-z0-9-]+):\s*([^;]+)\s*!default;/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    vars[match[1]] = match[2].trim();
  }
  return vars;
}

function group(vars, prefixes) {
  const result = {};
  Object.entries(vars).forEach(([key, value]) => {
    for (const [prefix, name] of Object.entries(prefixes)) {
      if (key.startsWith(prefix)) {
        const remaining = key.replace(prefix, '');
        const parts = remaining.split('-');
        if (parts.length > 1) {
          const [group, ...rest] = parts;
          if (!result[name]) result[name] = {};
          if (!result[name][group]) result[name][group] = {};
          result[name][group][rest.join('-')] = value;
        } else {
          if (!result[name]) result[name] = {};
          result[name][remaining] = value;
        }
      }
    }
  });
  return result;
}

const colors = parseScss('_colors.scss');
const borders = parseScss('_borders.scss');
const sizes = parseScss('_sizes.scss');
const typography = parseScss('_typography.scss');
const motion = parseScss('_motion.scss');

const tokens = {
  colors: group(colors, { 'color-': 'colors' }).colors,
  ...group(borders, { 'border-radius-': 'borderRadius', 'border-width-': 'borderWidth' }),
  spacing: group(sizes, { 'size-': 'spacing' }).spacing,
  ...group(typography, { 'font-size-': 'fontSize', 'font-weight-': 'fontWeight', 'line-height-': 'lineHeight' }),
  ...group(motion, { 'duration-': 'transitionDuration', 'easing-': 'transitionTimingFunction' })
};

mkdirSync(resolve(__dirname, '../dist'), { recursive: true });

const files = {
  'tokens.js': `export const tokens = ${JSON.stringify(tokens, null, 2)};
export const colors = tokens.colors;
export const borderRadius = tokens.borderRadius;
export const borderWidth = tokens.borderWidth;
export const spacing = tokens.spacing;
export const fontSize = tokens.fontSize;
export const fontWeight = tokens.fontWeight;
export const lineHeight = tokens.lineHeight;
export const transitionDuration = tokens.transitionDuration;
export const transitionTimingFunction = tokens.transitionTimingFunction;`,

  'tokens.d.ts': `export const tokens: {
  colors: Record<string, Record<string, string>>;
  borderRadius: Record<string, string>;
  borderWidth: Record<string, string>;
  spacing: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  lineHeight: Record<string, string>;
  transitionDuration: Record<string, string>;
  transitionTimingFunction: Record<string, string>;
};
export const colors: typeof tokens.colors;
export const borderRadius: typeof tokens.borderRadius;
export const borderWidth: typeof tokens.borderWidth;
export const spacing: typeof tokens.spacing;
export const fontSize: typeof tokens.fontSize;
export const fontWeight: typeof tokens.fontWeight;
export const lineHeight: typeof tokens.lineHeight;
export const transitionDuration: typeof tokens.transitionDuration;
export const transitionTimingFunction: typeof tokens.transitionTimingFunction;`,

  'theme.js': `import { tokens } from './tokens.js';
export const theme = tokens;`,

  'theme.d.ts': `import { tokens } from './tokens';
export const theme: typeof tokens;`,

  'preset.js': `import { theme } from './theme.js';
export function presetDraco() { return { name: '@dracoui/uno', theme }; }
export default presetDraco;`,

  'preset.d.ts': `import type { Preset } from '@unocss/core';
export function presetDraco(): Preset;
export default presetDraco;`,

  'index.js': `export { tokens, colors, borderRadius, borderWidth, spacing, fontSize, fontWeight, lineHeight, transitionDuration, transitionTimingFunction } from './tokens.js';
export { theme } from './theme.js';
export { presetDraco, default } from './preset.js';`,

  'index.d.ts': `export { tokens, colors, borderRadius, borderWidth, spacing, fontSize, fontWeight, lineHeight, transitionDuration, transitionTimingFunction } from './tokens';
export { theme } from './theme';
export { presetDraco, default } from './preset';`
};

Object.entries(files).forEach(([name, content]) =>
  writeFileSync(resolve(__dirname, '../dist', name), content)
);

console.log('✓ Built @dracoui/uno');
