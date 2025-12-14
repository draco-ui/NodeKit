# Cypress Testing Guide

This project uses Cypress for both component testing and end-to-end (E2E) testing.

## Test Types

### Component Tests
Component tests are located alongside the components they test with the `.cy.tsx` extension:
- `src/Button/Button.cy.tsx`
- `src/Input/Input.cy.tsx`

These tests mount individual components in isolation and verify their behavior.

### E2E Tests
E2E tests are located in `cypress/e2e/` and test the full application flow, typically against the Storybook instance.

## Running Tests

### Interactive Mode (Recommended for Development)

```bash
# Open Cypress Test Runner
pnpm cypress

# Open Cypress for component testing only
pnpm cypress:component
```

### Headless Mode (For CI/CD)

```bash
# Run all component tests in headless mode
pnpm test:component

# Run all E2E tests in headless mode
pnpm test:e2e

# Run all tests
pnpm cypress:headless
```

## Writing Tests

### Component Test Example

```tsx
import * as React from 'react';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('button').should('contain', 'Click me');
  });

  it('should handle clicks', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Click</Button>);

    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});
```

### E2E Test Example

```typescript
describe('My Feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should work correctly', () => {
    cy.get('button').click();
    cy.contains('Expected Text').should('be.visible');
  });
});
```

## Custom Commands

### `cy.setTheme(theme)`
Change the application theme:
```typescript
cy.setTheme('dark');
```

### `cy.matchImageSnapshot(name?)`
Take a screenshot for visual regression testing:
```typescript
cy.matchImageSnapshot('button-states');
```

### `cy.checkA11y()`
Basic accessibility check:
```typescript
cy.checkA11y();
```

## Visual Regression Testing

Screenshots are automatically saved in `cypress/screenshots/` directory. You can use these for visual regression testing by comparing them across test runs.

To capture a screenshot:
```typescript
cy.matchImageSnapshot('my-component-state');
```

## Best Practices

1. **Isolation**: Each test should be independent and not rely on other tests
2. **Descriptive Names**: Use clear, descriptive test names
3. **Selectors**: Prefer `data-testid` attributes over class names or IDs
4. **Wait Strategies**: Use Cypress's built-in retry-ability instead of arbitrary waits
5. **Setup/Teardown**: Use `beforeEach` and `afterEach` for common setup
6. **Accessibility**: Include accessibility checks in your tests

## Configuration

Cypress configuration is located in `cypress.config.ts`. Key settings:

- **Component tests**: Run against Vite dev server
- **E2E tests**: Run against Storybook (localhost:6007)
- **Viewport**: 1280x720 by default
- **Video**: Disabled for faster runs
- **Screenshots**: Enabled on failure

## Debugging

1. Use `.debug()` command to pause test execution:
   ```typescript
   cy.get('button').debug().click();
   ```

2. Use `.log()` to output values:
   ```typescript
   cy.get('button').then(($btn) => {
     console.log($btn);
   });
   ```

3. Open DevTools in Cypress Test Runner for full debugging

## CI/CD Integration

For continuous integration, use headless mode:

```yaml
# Example GitHub Actions workflow
- name: Run Cypress tests
  run: |
    pnpm test:component
    pnpm test:e2e
```

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Component Testing Guide](https://docs.cypress.io/guides/component-testing/overview)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
