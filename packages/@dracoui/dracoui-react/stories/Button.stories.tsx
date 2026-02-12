import { Button } from "@dracoui-react/button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "outline",
        "tertiary",
        "ghost",
        "amber",
        "error",
      ],
      description: "A button can have different visual styles to indicate hierarchy and importance.",
      table: {
        type: { summary: "primary | secondary | tertiary | ghost | outline | amber | error" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["xsmall", "small", "medium", "large"],
      description: "A button can have different sizes.",
      table: {
        type: { summary: "xsmall | small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill"],
      description: "A button can have different border radius styles.",
      table: {
        type: { summary: "rounded | pill" },
        defaultValue: { summary: "rounded" },
      },
    },
    alignment: {
      control: "radio",
      options: ["start", "center", "end"],
      description: "A button can align its content to the start, center, or end. Uses logical values that respect RTL text direction.",
      table: {
        type: { summary: "start | center | end" },
        defaultValue: { summary: "center" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "A button can take the full width of its container.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      description: "A button can show a loading state to indicate an action is in progress.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    depth: {
      control: "boolean",
      description: "A button can have a 3D depth/shadow effect.",
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
    disabled: {
      control: "boolean",
      description: "A button can be disabled to prevent user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content to display inside the button.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    label: {
      control: "text",
      description: "Optional label for childrenless rendering. Used when children is not provided.",
      table: {
        type: { summary: "string" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    shape: 'rounded',
    variant: 'primary'
  }
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="amber">Amber</Button>
      <Button variant="error">Error</Button>
    </div>
  )
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="xsmall">XSmall</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  )
};

export const Shape: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button shape="rounded">Rounded</Button>
      <Button shape="pill">Pill</Button>
    </div>
  )
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
};

export const Depth: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button depth depthDirection="right">Depth Right</Button>
      <Button depth depthDirection="center">Depth Center</Button>
    </div>
  )
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width'
  }
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px' }}>
      <Button fullWidth alignment="start">Start</Button>
      <Button fullWidth alignment="center">Center</Button>
      <Button fullWidth alignment="end">End</Button>
    </div>
  )
};

export const Label: Story = {
  args: {
    label: 'Button with label prop',
  }
};
