# @dracoui/uno

UnoCSS and Tailwind CSS integration for Draco UI design tokens. Automatically syncs with `@dracoui/primitives`.

## Installation

```bash
pnpm add @dracoui/uno
```

## Usage

### With UnoCSS

```ts
// uno.config.ts
import { defineConfig } from 'unocss';
import { presetDraco } from '@dracoui/uno';

export default defineConfig({
  presets: [
    presetDraco(),
  ],
});
```

### With Tailwind CSS

```js
// tailwind.config.js
import { theme } from '@dracoui/uno';

export default {
  theme: {
    extend: theme,
  },
};
```

### Using Tokens Directly

```ts
import { tokens, colors, spacing } from '@dracoui/uno';

// Use individual token groups
console.log(colors.lime[500]); // #c5db00
console.log(spacing[4]); // 16px

// Or use the full tokens object
console.log(tokens.colors.neutral[900]); // #121212
```

## Available Tokens

- `colors` - Color palettes (lime, neutral)
- `borderRadius` - Border radius values
- `borderWidth` - Border width values  
- `spacing` - Spacing scale
- `fontSize` - Font size scale
- `fontWeight` - Font weight scale
- `lineHeight` - Line height scale
- `transitionDuration` - Animation duration values
- `transitionTimingFunction` - Easing functions

## How It Works

This package reads SCSS variables from `@dracoui/primitives` at build time and converts them to JavaScript objects. When primitives are updated, rebuild this package to get the latest tokens.

## License

MIT
