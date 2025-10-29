# @dracoui/styles

Global configurable styles for Corinvo's Draco Design System.

## Installation

```bash
npm install @dracoui/styles
# or
pnpm add @dracoui/styles
# or
yarn add @dracoui/styles
```

## Usage

### Using the Compiled CSS

Import the minified CSS file in your application:

```javascript
import '@dracoui/styles/dist/css/styles.css';
```

Or use the unminified version for development:

```javascript
import '@dracoui/styles/dist/css/styles.unminified.css';
```

### Using the SCSS Source

Import the SCSS files directly for customization:

```scss
@use '@dracoui/styles/dist/index.scss';
```

Or import specific components:

```scss
@use '@dracoui/styles/dist/scss/components/button';
@use '@dracoui/styles/dist/scss/components/badge';
```

## Development

### Building

```bash
# Build all outputs (CSS + SCSS distribution)
pnpm build

# Build only the CSS files
pnpm build:css

# Build only the unminified CSS
pnpm build:css:unminified

# Copy SCSS source files to dist
pnpm build:scss
```

### Watch Mode

Watch for changes and rebuild automatically:

```bash
# Watch all files
pnpm watch

# Watch only CSS
pnpm watch:css

# Watch only SCSS files
pnpm watch:scss
```

### Clean

Remove the `dist` folder:

```bash
pnpm clean
```

## Build Pipeline

This package uses a modern, lightweight build pipeline:

1. **Sass CLI**: Compiles SCSS to CSS with module resolution
2. **PostCSS**: Processes CSS with plugins:
   - `postcss-import`: Inline `@import` rules
   - `postcss-normalize-charset`: Add charset declarations
   - `postcss-flexbugs-fixes`: Fix flexbox bugs
   - `autoprefixer`: Add vendor prefixes
   - `cssnano`: Minify CSS for production
3. **cpx2**: Copy SCSS source files to distribution folder

## Output Structure

```
dist/
├── css/
│   ├── styles.css              # Minified, production-ready CSS
│   └── styles.unminified.css   # Unminified CSS for development
├── scss/
│   ├── components/             # Individual component styles
│   └── utilities/              # Utility styles
└── index.scss                  # Main entry point
```

## Configuration

### PostCSS

PostCSS configuration is in `postcss.config.js`. You can customize plugins and their options there.

### Sass

Sass is configured via CLI flags. Key settings:
- `--no-source-map`: Disable source maps for cleaner output
- `--load-path=node_modules`: Enable importing from node_modules

## Browser Support

Browser support is determined by the Browserslist configuration in the root `package.json`.
Default targets modern browsers with autoprefixer.

## License

MIT
