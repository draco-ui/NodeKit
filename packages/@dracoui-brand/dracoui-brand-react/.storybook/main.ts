import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname, resolve } from 'path';
import { mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
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
    const litSrc = resolve(__dirname, '../../dracoui-brand-lit/src');

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@dracoui-brand/lit': resolve(litSrc, 'index.ts'),
        },
      },
      server: {
        watch: {
          ignored: [`!${litSrc}/**`],
        },
      },
      optimizeDeps: {
        exclude: ['@dracoui-brand/lit'],
      },
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [resolve(__dirname, '../../dracoui-brand-lit/node_modules')],
          },
        },
      },
    });
  },
};

export default config;
