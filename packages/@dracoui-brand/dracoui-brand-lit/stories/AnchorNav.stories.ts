import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../src/components/AnchorNav/draco-anchor-nav.js';
import '../src/components/AnchorNav/draco-anchor-nav-link.js';
import '../src/components/AnchorNav/draco-anchor-nav-action.js';

const meta: Meta = {
  title: 'Brand Lit/AnchorNav',
  component: 'draco-anchor-nav',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <draco-anchor-nav>
      <draco-anchor-nav-link href="#features">Features</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#security" active>Security</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#enterprise">Enterprise</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#pricing">Pricing</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#resources">Resources</draco-anchor-nav-link>
      <draco-anchor-nav-action href="#signup">Sign up</draco-anchor-nav-action>
    </draco-anchor-nav>
  `,
};

export const DifferentActiveLink: Story = {
  render: () => html`
    <draco-anchor-nav>
      <draco-anchor-nav-link href="#features" active>Features</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#security">Security</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#enterprise">Enterprise</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#pricing">Pricing</draco-anchor-nav-link>
      <draco-anchor-nav-link href="#resources">Resources</draco-anchor-nav-link>
      <draco-anchor-nav-action href="#signup">Sign up</draco-anchor-nav-action>
    </draco-anchor-nav>
  `,
};
