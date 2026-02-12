# Visual Snapshot Testing with Cypress

This guide explains how visual snapshot testing works with Cypress in this project.

## How It Works

Cypress uses `cypress-image-snapshot` to create and compare visual snapshots of your components. Unlike Jest's `__snapshots__` directory, Cypress stores snapshots in a different location.

## Directory Structure

```
cypress/
├── snapshots/
│   ├── Button.cy.tsx/
│   │   ├── button-variants.snap.png          # Baseline snapshot
│   │   ├── __diff_output__/                   # Diff images (gitignored)
│   │   │   └── button-variants.diff.png
│   │   └── __received_output__/               # Failed test outputs (gitignored)
│   │       └── button-variants.snap.png
│   └── Input.cy.tsx/
│       └── input-sizes.snap.png
├── screenshots/                                # Regular screenshots (gitignored)
└── videos/                                     # Test videos (gitignored)
```

## What Gets Committed

✅ **Commit these:**
- `cypress/snapshots/**/*.snap.png` - Baseline snapshots
- These are your "source of truth" for visual regression testing

❌ **Don't commit these (gitignored):**
- `cypress/snapshots/**/__diff_output__/` - Diff images showing differences
- `cypress/snapshots/**/__received_output__/` - Failed test outputs
- `cypress/screenshots/` - Debug screenshots
- `cypress/videos/` - Test execution videos

## Using Snapshots in Tests

### Basic Usage

```typescript
it('should match visual snapshot', () => {
  cy.mount(<Button variant="primary">Click me</Button>);

  // Take a snapshot and compare
  cy.matchImageSnapshot('button-primary');
});
```

### With Options

```typescript
it('should match snapshot with custom threshold', () => {
  cy.mount(<Button>Test</Button>);

  cy.matchImageSnapshot('button-custom', {
    failureThreshold: 0.05, // 5% difference allowed
    failureThresholdType: 'percent',
  });
});
```

### Multiple Snapshots in One Test

```typescript
it('should match snapshots for all states', () => {
  // Normal state
  cy.mount(<Button>Normal</Button>);
  cy.matchImageSnapshot('button-normal');

  // Hover state
  cy.mount(<Button>Hover</Button>);
  cy.get('button').trigger('mouseover');
  cy.matchImageSnapshot('button-hover');

  // Disabled state
  cy.mount(<Button disabled>Disabled</Button>);
  cy.matchImageSnapshot('button-disabled');
});
```

## Snapshot Workflow

### 1. Creating Initial Snapshots

First time running tests with `cy.matchImageSnapshot()`:

```bash
# Run tests - this creates baseline snapshots
pnpm test:component
```

The first run will create baseline snapshots in `cypress/snapshots/`.

### 2. Detecting Changes

When component visuals change, tests will fail and generate:
- **Diff image**: Shows what changed (red/green highlights)
- **Received output**: The new snapshot

```bash
# Run tests
pnpm test:component

# If tests fail, check:
# cypress/snapshots/<spec-name>/__diff_output__/<name>.diff.png
```

### 3. Updating Snapshots

If changes are intentional, update baseline snapshots:

```bash
# Delete old snapshots
rm -rf cypress/snapshots

# Re-run tests to generate new baselines
pnpm test:component

# Or use Cypress plugin to update snapshots
# (requires manual approval in Cypress UI)
```

### 4. Reviewing Changes

```bash
# Visual diff files are in:
cypress/snapshots/<spec-name>/__diff_output__/

# Open diff images to review changes
open cypress/snapshots/Button.cy.tsx/__diff_output__/*.diff.png
```

## Configuration

Snapshot settings in `cypress/support/commands.ts`:

```typescript
addMatchImageSnapshotCommand({
  failureThreshold: 0.03,        // 3% pixel difference allowed
  failureThresholdType: 'percent',
  customDiffConfig: {
    threshold: 0.1                // Sensitivity (0-1)
  },
  capture: 'viewport',
});
```

### Threshold Types

- **percent**: Percentage of pixels that can differ (0-1)
- **pixel**: Absolute number of pixels that can differ

### Threshold Values

- `0.00` - Exact match required
- `0.01` - 1% difference allowed (good for minor antialiasing)
- `0.03` - 3% difference allowed (default, good balance)
- `0.05` - 5% difference allowed (looser tolerance)

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Visual Tests

on: [push, pull_request]

jobs:
  cypress-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: pnpm install

      - name: Build styles
        run: pnpm --filter @dracoui/styles build

      - name: Run visual tests
        run: pnpm test:component

      - name: Upload snapshots on failure
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-snapshots
          path: |
            cypress/snapshots/**/__diff_output__
            cypress/snapshots/**/__received_output__
```

## Best Practices

### 1. Stable Test Environment

```typescript
// Wait for animations before snapshot
it('should match snapshot', () => {
  cy.mount(<AnimatedButton />);
  cy.wait(500); // Wait for animation
  cy.matchImageSnapshot('button-stable');
});
```

### 2. Consistent Viewport

```typescript
// Set viewport before snapshot
it('should match at specific size', () => {
  cy.viewport(1280, 720);
  cy.mount(<ResponsiveComponent />);
  cy.matchImageSnapshot('component-desktop');
});
```

### 3. Hide Dynamic Content

```typescript
// Hide timestamps or dynamic data
it('should match without dynamic content', () => {
  cy.mount(<ComponentWithTimestamp />);
  cy.get('[data-timestamp]').invoke('hide');
  cy.matchImageSnapshot('component-static');
});
```

### 4. Descriptive Names

```typescript
// Good - descriptive snapshot names
cy.matchImageSnapshot('button-primary-hover-dark-mode');

// Bad - generic names
cy.matchImageSnapshot('test1');
```

### 5. Test Critical States

```typescript
describe('Button Visual Tests', () => {
  const states = [
    { props: { variant: 'primary' }, name: 'primary' },
    { props: { variant: 'secondary' }, name: 'secondary' },
    { props: { disabled: true }, name: 'disabled' },
  ];

  states.forEach(({ props, name }) => {
    it(`matches ${name} state`, () => {
      cy.mount(<Button {...props}>Text</Button>);
      cy.matchImageSnapshot(`button-${name}`);
    });
  });
});
```

## Troubleshooting

### Tests Fail in CI but Pass Locally

**Problem**: Different rendering between OS/browsers

**Solutions**:
- Use Docker for consistent environment
- Increase failure threshold
- Use Percy or Applitools for cross-browser testing

### Snapshots Keep Failing

**Problem**: Animations, fonts, or timing issues

**Solutions**:
```typescript
// Disable animations
cy.get('*').invoke('css', 'transition', 'none');
cy.get('*').invoke('css', 'animation', 'none');

// Wait for fonts to load
cy.document().should((doc) => {
  expect(doc.fonts.status).to.equal('loaded');
});
```

### Large Snapshot Diffs

**Problem**: Small change causes large diff

**Solutions**:
```typescript
// Use tighter thresholds
cy.matchImageSnapshot('precise-test', {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
});
```

## Alternative Tools

For more advanced visual testing:

- **Percy**: Cloud-based visual testing with better cross-browser support
- **Chromatic**: Storybook-focused visual testing
- **Applitools**: AI-powered visual testing

## Resources

- [cypress-image-snapshot Docs](https://github.com/jaredpalmer/cypress-image-snapshot)
- [Visual Testing Guide](https://docs.cypress.io/guides/tooling/visual-testing)
- [Percy Integration](https://docs.percy.io/docs/cypress)
