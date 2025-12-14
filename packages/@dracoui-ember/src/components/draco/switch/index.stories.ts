import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Switch
        @checked={{this.checked}}
        disabled={{this.disabled}}
      />
    `,
    context: args,
  }),
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Switch
        @checked={{this.checked}}
      />
    `,
    context: args,
  }),
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Switch
        @checked={{this.checked}}
        disabled={{this.disabled}}
      />
    `,
    context: args,
  }),
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Switch
        @checked={{this.checked}}
        disabled={{this.disabled}}
      />
    `,
    context: args,
  }),
  args: {
    checked: true,
    disabled: true,
  },
};

export const States: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; flex-direction: column;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Draco::Switch @checked={{false}} />
          <span>Unchecked</span>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Draco::Switch @checked={{true}} />
          <span>Checked</span>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Draco::Switch @checked={{false}} disabled={{true}} />
          <span>Disabled Unchecked</span>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Draco::Switch @checked={{true}} disabled={{true}} />
          <span>Disabled Checked</span>
        </div>
      </div>
    `,
  }),
};
