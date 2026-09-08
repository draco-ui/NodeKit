import { useState } from 'react';
import { Checkbox } from '@dracoui-react/checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox is in an error state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label displayed next to the checkbox.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the label.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const WithHelpText: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Email notifications"
        helpText="Receive email updates about your account activity."
      />
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
        <Checkbox checked={true} onChange={() => {}} label="Checked" />
        <Checkbox indeterminate onChange={() => {}} label="Indeterminate" />
        <Checkbox disabled label="Disabled" />
        <Checkbox checked disabled label="Checked & disabled" />
        <Checkbox error checked={checked} onChange={setChecked} label="Error state" />
      </div>
    );
  },
};
