import React from 'react';
import { DracoTabs, DracoTab, DracoTabPanel } from '@dracoui-brand/lit';
import { createComponent } from '@lit/react';
import type { EventName } from '@lit/react';

const TabsRoot = createComponent({
  tagName: 'draco-tabs',
  elementClass: DracoTabs,
  react: React,
  events: {
    onTabChange: 'draco-tab-change' as EventName<CustomEvent<{ index: number }>>,
  },
});

const TabItem = createComponent({
  tagName: 'draco-tab',
  elementClass: DracoTab,
  react: React,
});

const TabPanel = createComponent({
  tagName: 'draco-tab-panel',
  elementClass: DracoTabPanel,
  react: React,
});

export const Tabs = Object.assign(TabsRoot, {
  Item: TabItem,
  Panel: TabPanel,
});
