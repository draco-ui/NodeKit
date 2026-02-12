import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Input
        @value={{this.value}}
        @placeholder={{this.placeholder}}
        @type={{this.type}}
        disabled={{this.disabled}}
        readonly={{this.readonly}}
      />
    `,
    context: args,
  }),
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    disabled: false,
    readonly: false,
  },
};

export const WithValue: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Input
        @value={{this.value}}
        @placeholder={{this.placeholder}}
      />
    `,
    context: args,
  }),
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Input
        @value={{this.value}}
        @placeholder={{this.placeholder}}
        disabled={{this.disabled}}
      />
    `,
    context: args,
  }),
  args: {
    value: 'Disabled input',
    placeholder: 'Enter text...',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Input
        @value={{this.value}}
        @placeholder={{this.placeholder}}
        readonly={{this.readonly}}
      />
    `,
    context: args,
  }),
  args: {
    value: 'Read-only text',
    placeholder: 'Enter text...',
    readonly: true,
  },
};

export const Types: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Draco::Input @placeholder="Text input" @type="text" />
        <Draco::Input @placeholder="Email input" @type="email" />
        <Draco::Input @placeholder="Password input" @type="password" />
        <Draco::Input @placeholder="Number input" @type="number" />
      </div>
    `,
  }),
};
