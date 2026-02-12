import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/Text',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Display: Story = {
  render: () => ({
    template: hbs`
      <Draco::Text::Display>
        Display Text - Large heading or title
      </Draco::Text::Display>
    `,
  }),
};

export const Body: Story = {
  render: () => ({
    template: hbs`
      <Draco::Text::Body>
        Body text - This is the standard text used for paragraphs and general content.
      </Draco::Text::Body>
    `,
  }),
};

export const Code: Story = {
  render: () => ({
    template: hbs`
      <Draco::Text::Code>
        const example = "code text";
      </Draco::Text::Code>
    `,
  }),
};

export const TextHierarchy: Story = {
  render: () => ({
    template: hbs`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
        <div>
          <Draco::Text::Display>
            Display Text
          </Draco::Text::Display>
          <p style="font-size: 12px; color: #666; margin-top: 4px;">Used for large headings and titles</p>
        </div>

        <div>
          <Draco::Text::Body>
            Body Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Draco::Text::Body>
          <p style="font-size: 12px; color: #666; margin-top: 4px;">Used for paragraphs and general content</p>
        </div>

        <div>
          <Draco::Text::Code>
            npm install @dracoui/ember
          </Draco::Text::Code>
          <p style="font-size: 12px; color: #666; margin-top: 4px;">Used for inline code snippets</p>
        </div>
      </div>
    `,
  }),
};

export const InContext: Story = {
  render: () => ({
    template: hbs`
      <div style="max-width: 600px;">
        <Draco::Text::Display>
          Getting Started
        </Draco::Text::Display>

        <Draco::Text::Body>
          To install the Draco UI components, run the following command in your terminal:
        </Draco::Text::Body>

        <div style="margin: 1rem 0;">
          <Draco::Text::Code>
            npm install @dracoui/ember
          </Draco::Text::Code>
        </div>

        <Draco::Text::Body>
          After installation, you can import and use components in your application.
        </Draco::Text::Body>
      </div>
    `,
  }),
};
