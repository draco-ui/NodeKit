import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Link',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Link @href={{this.href}} @text={{this.text}} />
    `,
    context: args,
  }),
  args: {
    text: 'Click here',
    href: '#',
  },
};

export const ExternalLink: Story = {
  render: (args: any) => ({
    template: hbs`
      <Draco::Link @href={{this.href}} @text={{this.text}} />
    `,
    context: args,
  }),
  args: {
    text: 'Visit external site',
    href: 'https://example.com',
  },
};

export const WithYieldedContent: Story = {
  render: () => ({
    template: hbs`
      <Draco::Link @href="#">
        This is <strong>custom</strong> content
      </Draco::Link>
    `,
  }),
};

export const InlineText: Story = {
  render: () => ({
    template: hbs`
      <p>
        This is a paragraph with an <Draco::Link @href="#" @text="inline link" /> in it.
      </p>
    `,
  }),
};
