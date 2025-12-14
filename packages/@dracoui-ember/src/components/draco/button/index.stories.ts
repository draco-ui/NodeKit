import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Button',
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
      options: ['primary', 'secondary', 'tertiary', 'amber', 'error'],
    },
    shape: {
      control: 'select',
      options: ['square', 'pill', 'rounded'],
    },
    loading: { control: 'boolean' },
    isFullWidth: { control: 'boolean' },
    isIconOnly: { control: 'boolean' },
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Button
        @text={{this.text}}
        @size={{this.size}}
        @color={{this.color}}
        @shape={{this.shape}}
        @loading={{this.loading}}
        @isFullWidth={{this.isFullWidth}}
        @icon={{this.icon}}
        @iconPosition={{this.iconPosition}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'Click me',
    size: 'medium',
    color: 'primary',
    shape: 'square',
    loading: false,
    isFullWidth: false,
  },
};

export const Secondary: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Button
        @text={{this.text}}
        @size={{this.size}}
        @color={{this.color}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'Secondary Button',
    size: 'medium',
    color: 'secondary',
  },
};

export const WithIcon: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Button
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
    text: 'With Icon',
    icon: 'lucide:star',
    iconPosition: 'leading',
    size: 'medium',
    color: 'primary',
  },
};

export const IconOnly: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Button
        @text={{this.text}}
        @icon={{this.icon}}
        @isIconOnly={{this.isIconOnly}}
        @size={{this.size}}
        @color={{this.color}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'Settings',
    icon: 'lucide:settings',
    isIconOnly: true,
    size: 'medium',
    color: 'primary',
  },
};

export const Loading: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Button
        @text={{this.text}}
        @loading={{this.loading}}
        @size={{this.size}}
        @color={{this.color}}
      />
    `,
    context: args,
  }),
  args: {
    text: 'Loading...',
    loading: true,
    size: 'medium',
    color: 'primary',
  },
};

export const FullWidth: Story = {
  render: (args: any) => ({
    template: hbs`
      <div style="width: 300px;">
        <Draco::Button
          @text={{this.text}}
          @isFullWidth={{this.isFullWidth}}
          @size={{this.size}}
          @color={{this.color}}
        />
      </div>
    `,
    context: args,
  }),
  args: {
    text: 'Full Width Button',
    isFullWidth: true,
    size: 'medium',
    color: 'primary',
  },
};

export const Sizes: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Draco::Button @text="Small" @size="small" />
        <Draco::Button @text="Medium" @size="medium" />
        <Draco::Button @text="Large" @size="large" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Draco::Button @text="Primary" @color="primary" />
        <Draco::Button @text="Secondary" @color="secondary" />
        <Draco::Button @text="Tertiary" @color="tertiary" />
        <Draco::Button @text="Amber" @color="amber" />
        <Draco::Button @text="Error" @color="error" />
      </div>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem;">
        <Draco::Button @text="Square" @shape="square" />
        <Draco::Button @text="Pill" @shape="pill" />
        <Draco::Button @text="Rounded" @shape="rounded" />
      </div>
    `,
  }),
};
