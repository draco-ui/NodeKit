import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "../src/SplitButton";
import { Popover } from "../src/Popover";
import { Button } from "../src/Button";

const meta: Meta<typeof SplitButton> = {
  title: "React/SplitButton",
  component: SplitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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

export const Secondary: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const triggerRef = React.useRef(null);

    return (
      <>
        <SplitButton
          ref={triggerRef}
          variant="secondary"
          menuButton={{
            onClick: () => setIsOpen(!isOpen),
            'aria-expanded': isOpen,
            'aria-haspopup': 'true'
          }}
          primaryActionButton={{
            onClick: () => console.log('Action clicked'),
          }}
        >
          Action
        </SplitButton>
        {isOpen && (
          <Popover
            triggerRef={triggerRef}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 1</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 2</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 3</Button>
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
  variant="secondary"
  menuButton={{
    onClick: () => setIsOpen(!isOpen),
    'aria-expanded': isOpen,
    'aria-haspopup': 'true'
  }}
  primaryActionButton={{
    onClick: () => console.log('Action clicked'),
  }}
>
  Action
</SplitButton>
{isOpen && (
  <Popover
    triggerRef={triggerRef}
    isOpen={isOpen}
    onOpenChange={setIsOpen}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 1</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 2</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 3</Button>
    </div>
  </Popover>
)}`
      }
    }
  },
};

export const Elevated: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const triggerRef = React.useRef(null);

    return (
      <>
        <SplitButton
          ref={triggerRef}
          variant="primary"
          elevated
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
  variant="primary"
  elevated
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
    </div>
  </Popover>
)}`
      }
    }
  },
};

export const Ghost: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const triggerRef = React.useRef(null);

    return (
      <>
        <SplitButton
          ref={triggerRef}
          variant="ghost"
          menuButton={{
            onClick: () => setIsOpen(!isOpen),
            'aria-expanded': isOpen,
            'aria-haspopup': 'true'
          }}
          primaryActionButton={{
            onClick: () => console.log('Action clicked'),
          }}
        >
          Action
        </SplitButton>
        {isOpen && (
          <Popover
            triggerRef={triggerRef}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 1</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 2</Button>
              <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 3</Button>
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
  variant="ghost"
  menuButton={{
    onClick: () => setIsOpen(!isOpen),
    'aria-expanded': isOpen,
    'aria-haspopup': 'true'
  }}
  primaryActionButton={{
    onClick: () => console.log('Action clicked'),
  }}
>
  Action
</SplitButton>
{isOpen && (
  <Popover
    triggerRef={triggerRef}
    isOpen={isOpen}
    onOpenChange={setIsOpen}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 1</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 2</Button>
      <Button variant="secondary" fullWidth onClick={() => setIsOpen(false)}>Option 3</Button>
    </div>
  </Popover>
)}`
      }
    }
  },
};
