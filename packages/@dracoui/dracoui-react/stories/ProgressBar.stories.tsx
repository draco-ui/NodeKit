import { ProgressBar } from "@dracoui-react/progress-bar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The current progress value (0–100).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the progress bar.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      control: "radio",
      options: ["default", "secondary"],
      description: "The visual variant. 'secondary' uses a dark fill color.",
      table: {
        type: { summary: "default | secondary" },
        defaultValue: { summary: "default" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
    size: "medium",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    value: 60,
    size: "medium",
    variant: "secondary",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: 400 }}>
      <ProgressBar value={70} size="small" />
      <ProgressBar value={70} size="medium" />
      <ProgressBar value={70} size="large" />
    </div>
  ),
};

export const Progress: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: 400 }}>
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  ),
};
