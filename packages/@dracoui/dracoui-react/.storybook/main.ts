import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname, resolve } from 'path';
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

          // Dracoui tabs
          '@dracoui-react/tabs': resolve(__dirname, '../../../@dracoui-react/dracoui-react-tabs/src'),

          // Sprocketui packages
          '@sprocketui-react/tabs': resolve(SPROCKETUI_BASE, '@sprocketui-react/sprocketui-react-tabs/src'),
          'shared': resolve(SPROCKETUI_BASE, 'shared/src'),

          // Necto packages
          '@necto/mergers': resolve(NECTO_BASE, '@necto/necto-mergers/src'),
          '@necto/strings': resolve(NECTO_BASE, '@necto/necto-strings/src'),
          '@necto-react/hooks': resolve(NECTO_BASE, '@necto-react/necto-react-hooks/src'),
          '@necto-react/components': resolve(NECTO_BASE, '@necto-react/necto-react-components/src'),
        },
      },
    });
  },
};

export default config;
