import type { StorybookConfig } from '@storybook/ember-cli-storybook';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  framework: {
    name: '@storybook/ember-cli-storybook',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
