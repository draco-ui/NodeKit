import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Draco UI',
  brandUrl: 'https://dracoui.com',
  brandTarget: '_self',

  // UI
  appBg: '#1a1a1a',
  appContentBg: '#1a1a1a',
  appBorderColor: '#2a2a2a',
  appBorderRadius: 8,

  // Text colors
  textColor: '#e5e5e5',
  textInverseColor: '#1a1a1a',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#ffffff',
  barBg: '#1a1a1a',

  // Form colors
  inputBg: '#2a2a2a',
  inputBorder: '#3a3a3a',
  inputTextColor: '#e5e5e5',
  inputBorderRadius: 6,

  // Font
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: false,
  },
});
