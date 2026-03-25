import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../src/components/Button/draco-button.js';

const meta: Meta = {
  title: 'Brand Lit/Button',
  component: 'draco-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant.',
      table: {
        type: { summary: 'primary | secondary | ghost' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Button size.',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    elevated: {
      control: 'radio',
      options: ['hover', 'always', 'none'],
      description: 'Depth shadow effect behavior.',
      table: {
        type: { summary: 'hover | always | none' },
        defaultValue: { summary: 'hover' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    elevated: 'hover',
    disabled: false,
  },
  render: (args) => html`
    <draco-button
      variant=${args.variant}
      size=${args.size}
      elevated=${args.elevated}
      ?disabled=${args.disabled}
    >Brand Button</draco-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <draco-button variant="primary">Primary</draco-button>
      <draco-button variant="secondary">Secondary</draco-button>
      <draco-button variant="ghost">Ghost</draco-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <draco-button size="small">Small</draco-button>
      <draco-button size="medium">Medium</draco-button>
      <draco-button size="large">Large</draco-button>
    </div>
  `,
};

export const Elevated: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <draco-button elevated="hover">Hover (default)</draco-button>
      <draco-button elevated="always">Always</draco-button>
      <draco-button elevated="none">None</draco-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <draco-button disabled>Disabled</draco-button>
  `,
};
