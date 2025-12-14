import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../src/Popover/Popover';
import { PopoverTrigger } from '../src/Popover/PopoverTrigger';
import { PopoverSurface } from '../src/Popover/PopoverSurface';
import { Button } from '../src/Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['normal', 'inverted'],
      description: 'Visual variant of the popover',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Determines popover sizing',
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
      description: 'Position of the popover relative to the trigger',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state (uncontrolled)',
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    openOnHover: {
      control: 'boolean',
      description: 'Open the popover on hover',
    },
    withArrow: {
      control: 'boolean',
      description: 'Render an arrow pointing to the trigger',
    },
    trapFocus: {
      control: 'boolean',
      description: 'Trap focus within the popover surface',
    },
    offset: {
      control: 'number',
      description: 'Distance in pixels between trigger and surface',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Close the popover when clicking outside of it',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    variant: 'normal',
    size: 'medium',
    position: 'below',
    withArrow: false,
    openOnHover: false,
    trapFocus: true,
    offset: 12,
    defaultOpen: false,
    closeOnClickOutside: true,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="primary">Open Popover</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              minWidth: 220,
            }}
          >
            <Button variant="secondary" fullWidth>
              Project 1
            </Button>
            <Button variant="secondary" fullWidth>
              Option 2
            </Button>
            <Button variant="secondary" fullWidth>
              Option 3
            </Button>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  ),
};

export const WithSecondaryButton: Story = {
  args: {
    variant: 'normal',
    size: 'medium',
    position: 'below',
    withArrow: false,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="secondary">Click for Options</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 200 }}>
            <Button variant="ghost" fullWidth>Edit</Button>
            <Button variant="ghost" fullWidth>Duplicate</Button>
            <Button variant="ghost" fullWidth>Delete</Button>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  ),
};

export const WithCustomElement: Story = {
  args: {
    variant: 'normal',
    size: 'small',
    position: 'below-start',
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '6px 10px',
              background: '#f0f0f0',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            <span>⚙️</span>
            <span>Settings</span>
          </div>
        </PopoverTrigger>

        <PopoverSurface>
          <div style={{ padding: 4, minWidth: 180 }}>
            <p style={{ margin: 0, fontSize: 13 }}>Custom trigger example</p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: '#666' }}>
              You can use any element as a trigger!
            </p>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  ),
};

export const OpenOnHover: Story = {
  args: {
    variant: 'inverted',
    size: 'small',
    position: 'above',
    openOnHover: true,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <div style={{ padding: 4, minWidth: 160 }}>
            <p style={{ margin: 0, fontSize: 12 }}>Opens on hover!</p>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  ),
};

export const AllowScroll: Story = {
  args: {
    variant: 'normal',
    size: 'medium',
    position: 'below',
    trapFocus: false,
  },
  render: (args) => (
    <div style={{ padding: 40, minHeight: 1000 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="primary">Open (Scroll Allowed)</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 220 }}>
            <p style={{ margin: 0, fontSize: 12 }}>You can scroll the page!</p>
            <Button variant="secondary" fullWidth>Option 1</Button>
            <Button variant="secondary" fullWidth>Option 2</Button>
          </div>
        </PopoverSurface>
      </Popover>
      <div style={{ marginTop: 20, color: '#666', fontSize: 14 }}>
        Scroll down to test...
      </div>
    </div>
  ),
};

export const WithBEMClasses: Story = {
  args: {
    variant: 'inverted',
    size: 'large',
    position: 'below',
    defaultOpen: false,
  },
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="primary">BEM Class Names</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <div style={{ padding: 8 }}>
            <p style={{ margin: 0, fontSize: 13, marginBottom: 8 }}>
              This popover uses BEM class names:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12 }}>
              <li><code>draco-popover-surface</code></li>
              <li><code>draco-popover-surface--inverted</code></li>
              <li><code>draco-popover-surface--large</code></li>
            </ul>
            <p style={{ margin: '8px 0 0', fontSize: 11, color: '#888' }}>
              Open DevTools to inspect the classes!
            </p>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  ),
};
