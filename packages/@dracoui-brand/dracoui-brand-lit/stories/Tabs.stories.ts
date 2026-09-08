import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../src/components/Tabs/draco-tabs.js';
import '../src/components/Tabs/draco-tab.js';
import '../src/components/Tabs/draco-tab-panel.js';

const meta: Meta = {
  title: 'Brand Lit/Tabs',
  component: 'draco-tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <draco-tabs @draco-tab-change=${(e: CustomEvent) => console.log('Tab changed:', e.detail.index)}>
      <draco-tab>Featured</draco-tab>
      <draco-tab>GitHub</draco-tab>
      <draco-tab>Self</draco-tab>
      <draco-tab>3rd-Party</draco-tab>

      <draco-tab-panel>
        <p>Featured content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>GitHub content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>Self content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>3rd-Party content goes here.</p>
      </draco-tab-panel>
    </draco-tabs>
  `,
};

export const WithDisabledTab: Story = {
  render: () => html`
    <draco-tabs>
      <draco-tab>Featured</draco-tab>
      <draco-tab disabled>GitHub</draco-tab>
      <draco-tab>Self</draco-tab>
      <draco-tab>3rd-Party</draco-tab>

      <draco-tab-panel>
        <p>Featured content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>GitHub content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>Self content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>3rd-Party content goes here.</p>
      </draco-tab-panel>
    </draco-tabs>
  `,
};

export const PreselectedTab: Story = {
  render: () => html`
    <draco-tabs selectedIndex=${2}>
      <draco-tab>Featured</draco-tab>
      <draco-tab>GitHub</draco-tab>
      <draco-tab>Self</draco-tab>
      <draco-tab>3rd-Party</draco-tab>

      <draco-tab-panel>
        <p>Featured content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>GitHub content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>Self content goes here.</p>
      </draco-tab-panel>
      <draco-tab-panel>
        <p>3rd-Party content goes here.</p>
      </draco-tab-panel>
    </draco-tabs>
  `,
};
