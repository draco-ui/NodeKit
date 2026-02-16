import { useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@dracoui-react/tabs';
import type { Key } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Note: TabPanels must be inside TabList due to sprocketui context architecture
// This is a workaround until sprocketui fixes the context provider location
export const Default: Story = {
  render: () => (
    <Tabs defaultSelectedValue="tab1">
      <TabList aria-label="My tabs">
        <Tab value="tab1">Account</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Billing</Tab>
        <TabPanels>
          <TabPanel value="tab1">
            <p>Account content goes here.</p>
          </TabPanel>
          <TabPanel value="tab2">
            <p>Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="tab3">
            <p>Billing content goes here.</p>
          </TabPanel>
        </TabPanels>
      </TabList>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<Key>('tab1');

    return (
      <div>
        <p style={{ marginBottom: '12px' }}>Selected: {String(selected)}</p>
        <Tabs selectedValue={selected} onSelectionChange={setSelected}>
          <TabList aria-label="Controlled tabs">
            <Tab value="tab1">Account</Tab>
            <Tab value="tab2">Settings</Tab>
            <Tab value="tab3">Billing</Tab>
            <TabPanels>
              <TabPanel value="tab1">
                <p>Account content goes here.</p>
              </TabPanel>
              <TabPanel value="tab2">
                <p>Settings content goes here.</p>
              </TabPanel>
              <TabPanel value="tab3">
                <p>Billing content goes here.</p>
              </TabPanel>
            </TabPanels>
          </TabList>
        </Tabs>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultSelectedValue="tab1">
      <TabList aria-label="Vertical tabs" style={{ display: 'flex', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Tab value="tab1">Account</Tab>
          <Tab value="tab2">Settings</Tab>
          <Tab value="tab3">Billing</Tab>
        </div>
        <TabPanels>
          <TabPanel value="tab1">
            <p>Account content goes here.</p>
          </TabPanel>
          <TabPanel value="tab2">
            <p>Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="tab3">
            <p>Billing content goes here.</p>
          </TabPanel>
        </TabPanels>
      </TabList>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  render: () => (
    <Tabs activationMode="manual" defaultSelectedValue="tab1">
      <TabList aria-label="Manual activation tabs">
        <Tab value="tab1">Account</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Billing</Tab>
        <TabPanels>
          <TabPanel value="tab1">
            <p>Account content (use arrow keys to move focus, press Enter/Space to select)</p>
          </TabPanel>
          <TabPanel value="tab2">
            <p>Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="tab3">
            <p>Billing content goes here.</p>
          </TabPanel>
        </TabPanels>
      </TabList>
    </Tabs>
  ),
};

export const DisabledTabs: Story = {
  render: () => (
    <Tabs disabledValues={['tab2']} defaultSelectedValue="tab1">
      <TabList aria-label="Tabs with disabled item">
        <Tab value="tab1">Account</Tab>
        <Tab value="tab2">Settings (Disabled)</Tab>
        <Tab value="tab3">Billing</Tab>
        <TabPanels>
          <TabPanel value="tab1">
            <p>Account content goes here.</p>
          </TabPanel>
          <TabPanel value="tab2">
            <p>Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="tab3">
            <p>Billing content goes here.</p>
          </TabPanel>
        </TabPanels>
      </TabList>
    </Tabs>
  ),
};
