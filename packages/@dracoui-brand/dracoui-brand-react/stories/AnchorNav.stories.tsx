import { AnchorNav } from '../src/components/AnchorNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnchorNav> = {
  title: 'Brand/AnchorNav',
  component: AnchorNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', '!dev'],
};

export default meta;
type Story = StoryObj<typeof AnchorNav>;

export const Default: Story = {
  render: () => (
    <AnchorNav>
      <AnchorNav.Link href="#features">Features</AnchorNav.Link>
      <AnchorNav.Link href="#security" active>Security</AnchorNav.Link>
      <AnchorNav.Link href="#enterprise">Enterprise</AnchorNav.Link>
      <AnchorNav.Link href="#pricing">Pricing</AnchorNav.Link>
      <AnchorNav.Link href="#resources">Resources</AnchorNav.Link>
      <AnchorNav.Action href="#signup">Sign up</AnchorNav.Action>
    </AnchorNav>
  ),
};

export const DifferentActiveLink: Story = {
  render: () => (
    <AnchorNav>
      <AnchorNav.Link href="#features" active>Features</AnchorNav.Link>
      <AnchorNav.Link href="#security">Security</AnchorNav.Link>
      <AnchorNav.Link href="#enterprise">Enterprise</AnchorNav.Link>
      <AnchorNav.Link href="#pricing">Pricing</AnchorNav.Link>
      <AnchorNav.Link href="#resources">Resources</AnchorNav.Link>
      <AnchorNav.Action href="#signup">Sign up</AnchorNav.Action>
    </AnchorNav>
  ),
};
