import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Avatar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Avatar
        @src={{this.src}}
        @alt={{this.alt}}
        @size={{this.size}}
      />
    `,
    context: args,
  }),
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
    size: 40,
  },
};

export const DifferentSizes: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Draco::Avatar @src="https://i.pravatar.cc/150?img=2" @alt="Small" @size={{24}} />
        <Draco::Avatar @src="https://i.pravatar.cc/150?img=3" @alt="Medium" @size={{40}} />
        <Draco::Avatar @src="https://i.pravatar.cc/150?img=4" @alt="Large" @size={{64}} />
        <Draco::Avatar @src="https://i.pravatar.cc/150?img=5" @alt="XLarge" @size={{96}} />
      </div>
    `,
  }),
};

export const WithoutImage: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Avatar
        @alt={{this.alt}}
        @size={{this.size}}
      />
    `,
    context: args,
  }),
  args: {
    alt: 'No Image',
    size: 40,
  },
};
