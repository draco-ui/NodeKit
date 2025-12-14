# GitHub Actions CI/CD Workflows

This directory contains GitHub Actions workflows for automated testing and deployment.

## Workflows Overview

### 1. Quick Check (`quick-check.yml`)
**Runs on**: Every commit to feature branches (not main/develop)
**Purpose**: Fast feedback for developers during active development
**Duration**: ~3-5 minutes

**What it runs**:
- ✅ TypeScript type checking
- ✅ Vitest unit tests
- ✅ Package builds
- ❌ Skips Cypress (slower tests)

**Use case**: Quick validation during development. Runs automatically on every push to feature branches.

### 2. Full Test Suite (`test.yml`)
**Runs on**:
- Commits to `main` and `develop` branches
- Pull requests to `main` and `develop`
- Manual trigger via GitHub Actions UI

**Purpose**: Comprehensive testing before merging
**Duration**: ~8-12 minutes

**What it runs**:
- ✅ Vitest unit tests (with coverage)
- ✅ Cypress component tests
- ✅ TypeScript type checking
- ✅ Build verification

**Jobs**:
1. **vitest** - Runs all unit tests with Vitest
2. **cypress-component** - Runs Cypress component tests
3. **typecheck** - Validates TypeScript types
4. **build** - Verifies all packages build successfully

## When Tests Run

### On Every Commit (Feature Branches)
```
git push origin feature/my-feature
```
→ Triggers `quick-check.yml` (fast, basic validation)

### On Pull Requests
```
Open PR to main/develop
```
→ Triggers `test.yml` (full test suite)

### On Main/Develop Push
```
git push origin main
```
→ Triggers `test.yml` (full test suite)

### Manual Trigger
1. Go to GitHub Actions tab
2. Select "Test Suite" workflow
3. Click "Run workflow"

## Workflow Configuration

### Concurrency Control
Both workflows use concurrency control to cancel in-progress runs when new commits are pushed:

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

This saves CI resources and provides faster feedback.

### Caching Strategy
The workflows cache:
- **pnpm store**: Dependencies (node_modules)
- **Cypress binary**: Cypress test runner

This significantly speeds up subsequent runs.

## Artifacts

### Test Coverage (Vitest)
- **When**: Always uploaded after Vitest runs
- **Location**: GitHub Actions artifacts
- **Retention**: 7 days

### Cypress Artifacts (on failure only)
- **Screenshots**: Visual snapshots when tests fail
- **Videos**: Test execution recordings
- **Snapshot diffs**: Visual regression differences

Access via: GitHub Actions run → Artifacts section

## Environment Variables

### CI Mode
Tests run with `CI=true` environment variable, which:
- Disables interactive prompts
- Uses non-TTY output
- Enables stricter error handling

## Modifying Workflows

### To run tests on every commit (including main/develop):

Edit `quick-check.yml`:
```yaml
on:
  push:
    # Remove branches-ignore to run on all branches
```

### To skip Cypress on PRs:

Edit `test.yml`:
```yaml
jobs:
  cypress-component:
    if: github.event_name != 'pull_request'
```

### To change Node.js version:

Both workflows use Node.js 20. To change:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18' # Change this
```

## Troubleshooting

### Tests pass locally but fail in CI

**Common causes**:
1. **Missing dependencies**: Run `pnpm install` locally
2. **Build order**: Ensure types and styles are built first
3. **Environment differences**: Check Node version matches

### Cypress tests timeout

**Solutions**:
- Increase timeout in `cypress.config.ts`
- Check for infinite loops or missing waiters
- Verify screenshots/videos for clues

### Type check fails

**Common causes**:
- Types package not built
- Missing `@dracoui/types` exports
- Outdated `pnpm-lock.yaml`

### Cache issues

**Solution**: Clear GitHub Actions cache:
1. Go to Settings → Actions → Caches
2. Delete relevant caches
3. Re-run workflow

## Performance Optimization

### Current Timings (approximate)
- Quick Check: 3-5 minutes
- Full Test Suite: 8-12 minutes

### Further Optimization Options

1. **Parallel matrix testing** (run tests across multiple Node versions)
2. **Turborepo caching** (cache task outputs)
3. **Distributed Cypress** (run tests in parallel)
4. **Skip unchanged packages** (only test changed code)

## Best Practices

### For Developers

✅ **DO**:
- Wait for Quick Check before requesting review
- Fix failing tests immediately
- Keep tests fast and focused
- Update snapshots when UI changes intentionally

❌ **DON'T**:
- Force push to branches with running CI
- Ignore flaky tests
- Skip writing tests for new features
- Commit large binary files (slows CI)

### For Maintainers

✅ **DO**:
- Require passing tests before merge
- Monitor workflow execution times
- Update dependencies regularly
- Review test coverage reports

❌ **DON'T**:
- Merge PRs with failing tests
- Disable tests to "make CI pass"
- Ignore CI performance degradation

## Resources

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [pnpm in CI](https://pnpm.io/continuous-integration)
- [Cypress CI Guide](https://docs.cypress.io/guides/continuous-integration/introduction)
- [Vitest CI Guide](https://vitest.dev/guide/ci.html)
