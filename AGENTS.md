# AI Agent Guide for Tailspin Toys

This document provides essential information to help AI agents understand and work effectively with the Tailspin Toys codebase.

## Project Overview

Tailspin Toys is a crowdfunding platform for games with a developer theme. The application consists of:

- **Backend**: Flask API with SQLAlchemy ORM
- **Frontend**: Astro framework with Svelte 5 components
- **Styling**: Tailwind CSS v4 (dark theme throughout)
- **Database**: SQLite
- **Testing**: Python unittest (backend), Playwright (frontend)

## Quick Start

### Running the Application

```bash
# Linux/macOS/Codespaces
./scripts/start-app.sh

# Windows (PowerShell)
.\scripts\start-app.ps1

# Access at http://localhost:4321
```

### Running Tests

```bash
# Linux/macOS/Codespaces
./scripts/run-server-tests.sh    # Backend tests
./scripts/run-e2e-tests.sh       # Frontend E2E tests

# Windows (PowerShell)
.\scripts\run-server-tests.ps1   # Backend tests
.\scripts\run-e2e-tests.ps1      # Frontend E2E tests
```

## Repository Structure

```
tailspin-toys/
├── server/                 # Flask backend
│   ├── models/            # SQLAlchemy ORM models
│   ├── routes/            # API endpoints (Flask blueprints)
│   ├── tests/             # Python unit tests
│   ├── utils/             # Helper functions
│   └── app.py             # Flask app initialization
├── client/                # Astro/Svelte frontend
│   ├── src/
│   │   ├── components/    # Reusable Svelte components
│   │   ├── layouts/       # Astro layout templates
│   │   ├── pages/         # Astro page routes (file-based routing)
│   │   ├── styles/        # CSS and Tailwind config
│   │   └── types/         # TypeScript types
│   └── e2e-tests/         # Playwright E2E tests (*.spec.ts)
├── scripts/               # Development automation scripts
├── data/                  # SQLite database files
└── .github/
    └── instructions/      # Technology-specific guidelines
```

## Technology-Specific Instructions

Before working with any technology, **read the corresponding instruction file**:

| Technology | Instruction File | Purpose |
|------------|-----------------|---------|
| Svelte components | `.github/instructions/svelte.instructions.md` | Svelte 5 runes syntax, state management |
| Astro pages | `.github/instructions/astro.instructions.md` | Routing, layouts, Svelte integration |
| Tailwind CSS | `.github/instructions/tailwindcss.instructions.md` | Dark theme patterns, utility classes |
| Flask endpoints | `.github/instructions/flask-endpoint.instructions.md` | Blueprint structure, REST conventions |
| Python tests | `.github/instructions/python-tests.instructions.md` | Test structure, coverage requirements |
| Playwright tests | `.github/instructions/playwright.instructions.md` | E2E test patterns, locators |
| UI components | `.github/instructions/ui.instructions.md` | Component architecture, accessibility |

## Critical Patterns

### Backend (Flask + SQLAlchemy)

**Models** (`server/models/`)
- Use SQLAlchemy ORM with type hints
- Include `to_dict()` method for JSON serialization
- Define relationships clearly

**Routes** (`server/routes/`)
- Create Flask blueprints per resource
- Use helper functions for base queries
- Pattern: `get_<resource>_base_query() -> Query`
- Register blueprints in `server/app.py`

**API Response Format**
```python
# Success (200)
return jsonify(data), 200

# Not Found (404)
return jsonify({"error": "Resource not found"}), 404

# Bad Request (400)
return jsonify({"error": "Invalid input"}), 400
```

### Frontend (Astro + Svelte 5)

**Svelte 5 Runes (REQUIRED)**
```svelte
<script>
  // Props with types
  let { title, count }: { title: string; count: number } = $props();
  
  // State
  let value = $state(0);
  
  // Derived values
  let doubled = $derived(value * 2);
  
  // Effects
  $effect(() => {
    console.log('Value changed:', value);
  });
</script>

<!-- Event attributes (not directives) -->
<button onclick={() => value++}>Click</button>
```

**Astro Integration**
```astro
---
import GameCard from '../components/GameCard.svelte';
const games = await fetchGames();
---

<Layout title="Games">
  <GameCard client:only="svelte" {games} />
</Layout>
```

**Tailwind Dark Theme**
```html
<!-- Standard card pattern -->
<div class="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700">
  <h2 class="text-slate-100 text-2xl font-bold">Title</h2>
  <p class="text-slate-300">Description</p>
</div>
```

## Testing Requirements

### Backend Tests

**Structure** (`server/tests/test_*.py`)
- Use `unittest.TestCase`
- Name: `Test<Feature>Routes` or `Test<Feature>Models`
- Include type hints and docstrings
- Define `TEST_DATA` as class constant

**Setup Pattern**
```python
def setUp(self) -> None:
    """Set up test client and database."""
    self.app = create_app({
        'TESTING': True,
        'SQLALCHEMY_DATABASE_URI': 'sqlite:///:memory:'
    })
    self.client = self.app.test_client()
    with self.app.app_context():
        db.create_all()
        self._seed_test_data()

def tearDown(self) -> None:
    """Clean up database."""
    with self.app.app_context():
        db.session.remove()
        db.drop_all()
        db.engine.dispose()
```

### Frontend Tests

**Existing E2E Tests** (`client/e2e-tests/*.spec.ts`)

