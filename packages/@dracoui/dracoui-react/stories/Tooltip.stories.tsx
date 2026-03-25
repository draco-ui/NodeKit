import * as React from 'react';
import { Button } from '@dracoui-react/buttons';
import { Tooltip } from '@dracoui-react/tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['normal', 'inverted'],
      description: 'Tooltip variant.',
      table: {
        type: { summary: 'normal | inverted' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
      description: 'Tooltip size.',
      table: {
        type: { summary: 'small | medium' },
        defaultValue: { summary: 'medium' },
      },
    },
    content: {
      control: 'text',
      description: 'The content displayed in the tooltip',
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '250' },
      },
    },
    closeDelay: {
      control: 'number',
      description: 'Delay in milliseconds before hiding the tooltip',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '250' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Placement of the tooltip relative to the trigger element',
      table: {
        type: { summary: 'top | bottom | left | right' },
        defaultValue: { summary: 'top' },
      },
    },
    offset: {
      control: 'number',
      description: 'The offset (in pixels) between the tooltip and the trigger element',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
      },
    },
    withArrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'normal',
    size: 'medium',
    content: 'Tooltip content',
    delay: 250,
    closeDelay: 250,
    placement: 'top',
    offset: 8,
    withArrow: false,
    isDisabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover or focus me</Button>
    </Tooltip>
  ),
};

export const PlainButton: Story = {
  args: {
    content: 'Works with plain button',
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Tooltip {...args}>
        <button type="button" style={{ padding: '8px 16px', cursor: 'pointer' }}>Plain HTML button</button>
      </Tooltip>
    </div>
  ),
};

export const WithArrow: Story = {
  args: {
    content: 'Tooltip with arrow',
    withArrow: true,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Tooltip {...args}>
        <Button>With arrow</Button>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 80 }}>
      <Tooltip {...args} placement="top" content="Top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip {...args} placement="bottom" content="Bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip {...args} placement="left" content="Left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip {...args} placement="right" content="Right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, padding: 40 }}>
      <Tooltip {...args} size="small" content="Small tooltip">
        <Button variant="outline">Small</Button>
      </Tooltip>
      <Tooltip {...args} size="medium" content="Medium tooltip">
        <Button variant="outline">Medium</Button>
      </Tooltip>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, padding: 40 }}>
      <Tooltip {...args} variant="normal" content="Normal variant">
        <Button variant="outline">Normal</Button>
      </Tooltip>
      <Tooltip {...args} variant="inverted" content="Inverted variant">
        <Button variant="outline">Inverted</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'You should not see this',
    isDisabled: true,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Tooltip {...args}>
        <Button>Tooltip is disabled</Button>
      </Tooltip>
    </div>
  ),
};
