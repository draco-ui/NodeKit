import { Switch } from "@dracoui-react/switch";
import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

// TEMPORARY: load the switch styles directly so it renders in Storybook while
// the global @dracoui/styles build is blocked on the primitives -> Terrazzo
// migration. Once styles.css builds again (which already @use's this partial),
// this import can be removed — the styles arrive via preview.ts.
import "../../dracoui-styles/src/components/switch/_index.scss";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "On-state (controlled).",
      table: { type: { summary: "boolean" } },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Size of the switch.",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled.",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "Label rendered next to the switch.",
      table: { type: { summary: "ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 32 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

/** Interactive — click to flip. */
export const Default: Story = {
  render: (args) => {
    const [on, setOn] = useState(false);
    return <Switch {...args} checked={on} onChange={setOn} aria-label="Toggle" />;
  },
};

/** Both resting positions side by side. */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
      <Switch aria-label="Off" defaultChecked={false} />
      <Switch aria-label="On" defaultChecked />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Switch size="small" defaultChecked aria-label="Small" />
      <Switch size="medium" defaultChecked aria-label="Medium" />
      <Switch size="large" defaultChecked aria-label="Large" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    return <Switch checked={on} onChange={setOn} label="Power" />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Switch disabled aria-label="Disabled off" />
      <Switch disabled defaultChecked aria-label="Disabled on" />
    </div>
  ),
};

/** No text on the caps — a clean, unlabeled rocker. */
export const NoLabels: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <Switch
        checked={on}
        onChange={setOn}
        offLabel={null}
        onLabel={null}
        aria-label="Toggle"
      />
    );
  },
};

// Classic IEC power marks: circle (○) = off, line (|) = on.
const CircleIcon = () => (
  <svg viewBox="0 0 16 16" width="1.1em" height="1.1em" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

const LineIcon = () => (
  <svg viewBox="0 0 16 16" width="1.1em" height="1.1em" fill="none" aria-hidden="true">
    <line x1="8" y1="3.5" x2="8" y2="12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

/** Power-symbol icons instead of text — circle (off) / line (on). */
export const PowerIcons: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    return (
      <Switch
        checked={on}
        onChange={setOn}
        offLabel={<CircleIcon />}
        onLabel={<LineIcon />}
        aria-label="Power"
      />
    );
  },
};

/** Vertical orientation — stands on end and flips up (on) / down (off). */
export const Vertical: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    return (
      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        <Switch orientation="vertical" checked={on} onChange={setOn} aria-label="Vertical" />
        <Switch orientation="vertical" defaultChecked={false} offLabel={<CircleIcon />} onLabel={<LineIcon />} aria-label="Vertical power" />
      </div>
    );
  },
};
