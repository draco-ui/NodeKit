import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/LoadingDots',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: hbs`
      <Draco::LoadingDots />
    `,
  }),
};

export const WithText: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span>Loading</span>
        <Draco::LoadingDots />
      </div>
    `,
  }),
};

export const InButton: Story = {
  render: () => ({
    template: hbs`
      <Draco::Button @loading={{true}} @text="Processing..." />
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <Draco::LoadingDots />
          <span>Loading content...</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <Draco::LoadingDots />
          <span>Fetching data...</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <Draco::LoadingDots />
          <span>Processing request...</span>
        </div>
      </div>
    `,
  }),
};
