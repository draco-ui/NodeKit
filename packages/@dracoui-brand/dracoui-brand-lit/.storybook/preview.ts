import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
        order: ['Brand Lit', '*'],
      },
    },
    docs: {
      canvas: {
        hidden: true,
      },
      source: {
        type: 'code',
      },
      toc: {
        headingSelector: 'h2, h3',
        title: 'On this page',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
