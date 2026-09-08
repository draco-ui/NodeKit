import { Knob } from "@dracoui-react/knob";
import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

// TEMPORARY: load the knob styles directly while the global @dracoui/styles
// build is blocked on the primitives -> Terrazzo migration. Remove once
// styles.css builds again (it already @use's this partial).
import "../../dracoui-styles/src/components/knob/_index.scss";

const meta: Meta<typeof Knob> = {
  title: "Components/Knob",
  component: Knob,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    size: { control: "radio", options: ["small", "medium", "large"] },
    showTicks: { control: "boolean" },
    showNumbers: { control: "boolean" },
    showValue: { control: "boolean" },
    disabled: { control: "boolean" },
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
type Story = StoryObj<typeof Knob>;

/** Drag up/down (or use arrow keys) to turn it. */
export const Default: Story = {
  render: (args) => {
    const [v, setV] = useState(50);
    return <Knob {...args} value={v} onChange={setV} aria-label="Gain" showNumbers />;
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
      <Knob size="small" defaultValue={30} showNumbers aria-label="Small" />
      <Knob size="medium" defaultValue={55} showNumbers aria-label="Medium" />
      <Knob size="large" defaultValue={80} showNumbers aria-label="Large" />
    </div>
  ),
};

/** With the value shown in the center. */
export const WithValue: Story = {
  render: () => {
    const [v, setV] = useState(42);
    return <Knob value={v} onChange={setV} showValue aria-label="Level" />;
  },
};

/** Minimal — dial + tick ring, no numbers. */
export const TicksOnly: Story = {
  render: () => {
    const [v, setV] = useState(65);
    return <Knob value={v} onChange={setV} aria-label="Filter" />;
  },
};

export const Disabled: Story = {
  render: () => <Knob defaultValue={40} showNumbers disabled aria-label="Disabled" />,
};