The project already includes comprehensive Playwright E2E tests:
- `home.spec.ts` - Homepage display and content
- `games.spec.ts` - Game listing, navigation, and details pages
- `filtering.spec.ts` - Game filtering functionality
- `accessibility.spec.ts` - Accessibility compliance tests

**Before creating new E2E tests**, check existing coverage in `client/e2e-tests/`.

**Playwright Patterns** (`client/e2e-tests/*.spec.ts`)
- Use role-based locators: `getByRole`, `getByLabel`, `getByText`
- Use `test.step()` for grouping
- Auto-retrying assertions: `await expect(locator).toHaveText()`
- **NEVER** use `waitForTimeout` or hard-coded waits
- Verify UI structure with `toMatchAriaSnapshot`

**Testability Requirement**
- **ALL** interactive elements MUST have `data-testid` attributes
- Use descriptive IDs: `data-testid="game-card-{game.id}"`

## Development Workflow

### Before Starting Work
1. **Explore the project** - understand existing patterns
2. **Read relevant instruction files** - follow established conventions
3. **Create TODO list** for complex tasks

### Making Changes
1. **Make minimal changes** - surgical, precise edits only
2. **Follow existing patterns** - consistency is critical
3. **Use absolute paths** - for scripts and file operations
4. **Add type hints** - required for all Python code

### Before Committing
1. **Run backend tests**: `./scripts/run-server-tests.sh` (or `.\scripts\run-server-tests.ps1` on Windows)
2. **Run frontend tests** (if UI changed): `./scripts/run-e2e-tests.sh` (or `.\scripts\run-e2e-tests.ps1` on Windows)
3. **Update tests** - if adding/modifying API endpoints or UI
4. **Update README** - if adding new functionality
5. **Update instructions** - if patterns change

## Common Tasks

### Adding a New API Endpoint

1. Read `.github/instructions/flask-endpoint.instructions.md`
2. Create/update blueprint in `server/routes/`
3. Register blueprint in `server/app.py`
4. Add tests in `server/tests/test_*.py`
5. Run `./scripts/run-server-tests.sh` (or `.\scripts\run-server-tests.ps1` on Windows)

### Adding a New Page

1. Read `.github/instructions/astro.instructions.md`
2. Create `.astro` file in `client/src/pages/`
3. Use existing layout from `client/src/layouts/`
4. Add Svelte components with `client:only="svelte"`

### Creating a Svelte Component

1. Read `.github/instructions/svelte.instructions.md`
2. Use Svelte 5 runes (`$state`, `$props`, `$derived`)
3. Add `data-testid` to interactive elements
4. Apply Tailwind dark theme classes
5. Import and use in Astro pages

## Available Scripts

| Script (Bash) | Script (PowerShell) | Purpose |
|---------------|---------------------|---------|
| `./scripts/setup-env.sh` | `.\scripts\setup-env.ps1` | Install Python and Node dependencies |
| `./scripts/start-app.sh` | `.\scripts\start-app.ps1` | Start both backend and frontend servers |
| `./scripts/run-server-tests.sh` | `.\scripts\run-server-tests.ps1` | Run Python unit tests |
| `./scripts/run-e2e-tests.sh` | `.\scripts\run-e2e-tests.ps1` | Run Playwright E2E tests |

**Always use existing scripts** rather than performing operations manually. Use `.sh` scripts on Linux/macOS/Codespaces and `.ps1` scripts on Windows.

## Key Principles

### Agent Behavior
- ✅ Explore before generating code
- ✅ Read instruction files before working with technology
- ✅ Create TODO lists for multi-step tasks
- ✅ Use absolute paths for scripts
- ❌ Don't generate summary markdown files
- ❌ Don't ignore existing patterns

### Code Quality
- ✅ Type hints for all Python code
- ✅ Descriptive variable/function names
- ✅ Follow REST conventions for APIs
- ✅ Dark theme throughout UI
- ✅ Accessibility (semantic HTML, ARIA labels)
- ❌ Don't use legacy Svelte 4 syntax
- ❌ Don't hard-code waits in tests

### Testing
- ✅ Test all API endpoints
- ✅ Add `data-testid` to interactive elements
- ✅ Use web-first assertions in Playwright
- ✅ Run tests before committing
- ❌ Don't skip test coverage for new features

## Database Schema

Key models in `server/models/`:
- **Game**: Crowdfunding game projects
- **Creator**: Game creators/developers
- **Backer**: Users who fund games
- **Pledge**: Backing relationships between games and backers

Relationships use SQLAlchemy with outer joins for optional relations.

## API Conventions

- **Base URL**: `/api/<resource>`
- **GET** `/api/games` - List all games
- **GET** `/api/games/<id>` - Get single game
- **POST** `/api/games` - Create game
- **PUT/PATCH** `/api/games/<id>` - Update game
- **DELETE** `/api/games/<id>` - Delete game

All endpoints return JSON with appropriate status codes.

## Accessibility Requirements

- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<button>`)
- Provide ARIA labels where needed
- Ensure keyboard navigation works
- Visible focus states: `focus:ring-2 focus:ring-blue-500`
- Sufficient color contrast in dark theme

## GitHub Actions

When creating workflows (`.github/workflows/`):
- Set explicit permissions
- Follow security best practices
- Add comments documenting tasks
- Test thoroughly before committing

## Questions?

1. Check the relevant instruction file in `.github/instructions/`
2. Review existing code for patterns
3. Examine test files for usage examples
4. Refer to `copilot-instructions.md` for general guidelines

## Additional Resources

- [README.md](./README.md) - Project overview and setup
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [Workshop Content](./workshop-content/README.md) - Learning materials
