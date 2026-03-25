import { Card } from "@dracoui-react/card";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "borderless", "elevated"],
      description: "The visual style of the card.",
      table: {
        type: { summary: "default | borderless | elevated" },
        defaultValue: { summary: "default" },
      },
    },
    padding: {
      control: "select",
      options: ["0", "025", "050", "100", "150", "200", "300", "400", "500", "600", "800", "1000", "1200", "1600", "2000", "2400", "2800", "3200"],
      description: "Padding inside the card using spacing scale tokens.",
      table: {
        type: { summary: "SpaceScale" },
        defaultValue: { summary: "400" },
      },
    },
    rounded: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Border radius of the card.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "large" },
      },
    },
    hoverable: {
      control: "boolean",
      description: "Whether the card has a hover effect.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    depth: {
      control: "boolean",
      description: "Whether the card has a retro 3D depth effect.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content to display inside the card.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    rounded: 'large',
    padding: '400',
    variant: 'default',
    children: "This is a card",
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Card padding="400" variant="default">Default</Card>
      <Card padding="400" variant="borderless">Borderless</Card>
      <Card padding="400" variant="elevated">Elevated</Card>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Card padding="400" rounded="small">Small</Card>
      <Card padding="400" rounded="medium">Medium</Card>
      <Card padding="400" rounded="large">Large</Card>
    </div>
  ),
};

export const Depth: Story = {
  args: {
    rounded: 'large',
    padding: '400',
    variant: 'default',
    depth: true,
    children: "Depth card",
  },
};

export const Padding: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Card padding="200">200</Card>
      <Card padding="400">400</Card>
      <Card padding="600">600</Card>
      <Card padding="800">800</Card>
    </div>
  ),
};
