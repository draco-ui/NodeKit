import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Toggle',
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
      <Draco::Toggle
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
      <Draco::Toggle @checked={{this.checked}} />
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
      <Draco::Toggle
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

export const WithLabel: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <Draco::Toggle @checked={{false}} />
          <span>Enable notifications</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <Draco::Toggle @checked={{true}} />
          <span>Auto-save changes</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: not-allowed; opacity: 0.5;">
          <Draco::Toggle @checked={{false}} disabled={{true}} />
          <span>Two-factor authentication (disabled)</span>
        </label>
      </div>
    `,
  }),
};
