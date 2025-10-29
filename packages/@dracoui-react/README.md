# @dracoui/react

Draco Design System for React - A comprehensive, accessible component library built with TypeScript.

## Installation

```bash
npm install @dracoui/react
# or
pnpm add @dracoui/react
# or
yarn add @dracoui/react
```

## Usage

### Import Components

```tsx
import { Button, Badge, Input } from '@dracoui/react';
import '@dracoui/react/styles';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Badge variant="success">New</Badge>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

### Individual Component Imports

```tsx
import { Button } from '@dracoui/react';
import '@dracoui/react/dist/styles/index.css';
```

## Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="medium" onClick={() => console.log('Clicked')}>
  Primary Button
</Button>

<Button variant="secondary" loading>
  Loading...
</Button>

<Button startIcon={<Icon />} endIcon={<Icon />}>
  With Icons
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium' | 'large'
- `fullWidth`: boolean
- `loading`: boolean
- `startIcon`: ReactNode
- `endIcon`: ReactNode

### Badge

Small status indicators and labels.

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="success" size="small">Active</Badge>
<Badge dot variant="error" />
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium' | 'large'
- `dot`: boolean

### Input

Text input with validation states and adornments.

```tsx
<Input placeholder="Enter text..." />
<Input error value="Invalid" />
<Input startAdornment={<Icon />} placeholder="Search..." />
```

**Props:**
- `size`: 'small' | 'medium' | 'large'
- `error`: boolean
- `fullWidth`: boolean
- `startAdornment`: ReactNode
- `endAdornment`: ReactNode

## Development

### Running Storybook

```bash
pnpm storybook
```

Visit [http://localhost:6007](http://localhost:6007) to view the component library.

### Building

```bash
# Build all outputs
pnpm build

# Build specific output
pnpm build:types    # TypeScript declarations
pnpm build:esm      # ES modules
pnpm build:cjs      # CommonJS modules
```

### Testing

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Button/
│   │   ├── Button.tsx       # Component implementation
│   │   ├── Button.css       # Component styles
│   │   ├── Button.stories.tsx  # Storybook stories
│   │   ├── Button.test.tsx  # Unit tests
│   │   └── index.ts         # Public exports
│   ├── Badge/
│   └── Input/
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── styles/              # Global styles
└── index.ts             # Main entry point
```

This structure follows best practices from:
- **IBM Carbon Design System**
- **Microsoft Fluent UI**
- **Shopify Polaris**

## TypeScript

This library is written in TypeScript and provides full type definitions.

```tsx
import type { ButtonProps, BadgeProps, InputProps } from '@dracoui/react';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
