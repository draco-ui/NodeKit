import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Skeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Skeleton
        @width={{this.width}}
        @height={{this.height}}
      />
    `,
    context: args,
  }),
  args: {
    width: '200px',
    height: '20px',
  },
};

export const Rectangle: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Skeleton
        @width={{this.width}}
        @height={{this.height}}
      />
    `,
    context: args,
  }),
  args: {
    width: '300px',
    height: '100px',
  },
};

export const Circle: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Skeleton
        @width={{this.width}}
        @height={{this.height}}
        style="border-radius: 50%;"
      />
    `,
    context: args,
  }),
  args: {
    width: '60px',
    height: '60px',
  },
};

export const CardLayout: Story = {
  render: () => ({
    template: hbs`
      <div style="width: 300px; display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Draco::Skeleton @width="60px" @height="60px" style="border-radius: 50%;" />
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
            <Draco::Skeleton @width="100%" @height="16px" />
            <Draco::Skeleton @width="60%" @height="12px" />
          </div>
        </div>
        <Draco::Skeleton @width="100%" @height="200px" />
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <Draco::Skeleton @width="100%" @height="12px" />
          <Draco::Skeleton @width="90%" @height="12px" />
          <Draco::Skeleton @width="80%" @height="12px" />
        </div>
      </div>
    `,
  }),
};

export const TextLines: Story = {
  render: () => ({
    template: hbs`
      <div style="width: 400px; display: flex; flex-direction: column; gap: 0.75rem;">
        <Draco::Skeleton @width="100%" @height="14px" />
        <Draco::Skeleton @width="95%" @height="14px" />
        <Draco::Skeleton @width="98%" @height="14px" />
        <Draco::Skeleton @width="90%" @height="14px" />
        <Draco::Skeleton @width="85%" @height="14px" />
      </div>
    `,
  }),
};
