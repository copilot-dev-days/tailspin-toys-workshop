---
description: 'Centralized testing guidelines for unit and E2E tests'
applyTo: '**/tests/**,**/e2e-tests/**'
---

# Testing Guidelines

This document provides centralized best practices for all testing in the Tailspin Toys project. For technology-specific details, see:
- [python-tests.instructions.md](./python-tests.instructions.md) - Python unit test patterns
- [playwright.instructions.md](./playwright.instructions.md) - Playwright E2E test patterns

## Running Tests

**ALWAYS use the provided shell scripts to run tests.** These scripts handle environment setup, dependencies, and proper configuration.

### Unit Tests (Backend)

```bash
./scripts/run-server-tests.sh
```

Runs all Python unit tests in `server/tests/`. The script:
- Sets up the Python virtual environment
- Installs dependencies if needed
- Executes tests with proper configuration

### E2E Tests (Frontend)

```bash
./scripts/run-e2e-tests.sh
```

Runs all Playwright E2E tests in `client/e2e-tests/`. The script:
- Starts both Flask API and Astro dev servers automatically
- Installs Playwright browsers if needed
- Executes tests against the running application

## Existing Test Coverage

**Before creating new tests, check existing coverage to avoid duplication.**

### Unit Tests (`server/tests/`)

| File | Coverage |
|------|----------|
| `test_games.py` | Game API endpoints (CRUD operations) |
| `test_models.py` | SQLAlchemy model behavior and relationships |

### E2E Tests (`client/e2e-tests/`)

| File | Coverage |
|------|----------|
| `home.spec.ts` | Homepage display, title, headings, welcome message |
| `games.spec.ts` | Game listing, navigation, details page, back navigation |
| `accessibility.spec.ts` | ARIA attributes, focus states, semantic HTML, color contrast |

## When to Write Tests

### Unit Tests Required For:
- New API endpoints
- New or modified database models
- Utility functions with business logic
- Bug fixes (add regression test)

### E2E Tests Required For:
- New pages or major UI features
- Critical user flows
- Accessibility requirements
- Navigation changes

## Test Quality Standards

### Both Unit and E2E Tests Must:

1. **Be deterministic** - Same result every run, no flaky tests
2. **Be independent** - No dependencies between tests
3. **Be fast** - Optimize for quick feedback
4. **Have clear names** - Describe what is being tested
5. **Follow existing patterns** - Consistency with codebase

### Unit Test Standards (Python)

- Use `unittest.TestCase` as base class
- Follow Arrange-Act-Assert pattern
- Use in-memory SQLite database (`sqlite:///:memory:`)
- Include type hints and docstrings
- Name pattern: `test_<action>_<scenario>`

### E2E Test Standards (Playwright)

- Use role-based locators (`getByRole`, `getByLabel`, `getByText`)
- Use `test.step()` for grouping related actions
- Use auto-retrying assertions (`await expect()`)
- **NEVER** use hard-coded waits (`waitForTimeout`)
- Add `data-testid` attributes to new interactive elements

## Pre-Commit Checklist

Before committing any code changes:

- [ ] Run `./scripts/run-server-tests.sh` - all tests pass
- [ ] Run `./scripts/run-e2e-tests.sh` - all tests pass (if UI changed)
- [ ] New functionality has corresponding tests
- [ ] No existing tests were broken or skipped without justification

## Debugging Test Failures

### Unit Tests

```bash
# Run specific test file
cd server && python -m pytest tests/test_games.py -v

# Run specific test method
cd server && python -m pytest tests/test_games.py::TestGamesRoutes::test_get_all_games -v
```

### E2E Tests

```bash
# Run with UI mode for debugging
cd client && npx playwright test --ui

# Run specific test file
cd client && npx playwright test e2e-tests/games.spec.ts

# Run with headed browser
cd client && npx playwright test --headed
```

## Adding New Tests

### New Unit Test File

1. Create `server/tests/test_<feature>.py`
2. Follow the pattern in `test_games.py`
3. Include setUp/tearDown for database isolation
4. Run `./scripts/run-server-tests.sh` to verify

### New E2E Test File

1. Create `client/e2e-tests/<feature>.spec.ts`
2. Follow the pattern in `games.spec.ts`
3. Use `test.describe()` to group related tests
4. Run `./scripts/run-e2e-tests.sh` to verify

## Testability Requirements

### Backend
- All API endpoints must return proper status codes
- Error responses must include descriptive messages
- Models must have `to_dict()` methods for JSON serialization

### Frontend
- All interactive elements MUST have `data-testid` attributes
- Use semantic HTML elements for accessibility
- Include ARIA labels where semantic HTML is insufficient
