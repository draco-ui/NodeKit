/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { Input } from '../Input';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label associated with the field',
    },
    hint: {
      control: 'text',
      description: 'Additional hint text below the field',
    },
    validationMessage: {
      control: 'text',
      description: 'A message about the validation state',
    },
    validationState: {
      control: 'select',
      options: ['none', 'success', 'warning', 'error'],
      description: 'The validation state of the field',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    label: 'Example field',
    validationState: 'success',
    validationMessage: 'This is a success message.',
  },
  render: (args) => (
    <Field {...args}>
      <Input />
    </Field>
  ),
};
