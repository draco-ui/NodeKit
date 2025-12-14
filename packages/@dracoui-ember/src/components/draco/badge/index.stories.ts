import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Badge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'primary-subtle',
        'secondary',
        'secondary-subtle',
        'tertiary',
        'tertiary-subtle',
        'amber',
        'amber-subtle',
        'error',
        'error-subtle',
      ],
    },
    type: {
      control: 'select',
      options: ['pill', 'chip'],
    },
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
    },
    isIconOnly: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Badge
        @text={{this.text}}
        @size={{this.size}}
        @color={{this.color}}
        @type={{this.type}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'Badge',
    size: 'medium',
    color: 'primary',
    type: 'pill',
  },
};

export const WithIcon: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Badge
        @text={{this.text}}
        @icon={{this.icon}}
        @iconPosition={{this.iconPosition}}
        @size={{this.size}}
        @color={{this.color}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'New',
    icon: 'lucide:star',
    iconPosition: 'leading',
    size: 'medium',
    color: 'primary',
  },
};

export const IconOnly: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Badge
        @icon={{this.icon}}
        @isIconOnly={{this.isIconOnly}}
        @size={{this.size}}
        @color={{this.color}}
      />
    `,
    context: args,
  }),
  args: {
    icon: 'lucide:check',
    isIconOnly: true,
    size: 'medium',
    color: 'primary',
  },
};

export const Sizes: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Draco::Badge @text="Small" @size="small" />
        <Draco::Badge @text="Medium" @size="medium" />
        <Draco::Badge @text="Large" @size="large" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Draco::Badge @text="Primary" @color="primary" />
        <Draco::Badge @text="Secondary" @color="secondary" />
        <Draco::Badge @text="Tertiary" @color="tertiary" />
        <Draco::Badge @text="Amber" @color="amber" />
        <Draco::Badge @text="Error" @color="error" />
      </div>
    `,
  }),
};

export const SubtleColors: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Draco::Badge @text="Primary" @color="primary-subtle" />
        <Draco::Badge @text="Secondary" @color="secondary-subtle" />
        <Draco::Badge @text="Tertiary" @color="tertiary-subtle" />
        <Draco::Badge @text="Amber" @color="amber-subtle" />
        <Draco::Badge @text="Error" @color="error-subtle" />
      </div>
    `,
  }),
};

export const Types: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem;">
        <Draco::Badge @text="Pill Badge" @type="pill" @color="primary" />
        <Draco::Badge @text="Chip Badge" @type="chip" @color="primary" />
      </div>
    `,
  }),
};
