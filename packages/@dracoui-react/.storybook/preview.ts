import * as React from 'react';
import { OverlayProvider } from 'react-aria';
import '@dracoui/styles/dist/css/styles.css';
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

      // Apply theme to the entire body/html for full dark mode coverage
      React.useEffect(() => {
        // Apply theme attributes to documentElement so portaled content (like Popover) can access CSS variables
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-light-theme', 'light');
        document.documentElement.setAttribute('data-dark-theme', 'dark');

        // Set background using CSS variable
        document.documentElement.style.backgroundColor = 'var(--draco-background-primary)';
        document.body.style.backgroundColor = 'var(--draco-background-primary)';

        // Apply to all preview iframes
        const previewElements = document.querySelectorAll('.docs-story, [data-is-storybook]');
        previewElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.backgroundColor = 'var(--draco-background-primary)';
          }
        });
      }, [theme]);

      return React.createElement(OverlayProvider, null, React.createElement(Story));
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
      disable: true, // Background is controlled by theme selector using CSS variables
    },
    layout: 'centered', // Make preview windows more compact by default
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
          'Design Tokens',
          'React',
          'Vue',
          'Ember',
          '*',
        ],
      },
    },
    docs: {
      canvas: {
        hidden: true, // Hide individual story canvases in docs page
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