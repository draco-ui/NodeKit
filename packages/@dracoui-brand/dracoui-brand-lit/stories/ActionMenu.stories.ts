import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../src/components/ActionMenu/draco-action-menu.js';
import '../src/components/ActionMenu/draco-action-menu-trigger.js';
import '../src/components/ActionMenu/draco-action-menu-overlay.js';
import '../src/components/ActionMenu/draco-action-menu-item.js';
import '../src/components/Button/draco-button.js';

const meta: Meta = {
  title: 'Brand Lit/ActionMenu',
  component: 'draco-action-menu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <draco-action-menu>
      <draco-action-menu-trigger>
        <draco-button>Languages</draco-button>
      </draco-action-menu-trigger>
      <draco-action-menu-overlay>
        <draco-action-menu-item @draco-select=${() => console.log('Edit')}>United States</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Duplicate')}>Australia</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Archive')}>Germany</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Delete')}>Korea</draco-action-menu-item>
      </draco-action-menu-overlay>
    </draco-action-menu>
  `,
};

export const WithDisabledItem: Story = {
  render: () => html`
    <draco-action-menu>
      <draco-action-menu-trigger>
        <draco-button>Options</draco-button>
      </draco-action-menu-trigger>
      <draco-action-menu-overlay>
        <draco-action-menu-item @draco-select=${() => console.log('Copy')}>Copy</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Paste')}>Paste</draco-action-menu-item>
        <draco-action-menu-item disabled>Cut (disabled)</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Select all')}>Select all</draco-action-menu-item>
      </draco-action-menu-overlay>
    </draco-action-menu>
  `,
};

export const WithNativeButton: Story = {
  render: () => html`
    <draco-action-menu>
      <draco-action-menu-trigger>
        <button>Native Button Trigger</button>
      </draco-action-menu-trigger>
      <draco-action-menu-overlay>
        <draco-action-menu-item @draco-select=${() => console.log('Item 1')}>Item 1</draco-action-menu-item>
        <draco-action-menu-item @draco-select=${() => console.log('Item 2')}>Item 2</draco-action-menu-item>
      </draco-action-menu-overlay>
    </draco-action-menu>
  `,
};
