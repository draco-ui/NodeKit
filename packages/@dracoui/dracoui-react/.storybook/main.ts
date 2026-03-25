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

          // Dracoui React packages
          '@dracoui-react/buttons': resolve(__dirname, '../../../@dracoui-react/dracoui-react-buttons/src'),
          '@dracoui-react/card': resolve(__dirname, '../../../@dracoui-react/dracoui-react-card/src'),
          '@dracoui-react/checkbox': resolve(__dirname, '../../../@dracoui-react/dracoui-react-checkbox/src'),
          '@dracoui-react/index-table': resolve(__dirname, '../../../@dracoui-react/dracoui-react-index-table/src'),
          '@dracoui-react/input': resolve(__dirname, '../../../@dracoui-react/dracoui-react-input/src'),
          '@dracoui-react/popover': resolve(__dirname, '../../../@dracoui-react/dracoui-react-popover/src'),
          '@dracoui-react/progress-bar': resolve(__dirname, '../../../@dracoui-react/dracoui-react-progress-bar/src'),
          '@dracoui-react/tabs': resolve(__dirname, '../../../@dracoui-react/dracoui-react-tabs/src'),
          '@dracoui-react/text': resolve(__dirname, '../../../@dracoui-react/dracoui-react-text/src'),
          '@dracoui-react/tooltip': resolve(__dirname, '../../../@dracoui-react/dracoui-react-tooltip/src'),

          // Dracoui Types packages
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

          // Necto packages
          '@necto/dom': resolve(NECTO_BASE, '@necto/necto-dom/src'),
          '@necto/popper': resolve(NECTO_BASE, '@necto/necto-popper/src'),
          '@necto/mergers': resolve(NECTO_BASE, '@necto/necto-mergers/src'),
          '@necto/math': resolve(NECTO_BASE, '@necto/necto-math/src'),
          '@necto/strings': resolve(NECTO_BASE, '@necto/necto-strings/src'),
          '@necto-react/popper': resolve(NECTO_BASE, '@necto-react/necto-react-popper/src'),
          '@necto-react/hooks': resolve(NECTO_BASE, '@necto-react/necto-react-hooks/src'),
          '@necto-react/types': resolve(NECTO_BASE, '@necto-react/necto-react-types/src'),
          '@necto-react/helpers': resolve(NECTO_BASE, '@necto-react/necto-react-helpers/src'),
          '@necto-react/components': resolve(NECTO_BASE, '@necto-react/necto-react-components/src'),

          // Additional necto packages needed by hooks barrel exports
          '@necto/platform': resolve(NECTO_BASE, '@necto/necto-platform/src'),
          '@necto/types': resolve(NECTO_BASE, '@necto/necto-types/src'),
          '@necto/id': resolve(NECTO_BASE, '@necto/necto-id/src'),
          '@necto/constants': resolve(NECTO_BASE, '@necto/necto-constants/src'),
        },
      },
    });
  },
};

export default config;
