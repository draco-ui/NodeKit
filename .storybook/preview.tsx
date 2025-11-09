import React from 'react';
import type { Preview } from '@storybook/react';
import '../packages/@dracoui-styles/dist/css/styles.css';

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
      const layout = context.parameters.layout || 'centered';

      // Apply theme to the entire body/html for full dark mode coverage
      React.useEffect(() => {
        document.documentElement.style.background = theme === 'dark' ? '#1a1a1a' : '#ffffff';
        document.body.style.background = theme === 'dark' ? '#1a1a1a' : '#ffffff';
        // Apply theme attributes to documentElement so portaled content (like Popover) can access CSS variables
        document.documentElement.setAttribute('data-color-mode', theme);
        document.documentElement.setAttribute('data-light-theme', 'light');
        document.documentElement.setAttribute('data-dark-theme', 'dark');
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
      disable: false, // We're handling background via theme decorator
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
  },
  tags: ['autodocs'],
};

export default preview;
