import { useState, useEffect } from 'react';
import { Card } from '@dracoui-react/card';
import { Tabs, Tab } from '@dracoui-react/tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab definitions',
    },
    selected: {
      control: 'text',
      description: 'ID of the currently selected tab',
    },
    variant: {
      control: 'radio',
      options: ['default', 'underline'],
      description: 'Visual variant of the tabs',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tab list',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable all tabs',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { id: 'all', content: 'All' },
      { id: 'active', content: 'Active' },
      { id: 'draft', content: 'Draft' },
      { id: 'archived', content: 'Archived' },
    ],
    variant: 'default',
    orientation: 'horizontal',
    isDisabled: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? args.tabs?.[0]?.id);

    useEffect(() => {
      if (args.selected !== undefined) setSelected(args.selected);
    }, [args.selected]);

    return (
      <div style={{ width: 600 }}>
        <Card padding="0" rounded="large" variant="default">
          <Tabs {...args} selected={selected} onSelect={setSelected}>
            <p>Tab {selected} selected</p>
          </Tabs>
        </Card>
      </div>
    );
  },
};

export const Composed: Story = {
  render: () => {
    const [selected, setSelected] = useState('account');

    return (
      <Tabs selected={selected} onSelect={setSelected}>
        <Tab id="account">Account</Tab>
        <Tab id="settings">Settings</Tab>
        <Tab id="billing">Billing</Tab>

        <p>Tab {selected} selected</p>
      </Tabs>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const [selected, setSelected] = useState('all');

    const tabs = [
      { id: 'all', content: 'All', badge: '12' },
      { id: 'active', content: 'Active', badge: '5' },
      { id: 'draft', content: 'Draft' },
      { id: 'archived', content: 'Archived', badge: 'New' },
    ];

    return (
      <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
        <p>Tab {selected} selected</p>
      </Tabs>
    );
  },
};

export const DisabledTab: Story = {
  render: () => {
    const [selected, setSelected] = useState('all');

    const tabs = [
      { id: 'all', content: 'All' },
      { id: 'active', content: 'Active' },
      { id: 'draft', content: 'Draft', isDisabled: true },
      { id: 'archived', content: 'Archived' },
    ];

    return (
      <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
        <p>Tab {selected} selected</p>
      </Tabs>
    );
  },
};

export const Underline: Story = {
  render: () => {
    const [selected, setSelected] = useState('all');

    const tabs = [
      { id: 'all', content: 'All' },
      { id: 'accepts-marketing', content: 'Accepts marketing' },
      { id: 'repeat-customers', content: 'Repeat customers' },
      { id: 'prospects', content: 'Prospects' },
    ];

    return (
      <div style={{ width: 600 }}>
        <Card padding="0" rounded="large" variant="default">
          <Tabs
            tabs={tabs}
            selected={selected}
            onSelect={setSelected}
            variant="underline"
          >
            <p>Tab {selected} selected</p>
          </Tabs>
        </Card>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [selected, setSelected] = useState('all');

    const tabs = [
      { id: 'all', content: 'All' },
      { id: 'active', content: 'Active' },
      { id: 'draft', content: 'Draft' },
      { id: 'archived', content: 'Archived' },
    ];

    return (
      <Tabs
        tabs={tabs}
        selected={selected}
        onSelect={setSelected}
        orientation="vertical"
      >
        <p>Tab {selected} selected</p>
      </Tabs>
    );
  },
};
