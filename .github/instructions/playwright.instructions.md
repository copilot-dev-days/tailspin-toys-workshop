---
applyTo: 'client/e2e-tests/*.spec.ts'
---

# Playwright E2E Test Guidelines

Write robust, maintainable end-to-end tests using TypeScript and Playwright's best practices. All tests must pass before committing.

## Core Principles

### Test Structure
- Use `test.describe()` for logical test grouping
- Write descriptive test names that explain the expected behavior
- Keep tests isolated - each should run independently
- Use `test.beforeEach()` for setup while maintaining isolation

### Element Selection (Priority Order)
1. **User-facing attributes**: `getByRole()`, `getByLabel()`, `getByText()`
2. **Test IDs**: `getByTestId()` for elements without clear user attributes
3. **Avoid**: CSS selectors and XPath that break with DOM changes

```typescript
// ✅ Good - resilient to changes
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByTestId('game-card').first().click();

// ❌ Avoid - fragile
await page.locator('.btn-primary.submit-btn').click();
```

### Assertions
- **Always use web-first assertions**: `await expect()` waits and retries automatically
- Prefer `toBeVisible()`, `toHaveText()`, `toContainText()`
- Use `expect.soft()` to continue test execution after failures

```typescript
// ✅ Good - waits and retries
await expect(page.getByText('Welcome')).toBeVisible();

// ❌ Avoid - no waiting
expect(await page.getByText('Welcome').isVisible()).toBe(true);
```

## Project-Specific Patterns

### Game Testing Examples

**List View:**
```typescript
await page.goto('/');
await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });

const gameCards = page.locator('[data-testid="game-card"]');
await expect(gameCards.first()).toBeVisible();
expect(await gameCards.count()).toBeGreaterThan(0);
```

**Details View:**
```typescript
await page.goto('/game/1');
await page.waitForSelector('[data-testid="game-details"]', { timeout: 10000 });

await expect(page.locator('[data-testid="game-details-title"]')).toBeVisible();
await expect(page.locator('[data-testid="game-details-description"]')).toBeVisible();
```

**Navigation:**
```typescript
const gameCard = page.locator('[data-testid="game-card"]').first();
const gameId = await gameCard.getAttribute('data-game-id');
await gameCard.click();
await expect(page).toHaveURL(`/game/${gameId}`);
```

## Data Test IDs

Add `data-testid` attributes incrementally as tests are created:

- Use kebab-case: `game-card`, `submit-button`
- Target interactive elements and content containers
- Prefer semantic selectors when possible

## Environment & Debugging

- **Testing**: Script runs Flask (port 5000) + Astro (port 4321) automatically
- **Debugging**: Use `--debug` flag or VS Code extension for live debugging
- **CI**: Use trace viewer for failure analysis instead of screenshots
- **MCP Integration**: Leverage Playwright MCP server for advanced testing scenarios

## Key Commands

```bash
# Run all e2e tests
./scripts/run-e2e-tests.sh

# Debug specific test
npx playwright test --debug game.spec.ts

# Generate locators
npx playwright codegen http://localhost:4321
```

**Reference**: [Home tests](../../client/e2e-tests/home.spec.ts) • [Game tests](../../client/e2e-tests/games.spec.ts)
