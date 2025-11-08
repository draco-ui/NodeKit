import React from 'react';
import type { Preview } from '@storybook/react';
import '@dracoui/styles';

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
      }, [theme]);

      return React.createElement(
        'div',
        {
          'data-color-mode': theme,
          'data-light-theme': 'light',
          'data-dark-theme': 'dark',
          style: {
            background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
            padding: layout === 'centered' ? '2rem' : layout === 'padded' ? '1rem' : '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          },
        },
        React.createElement(Story)
      );
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
      disable: true, // We're handling background via theme decorator
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
