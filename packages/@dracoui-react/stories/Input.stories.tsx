/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'radio',
      options: ['outline', 'filled', 'underline'],
      description: 'Visual variant of the input',
      table: {
        type: { summary: 'outline | filled | underline' },
        defaultValue: { summary: 'outline' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Type of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    floatingLabel: {
      control: 'boolean',
      description: 'Enables floating label behavior using the placeholder text. When true, the placeholder animates to the top border on focus/input (Material Design style)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    depth: {
      control: 'boolean',
      description: 'An input can have a 3D depth/shadow effect.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    depthDirection: {
      control: 'radio',
      options: ['right', 'center'],
      description: 'Direction of the depth shadow.',
      table: {
        type: { summary: 'right | center' },
        defaultValue: { summary: 'right' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Default input with medium size and outline variant
 */
export const Default: Story = {
  args: {
    floatingLabel: true,
    placeholder: 'Enter text...',
    size: 'medium',
    variant: 'outline',
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underline" placeholder="Underline" />
    </div>
  )
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Input size="small" placeholder="Small" />
      <Input size="medium" placeholder="Medium" />
      <Input size="large" placeholder="Large" />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Input fullWidth placeholder="Full width input" />
    </div>
  ),
};

/**
 * Floating label input with Material Design-style animation
 */
export const FloatingLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Input placeholder="Email address" floatingLabel />
      <Input placeholder="Full name" size="large" floatingLabel />
      <Input placeholder="Phone number" variant="filled" floatingLabel />
    </div>
  ),
};

/**
 * Input with 3D depth/shadow effect
 */
export const Depth: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Input depth depthDirection="right" placeholder="Depth Right" />
      <Input depth depthDirection="center" placeholder="Depth Center" />
    </div>
  ),
};

/**
 * Depth effect combined with floating label
 */
export const DepthWithFloatingLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Input depth depthDirection="right" floatingLabel placeholder="Depth Right" />
      <Input depth depthDirection="center" floatingLabel placeholder="Depth Center" />
    </div>
  ),
};
