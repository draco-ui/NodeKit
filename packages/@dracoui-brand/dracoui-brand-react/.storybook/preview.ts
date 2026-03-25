import * as React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';

      React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-light-theme', 'light');
        document.documentElement.setAttribute('data-dark-theme', 'dark');

        document.documentElement.style.backgroundColor = 'var(--draco-background-primary)';
        document.body.style.backgroundColor = 'var(--draco-background-primary)';

        const previewElements = document.querySelectorAll('.docs-story, [data-is-storybook]');
        previewElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.backgroundColor = 'var(--draco-background-primary)';
          }
        });
      }, [theme]);

      return React.createElement(Story);
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    layout: 'centered',
    viewport: {
      viewports: {
        small: {
          name: 'Small',
          styles: {
            width: '640px',
            height: '480px',
          },
        },
        medium: {
          name: 'Medium',
          styles: {
            width: '768px',
            height: '600px',
          },
        },
        large: {
          name: 'Large',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Brand',
          '*',
        ],
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
