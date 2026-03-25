import { ToggleButton } from "@dracoui-react/buttons";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost"],
      description: "A toggle button can have different visual styles.",
      table: {
        type: { summary: "primary | secondary | ghost" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "A toggle button can have different sizes.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill"],
      description: "A toggle button can have different border radius styles.",
      table: {
        type: { summary: "rounded | pill" },
        defaultValue: { summary: "rounded" },
      },
    },
    isSelected: {
      control: "boolean",
      description: "Whether the toggle button is currently selected (controlled).",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultSelected: {
      control: "boolean",
      description: "Whether the toggle button is selected by default (uncontrolled).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "A toggle button can be disabled to prevent user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content to display inside the toggle button.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    children: "Toggle",
    size: "medium",
    shape: "rounded",
    variant: "primary",
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <ToggleButton variant="primary">Primary</ToggleButton>
      <ToggleButton variant="secondary">Secondary</ToggleButton>
      <ToggleButton variant="ghost">Ghost</ToggleButton>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <ToggleButton size="small">Small</ToggleButton>
      <ToggleButton size="medium">Medium</ToggleButton>
      <ToggleButton size="large">Large</ToggleButton>
    </div>
  ),
};

export const DefaultSelected: Story = {
  args: {
    defaultSelected: true,
    children: "Selected by default",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
