import { ActionMenu } from '../src/components/ActionMenu';
import { Button } from '../src/components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionMenu> = {
  title: 'Brand/ActionMenu',
  component: ActionMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj<typeof ActionMenu>;

export const Default: Story = {
  render: () => (
    <ActionMenu>
      <ActionMenu.Trigger>
        <Button>Actions</Button>
      </ActionMenu.Trigger>
      <ActionMenu.Overlay>
        <ActionMenu.Item onSelect={() => console.log('Edit')}>Edit</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Duplicate')}>Duplicate</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Archive')}>Archive</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Delete')}>Delete</ActionMenu.Item>
      </ActionMenu.Overlay>
    </ActionMenu>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <ActionMenu>
      <ActionMenu.Trigger>
        <Button>Options</Button>
      </ActionMenu.Trigger>
      <ActionMenu.Overlay>
        <ActionMenu.Item onSelect={() => console.log('Copy')}>Copy</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Paste')}>Paste</ActionMenu.Item>
        <ActionMenu.Item disabled>Cut (disabled)</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Select all')}>Select all</ActionMenu.Item>
      </ActionMenu.Overlay>
    </ActionMenu>
  ),
};

export const WithNativeButton: Story = {
  render: () => (
    <ActionMenu>
      <ActionMenu.Trigger>
        <button>Native Button Trigger</button>
      </ActionMenu.Trigger>
      <ActionMenu.Overlay>
        <ActionMenu.Item onSelect={() => console.log('Item 1')}>Item 1</ActionMenu.Item>
        <ActionMenu.Item onSelect={() => console.log('Item 2')}>Item 2</ActionMenu.Item>
      </ActionMenu.Overlay>
    </ActionMenu>
  ),
};
