import { Indicator } from "@dracoui-react/indicator";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Indicator> = {
  title: "Components/Indicator",
  component: Indicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The current value (between min and max).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    segments: {
      control: { type: "range", min: 3, max: 30, step: 1 },
      description: "How many discrete bars to render.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
    },
    min: {
      control: { type: "number" },
      description: "The minimum value.",
      table: { type: { summary: "number" }, defaultValue: { summary: "0" } },
    },
    max: {
      control: { type: "number" },
      description: "The maximum value.",
      table: { type: { summary: "number" }, defaultValue: { summary: "100" } },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the indicator.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      control: "radio",
      options: ["default", "secondary"],
      description: "The visual variant. 'secondary' uses neutral-colored bars.",
      table: {
        type: { summary: "default | secondary" },
        defaultValue: { summary: "default" },
      },
    },
    label: {
      control: "text",
      description: "Accessible label describing what the meter represents.",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    value: 70,
    segments: 14,
    size: "medium",
    variant: "default",
    label: "CPU usage",
  },
};

export const Secondary: Story = {
  args: {
    value: 55,
    segments: 14,
    size: "medium",
    variant: "secondary",
    label: "Memory usage",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Indicator value={70} segments={14} size="small" label="Small" />
      <Indicator value={70} segments={14} size="medium" label="Medium" />
      <Indicator value={70} segments={14} size="large" label="Large" />
    </div>
  ),
};

/**
 * A realistic dashboard usage: several labelled meters representing
 * different system resources.
 */
export const SystemUsage: Story = {
  render: () => {
    const rows: Array<{ label: string; value: number }> = [
      { label: "CPU", value: 82 },
      { label: "Memory", value: 47 },
      { label: "Disk", value: 65 },
      { label: "Network", value: 23 },
    ];

    return (
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px 16px", alignItems: "center" }}>
        {rows.map((row) => (
          <>
            <span style={{ fontSize: 13, fontFamily: "system-ui, sans-serif", opacity: 0.8 }}>{row.label}</span>
            <Indicator value={row.value} segments={16} size="medium" label={`${row.label} usage`} />
          </>
        ))}
      </div>
    );
  },
};
