import { Button } from "../src/components/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Brand/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "ghost"],
      description: "A button can have different visual styles.",
      table: {
        type: { summary: "primary | secondary | outline | ghost" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "A button can have different sizes.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    elevated: {
      control: "radio",
      options: ["hover", "always", "none"],
      description: "Depth shadow effect behavior.",
      table: {
        type: { summary: "hover | always | none" },
        defaultValue: { summary: "hover" },
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
      description: "Optional label for childrenless rendering.",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Brand Button',
    size: 'medium',
    variant: 'primary',
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const Elevated: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button elevated="hover">Hover (default)</Button>
      <Button elevated="always">Always</Button>
      <Button elevated="none">None</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
