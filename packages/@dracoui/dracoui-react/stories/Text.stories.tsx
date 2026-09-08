import { Text } from "@dracoui-react/text";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "!dev"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "error"],
      description: "The color/semantic variant.",
      table: {
        type: { summary: "default | success | error" },
        defaultValue: { summary: "default" },
      },
    },
    type: {
      control: "radio",
      options: ["body", "heading"],
      description: "The text type category.",
      table: {
        type: { summary: "body | heading" },
        defaultValue: { summary: "body" },
      },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
      description: "The typographic size to apply.",
      table: {
        type: { summary: "xs | sm | md | lg | xl | xxl" },
        defaultValue: { summary: "md" },
      },
    },
    as: {
      control: "select",
      options: ["span", "p", "div", "label", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "The HTML element to render as.",
      table: {
        type: { summary: "p | span | div | label | h1 | h2 | h3 | h4 | h5 | h6" },
        defaultValue: { summary: "span" },
      },
    },
    fontWeight: {
      control: "radio",
      options: ["regular", "medium", "semibold", "bold"],
      description: "The font weight to apply.",
      table: {
        type: { summary: "regular | medium | semibold | bold" },
      },
    },
    alignment: {
      control: "radio",
      options: ["start", "center", "end", "justify"],
      description: "The text alignment.",
      table: {
        type: { summary: "start | center | end | justify" },
      },
    },
    textDecorationLine: {
      control: "radio",
      options: ["underline", "lineThrough"],
      description: "The text decoration line style.",
      table: {
        type: { summary: "underline | lineThrough" },
      },
    },
    breakWord: {
      control: "boolean",
      description: "Whether to allow words to break and wrap.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    truncate: {
      control: "boolean",
      description: "Whether to truncate overflowing text with an ellipsis.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    numeric: {
      control: "boolean",
      description: "Whether to apply font features optimized for numeric display.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    visuallyHidden: {
      control: "boolean",
      description: "Whether to hide the text visually while keeping it accessible.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The text content.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    type: "body",
    size: "md",
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text as="h1" type="heading" size="xxl">Heading XXL</Text>
      <Text as="h2" type="heading" size="xl">Heading XL</Text>
      <Text as="h3" type="heading" size="lg">Heading Large</Text>
      <Text as="h4" type="heading" size="md">Heading Medium</Text>
      <Text as="h5" type="heading" size="sm">Heading Small</Text>
      <Text as="h6" type="heading" size="xs">Heading XS</Text>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text type="body" size="lg">Body Large</Text>
      <Text type="body" size="md">Body Medium</Text>
      <Text type="body" size="sm">Body Small</Text>
      <Text type="body" size="xs">Body Extra Small</Text>
    </div>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text type="body" fontWeight="regular">Regular weight</Text>
      <Text type="body" fontWeight="medium">Medium weight</Text>
      <Text type="body" fontWeight="semibold">Semibold weight</Text>
      <Text type="body" fontWeight="bold">Bold weight</Text>
    </div>
  ),
};

export const AsElement: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text as="p" type="body">Rendered as a paragraph</Text>
      <Text as="span" type="body">Rendered as a span</Text>
      <Text as="div" type="body">Rendered as a div</Text>
      <Text as="label" type="body">Rendered as a label</Text>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div style={{ width: "200px" }}>
      <Text type="body" truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows.
      </Text>
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text type="body" variant="default">Default text</Text>
      <Text type="body" variant="success">Success text</Text>
      <Text type="body" variant="error">Error text</Text>
    </div>
  ),
};

export const Decoration: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text type="body" textDecorationLine="underline">Underlined text</Text>
      <Text type="body" textDecorationLine="lineThrough">Line-through text</Text>
    </div>
  ),
};
