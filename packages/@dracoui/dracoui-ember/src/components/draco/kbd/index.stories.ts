import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Kbd',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Kbd @text={{this.text}} />
    `,
    context: args,
  }),
  args: {
    text: 'Ctrl',
  },
};

export const SingleKeys: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Draco::Kbd @text="Ctrl" />
        <Draco::Kbd @text="Alt" />
        <Draco::Kbd @text="Shift" />
        <Draco::Kbd @text="Enter" />
        <Draco::Kbd @text="Esc" />
        <Draco::Kbd @text="Tab" />
      </div>
    `,
  }),
};

export const KeyCombinations: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <Draco::Kbd @text="Ctrl" /> + <Draco::Kbd @text="C" /> to copy
        </div>
        <div>
          <Draco::Kbd @text="Ctrl" /> + <Draco::Kbd @text="V" /> to paste
        </div>
        <div>
          <Draco::Kbd @text="Ctrl" /> + <Draco::Kbd @text="Shift" /> + <Draco::Kbd @text="P" /> to open command palette
        </div>
      </div>
    `,
  }),
};

export const InContext: Story = {
  render: () => ({
    template: hbs`
      <div style="max-width: 400px;">
        <p>
          Press <Draco::Kbd @text="Ctrl" /> + <Draco::Kbd @text="K" /> to open the search dialog.
        </p>
        <p>
          Use <Draco::Kbd @text="↑" /> and <Draco::Kbd @text="↓" /> to navigate through the list.
        </p>
        <p>
          Press <Draco::Kbd @text="Enter" /> to select an item.
        </p>
      </div>
    `,
  }),
};
