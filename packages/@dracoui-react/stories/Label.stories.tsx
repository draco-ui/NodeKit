/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Visual size of the label text',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    weight: {
      control: 'radio',
      options: ['regular', 'semibold'],
      description: 'Font weight of the label text',
      table: {
        type: { summary: 'regular | semibold' },
        defaultValue: { summary: 'regular' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the label is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required (shows asterisk)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The label text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/**
 * Default label with medium size and regular weight
 */
export const Default: Story = {
  args: {
    children: 'Label text',
    size: 'medium',
    weight: 'regular',
  },
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Label size="small">Small label</Label>
      <Label size="medium">Medium label</Label>
      <Label size="large">Large label</Label>
    </div>
  )
};

export const Weight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Label weight="regular">Regular weight</Label>
      <Label weight="semibold">Semibold weight</Label>
    </div>
  )
};

export const Required: Story = {
  args: {
    children: 'Required field',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled label',
    disabled: true,
  },
};
