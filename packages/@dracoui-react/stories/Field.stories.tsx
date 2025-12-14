/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '../src/Field';
import { Input } from '../src/Input';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label associated with the field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    hint: {
      control: 'text',
      description: 'Additional hint text below the field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    validationMessage: {
      control: 'text',
      description: 'A message about the validation state',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    validationState: {
      control: 'select',
      options: ['none', 'success', 'warning', 'error'],
      description: 'The validation state of the field',
      table: {
        type: { summary: 'none | success | warning | error' },
        defaultValue: { summary: 'error when validationMessage is set; none otherwise' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the label relative to the field',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'vertical' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the field label',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

/**
 * Default field with label and input
 */
export const Default: Story = {
  args: {
    label: 'Example field',
  },
  render: (args) => (
    <Field {...args}>
      <Input placeholder="Enter text..." />
    </Field>
  ),
};

export const ValidationState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Field label="Success" validationState="success" validationMessage="Username is available!">
        <Input placeholder="Enter username" defaultValue="john_doe" />
      </Field>

      <Field label="Warning" validationState="warning" validationMessage="Password is weak">
        <Input type="password" placeholder="Enter password" defaultValue="1234" />
      </Field>

      <Field label="Error" validationState="error" validationMessage="Please enter a valid email">
        <Input type="email" placeholder="Enter email" defaultValue="invalid-email" />
      </Field>
    </div>
  )
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Field label="Small field" size="small">
        <Input size="small" placeholder="Small input" />
      </Field>

      <Field label="Medium field" size="medium">
        <Input size="medium" placeholder="Medium input" />
      </Field>

      <Field label="Large field" size="large">
        <Input size="large" placeholder="Large input" />
      </Field>
    </div>
  )
};

export const Orientation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Field label="Vertical (default)" orientation="vertical">
        <Input placeholder="Enter name" />
      </Field>

      <Field label="Horizontal" orientation="horizontal">
        <Input placeholder="Enter name" />
      </Field>
    </div>
  )
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    hint: 'Must be 3-20 characters, alphanumeric only',
  },
  render: (args) => (
    <Field {...args}>
      <Input placeholder="Enter username" />
    </Field>
  ),
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    hint: 'We will never share your email',
  },
  render: (args) => (
    <Field {...args}>
      <Input type="email" placeholder="Enter email" />
    </Field>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    hint: 'This field is disabled',
  },
  render: (args) => (
    <Field {...args}>
      <Input disabled placeholder="Disabled input" />
    </Field>
  ),
};
