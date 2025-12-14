import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from '../src/SplitButton';
import { Popover } from '../src/Popover';
import { Button } from '../src/Button';

const meta: Meta<typeof SplitButton> = {
  title: "Components/SplitButton",
  component: SplitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    size: {
      control: "radio",
      options: ["xsmall", "small", "medium", "large"],
      description: "Size of the split button.",
      table: {
        type: { summary: "xsmall | small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    depth: {
      control: "boolean",
      description: "A split button can have a 3D depth/shadow effect.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    depthDirection: {
      control: "radio",
      options: ["right", "center"],
      description: "Direction of the depth shadow.",
      table: {
        type: { summary: "right | center" },
        defaultValue: { summary: "right" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    primaryActionButton: {
      onClick: () => console.log('Save clicked'),
    },
    children: 'Save',
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <SplitButton
        variant="primary"
        primaryActionButton={{ onClick: () => console.log('Primary clicked') }}
      >
        Primary
      </SplitButton>

      <SplitButton
        variant="secondary"
        primaryActionButton={{ onClick: () => console.log('Secondary clicked') }}
      >
        Secondary
      </SplitButton>

      <SplitButton
        variant="tertiary"
        primaryActionButton={{ onClick: () => console.log('Tertiary clicked') }}
      >
        Tertiary
      </SplitButton>

      <SplitButton
        variant="ghost"
        primaryActionButton={{ onClick: () => console.log('Ghost clicked') }}
      >
        Ghost
      </SplitButton>
    </div>
  )
};

export const WithPopover: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const triggerRef = React.useRef(null);

    return (
      <>
        <SplitButton
          ref={triggerRef}
          menuButton={{
            onClick: () => setIsOpen(!isOpen),
            'aria-expanded': isOpen,
            'aria-haspopup': 'true'
          }}
          primaryActionButton={{
            onClick: () => console.log('Save clicked'),
          }}
        >
          Save
        </SplitButton>
        {isOpen && (
          <Popover
            triggerRef={triggerRef}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save As...</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save Copy</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save All</Button>
            </div>
          </Popover>
        )}
      </>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const [isOpen, setIsOpen] = React.useState(false);
const triggerRef = React.useRef(null);

<SplitButton
  ref={triggerRef}
  menuButton={{
    onClick: () => setIsOpen(!isOpen),
    'aria-expanded': isOpen,
    'aria-haspopup': 'true'
  }}
  primaryActionButton={{
    onClick: () => console.log('Save clicked'),
  }}
>
  Save
</SplitButton>
{isOpen && (
  <Popover
    triggerRef={triggerRef}
    isOpen={isOpen}
    onOpenChange={setIsOpen}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save As...</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save Copy</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Save All</Button>
    </div>
  </Popover>
)}`
      }
    }
  },
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <SplitButton size="xsmall" primaryActionButton={{ onClick: () => {} }}>XSmall</SplitButton>
      <SplitButton size="small" primaryActionButton={{ onClick: () => {} }}>Small</SplitButton>
      <SplitButton size="medium" primaryActionButton={{ onClick: () => {} }}>Medium</SplitButton>
      <SplitButton size="large" primaryActionButton={{ onClick: () => {} }}>Large</SplitButton>
    </div>
  )
};

export const Depth: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <SplitButton depth depthDirection="right" primaryActionButton={{ onClick: () => console.log('Save clicked') }}>
        Depth Right
      </SplitButton>
      <SplitButton depth depthDirection="center" primaryActionButton={{ onClick: () => console.log('Save clicked') }}>
        Depth Center
      </SplitButton>
    </div>
  )
};
