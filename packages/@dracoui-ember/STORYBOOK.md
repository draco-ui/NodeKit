# Draco UI Storybook

This project uses [Storybook](https://storybook.js.org/) to develop and showcase UI components in isolation.

## Getting Started

### Running Storybook Locally

To start the Storybook development server:

```bash
pnpm storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006).

### Building Storybook

To build a static version of Storybook:

```bash
pnpm build-storybook
```

The built files will be in the `storybook-static` directory.

## Available Addons

This Storybook configuration includes the following addons:

### Essential Addons
- **Controls**: Dynamically interact with component arguments
- **Actions**: Display event handler data
- **Docs**: Auto-generate documentation from stories
- **Viewport**: Preview components in different viewport sizes
- **Backgrounds**: Change background colors
- **Toolbars**: Create custom toolbar items

### Additional Addons
- **A11y**: Check accessibility issues in real-time
- **Interactions**: Test user interactions
- **Links**: Create links between stories
- **Storysource**: View the source code of stories
- **Measure**: Measure elements in the UI
- **Outline**: Visualize the layout outline

## Visual Testing with Chromatic

This project is set up to use [Chromatic](https://www.chromatic.com/) for visual regression testing.

### Setting up Chromatic

1. Sign up for a Chromatic account at [chromatic.com](https://www.chromatic.com/)
2. Create a new project
3. Get your project token
4. Add it to your CI/CD or run locally:

```bash
CHROMATIC_PROJECT_TOKEN=your-token pnpm chromatic
```

### Running Chromatic

```bash
pnpm chromatic
```

This will:
- Build your Storybook
- Upload it to Chromatic
- Run visual regression tests
- Provide a URL to review changes

## Writing Stories

Stories are written in TypeScript and use the Component Story Format (CSF).

### Basic Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/ember-cli-storybook';
import { hbs } from 'ember-cli-htmlbars';

const meta: Meta = {
  title: 'Components/YourComponent',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args: any) => ({
    template: hbs`
      <YourComponent @prop={{this.prop}} />
    `,
    context: args,
  }),
  args: {
    prop: 'value',
  },
};
```

### Story Best Practices

1. **One component per file**: Each component should have its own `.stories.ts` file
2. **Show all variations**: Create stories for different states and configurations
3. **Use meaningful names**: Story names should clearly describe what they demonstrate
4. **Add documentation**: Use JSDoc comments to add descriptions
5. **Interactive controls**: Use argTypes to make props interactive

## Folder Structure

```
src/
└── components/
    └── draco/
        └── button/
            ├── index.ts          # Component logic
            ├── index.hbs         # Component template
            ├── types.ts          # TypeScript types
            └── index.stories.ts  # Storybook stories
```

## Useful Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Chromatic Documentation](https://www.chromatic.com/docs)
- [Component Story Format](https://storybook.js.org/docs/api/csf)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
