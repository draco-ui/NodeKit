import * as React from 'react';
import { Button } from '@dracoui-react/button';
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
    position: {
      control: 'select',
      options: [
        'above',
        'above-start',
        'above-end',
        'below',
        'below-start',
        'below-end',
        'before',
        'before-top',
        'before-bottom',
        'after',
        'after-top',
        'after-bottom',
      ],
      description: 'Position of the tooltip relative to the trigger element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'above' },
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
  },
  args: {
    variant: 'normal',
    size: 'medium',
    content: 'Tooltip content',
    delay: 250,
    closeDelay: 250,
    position: 'above',
    offset: 8,
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Tooltip {...args}>
        <Button>Hover or focus me</Button>
      </Tooltip>
    </div>
  ),
};