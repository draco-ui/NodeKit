import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname, resolve } from 'path';
import { existsSync } from 'fs';
import { mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

// Base paths for linked repos
const SPROCKETUI_BASE = resolve(__dirname, '../../../../../../sprocketui/NodeKit/packages');
const NECTO_BASE = resolve(__dirname, '../../../../../../nectoutil/NodeKit/packages');

/**
 * Build resolve aliases for locally-linked necto packages.
 *
 * Each entry maps the published name (e.g. `@necto-react/helpers`) to its
 * checkout directory (e.g. `@necto-react/necto-react-helpers`). Some packages
 * are checked out with a `src/` tree, others only ship `dist/` — so we point at
 * `src` when it exists and otherwise let Vite resolve the package root via its
 * package.json `exports`/`main`. This keeps the config working across machines
 * where the sibling monorepos differ in shape.
 */
function nectoAliases(): Record<string, string> {
  const byScope: Record<string, string[]> = {
    '@necto': ['dom', 'popper', 'mergers', 'math', 'strings', 'assert', 'platform', 'types', 'id', 'constants'],
    '@necto-react': ['popper', 'hooks', 'types', 'helpers', 'components', 'state'],
  };
  const aliases: Record<string, string> = {};
  for (const [scope, names] of Object.entries(byScope)) {
    const folder = scope.slice(1); // '@necto' -> 'necto', '@necto-react' -> 'necto-react'
    for (const name of names) {
      const pkgDir = resolve(NECTO_BASE, scope, `${folder}-${name}`);
      const srcDir = join(pkgDir, 'src');
      const distEntry = join(pkgDir, 'dist', 'index.js');
      // Prefer source; fall back to the package root (resolved via package.json);
      // and as a last resort point straight at the built entry, for checkouts
      // where a package is a dist-only husk with no src or package.json
      // (e.g. @necto-react/helpers on some machines).
      if (existsSync(srcDir)) {
        aliases[`${scope}/${name}`] = srcDir;
      } else if (existsSync(join(pkgDir, 'package.json'))) {
        aliases[`${scope}/${name}`] = pkgDir;
      } else if (existsSync(distEntry)) {
        aliases[`${scope}/${name}`] = distEntry;
      }
    }
  }
  return aliases;
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-storysource'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  staticDirs: ['./public'],

  core: {
    disableTelemetry: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@dracoui/styles/dist/css/styles.css': resolve(__dirname, '../../@dracoui/dracoui-styles/dist/css/styles.css'),

          // Dracoui React packages
          '@dracoui-react/buttons': resolve(__dirname, '../../../@dracoui-react/dracoui-react-buttons/src'),
          '@dracoui-react/card': resolve(__dirname, '../../../@dracoui-react/dracoui-react-card/src'),
          '@dracoui-react/checkbox': resolve(__dirname, '../../../@dracoui-react/dracoui-react-checkbox/src'),
          '@dracoui-react/index-table': resolve(__dirname, '../../../@dracoui-react/dracoui-react-index-table/src'),
          '@dracoui-react/indicator': resolve(__dirname, '../../../@dracoui-react/dracoui-react-indicator/src'),
          '@dracoui-react/input': resolve(__dirname, '../../../@dracoui-react/dracoui-react-input/src'),
          '@dracoui-react/knob': resolve(__dirname, '../../../@dracoui-react/dracoui-react-knob/src'),
          '@dracoui-react/popover': resolve(__dirname, '../../../@dracoui-react/dracoui-react-popover/src'),
          '@dracoui-react/switch': resolve(__dirname, '../../../@dracoui-react/dracoui-react-switch/src'),
          '@dracoui-react/progress-bar': resolve(__dirname, '../../../@dracoui-react/dracoui-react-progress-bar/src'),
          '@dracoui-react/tabs': resolve(__dirname, '../../../@dracoui-react/dracoui-react-tabs/src'),
          '@dracoui-react/text': resolve(__dirname, '../../../@dracoui-react/dracoui-react-text/src'),
          '@dracoui-react/tooltip': resolve(__dirname, '../../../@dracoui-react/dracoui-react-tooltip/src'),

          // Dracoui Types packages
          '@dracoui-types/indicator': resolve(__dirname, '../../../@dracoui-types/dracoui-types-indicator/src'),
          '@dracoui-types/text': resolve(__dirname, '../../../@dracoui-types/dracoui-types-text/src'),
          '@dracoui-types/popover': resolve(__dirname, '../../../@dracoui-types/dracoui-types-popover/src'),
          '@dracoui-types/tooltip': resolve(__dirname, '../../../@dracoui-types/dracoui-types-tooltip/src'),

          // Sprocketui packages
          '@sprocketui-react/tabs': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-tabs/src'),
          '@sprocketui-react/button': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-button/src'),
          '@sprocketui-react/tooltip': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-tooltip/src'),
          '@sprocketui-react/progress': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-progress/src'),
          '@sprocketui-react/label': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-label/src'),
          '@sprocketui-types/buttons': resolve(SPROCKETUI_BASE, '@sprocketui-types/sprocketui-types-buttons/src'),
          'shared': resolve(SPROCKETUI_BASE, 'shared/src'),

          // Necto packages (src when present, else package root → dist)
          ...nectoAliases(),
        },
      },
    });
  },
};

export default config;
