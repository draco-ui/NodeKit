import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Icon',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Icon @name={{this.name}} @size={{this.size}} />
    `,
    context: args,
  }),
  args: {
    name: 'lucide:star',
    size: 24,
  },
};

export const DifferentSizes: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Draco::Icon @name="lucide:heart" @size={{16}} />
        <Draco::Icon @name="lucide:heart" @size={{24}} />
        <Draco::Icon @name="lucide:heart" @size={{32}} />
        <Draco::Icon @name="lucide:heart" @size={{48}} />
        <Draco::Icon @name="lucide:heart" @size={{64}} />
      </div>
    `,
  }),
};

export const CommonIcons: Story = {
  render: () => ({
    template: hbs`
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 1.5rem; align-items: center;">
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:home" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Home</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:settings" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Settings</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:user" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">User</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:search" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Search</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:bell" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Bell</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:mail" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Mail</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:calendar" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Calendar</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:file" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">File</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:folder" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Folder</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:check" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Check</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:x" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Close</div>
        </div>
        <div style="text-align: center;">
          <Draco::Icon @name="lucide:arrow-right" @size={{24}} />
          <div style="font-size: 12px; margin-top: 4px;">Arrow</div>
        </div>
      </div>
    `,
  }),
};

export const WithColor: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; gap: 1rem;">
        <Draco::Icon @name="lucide:heart" @size={{32}} style="color: red;" />
        <Draco::Icon @name="lucide:star" @size={{32}} style="color: gold;" />
        <Draco::Icon @name="lucide:circle" @size={{32}} style="color: blue;" />
        <Draco::Icon @name="lucide:square" @size={{32}} style="color: green;" />
      </div>
    `,
  }),
};
