import type { Meta, StoryObj } from "@storybook/react";
import { DialogTrigger } from "react-aria-components";
import { Popover } from "../src/Popover";
import { Button } from "../src/Button";

const meta: Meta<typeof Popover> = {
  title: "React/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Popover</Button>
      <Popover>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', minWidth: '200px' }}>
          <Button variant="secondary" fullWidth>Project 1</Button>
          <Button variant="secondary" fullWidth>Option 2</Button>
          <Button variant="secondary" fullWidth>Option 3</Button>
        </div>
      </Popover>
    </DialogTrigger>
  ),
};
