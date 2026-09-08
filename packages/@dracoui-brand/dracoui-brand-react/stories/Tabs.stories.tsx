import { Tabs } from '../src/components/Tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Brand/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs onTabChange={(e) => console.log('Tab changed:', e.detail.index)}>
      <Tabs.Item>Featured</Tabs.Item>
      <Tabs.Item>GitHub</Tabs.Item>
      <Tabs.Item>Self</Tabs.Item>
      <Tabs.Item>3rd-Party</Tabs.Item>

      <Tabs.Panel>
        <p>Featured content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>GitHub content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Self content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>3rd-Party content goes here.</p>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs>
      <Tabs.Item>Featured</Tabs.Item>
      <Tabs.Item disabled>GitHub</Tabs.Item>
      <Tabs.Item>Self</Tabs.Item>
      <Tabs.Item>3rd-Party</Tabs.Item>

      <Tabs.Panel>
        <p>Featured content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>GitHub content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Self content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>3rd-Party content goes here.</p>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const PreselectedTab: Story = {
  render: () => (
    <Tabs selectedIndex={2}>
      <Tabs.Item>Featured</Tabs.Item>
      <Tabs.Item>GitHub</Tabs.Item>
      <Tabs.Item>Self</Tabs.Item>
      <Tabs.Item>3rd-Party</Tabs.Item>

      <Tabs.Panel>
        <p>Featured content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>GitHub content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Self content goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>3rd-Party content goes here.</p>
      </Tabs.Panel>
    </Tabs>
  ),
};
