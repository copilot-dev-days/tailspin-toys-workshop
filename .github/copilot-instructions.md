# Tailspin Toys Crowd Funding Development Guidelines

This is a crowdfunding platform for games with a developer theme. The application uses a Flask backend API with SQLAlchemy ORM for database interactions, and an Astro/Svelte frontend with Tailwind CSS for styling. Please follow these guidelines when contributing:

## Agent notes

- Explore the project before beginning code generation
- Create todo lists for long operations
  - Before each step in a todo list, reread the instructions to ensure you always have the right directions
- Always use instructions files when available, reviewing before generating code
- Do not generate summary markdown files upon completion of a task
- Always use absolute paths when running scripts and BASH commands
- **Do NOT commit or push changes unless explicitly instructed to do so by the user**

## Code standards

### Required Before Each Commit

#### Testing guidelines

- Run Python tests to ensure backend functionality, and Playwright tests to ensure e2e and frontend functionality
- Review the existing tests to ensure we're not duplicating efforts
- Test code should be of the same quality as the rest of the project, and follow DRY principles
- For frontend changes, run builds in the client directory to verify build success and the end-to-end tests, to ensure everything works correctly
- When making API changes, update and run the corresponding tests to ensure everything works correctly

#### Project guidelines

- When updating models, ensure database migrations are included if needed
- When adding new functionality, make sure you update the README
- Make sure all guidance in the Copilot Instructions file is updated with any relevant changes, including to project structure and scripts, and programming guidance

### Code formatting requirements

- When writing Python, you must use type hints for return values and function parameters.

### Python and Flask Patterns

- Use SQLAlchemy models for database interactions
- Use Flask blueprints for organizing routes
- Follow RESTful API design principles

### Svelte and Astro Patterns

- **Svelte 5 Components**: Use runes-based reactivity (`$state`, `$derived`, `$effect`, `$props`) - see `svelte.instructions.md`
- **Astro Pages**: Use Astro for routing, layouts, and static content - see `astro.instructions.md`
- Create reusable Svelte components when functionality is used in multiple places
- Use `client:only="svelte"` directive when embedding Svelte in Astro pages

### Styling

- Use Tailwind CSS utility classes exclusively - see `tailwindcss.instructions.md`
- Dark theme colors: slate palette (`bg-slate-800`, `text-slate-100`, etc.)
- Rounded corners and modern UI patterns
- Follow modern UI/UX principles with clean, accessible interfaces

### GitHub Actions workflows

- Follow good security practices
- Make sure to explicitly set the workflow permissions
- Add comments to document what tasks are being performed

## Scripts

- Several scripts exist in the `scripts` folder
- Always use available scripts to perform tasks rather than performing operations manually
- Existing scripts (use `.sh` on Linux/macOS/Codespaces, `.ps1` on Windows):
    - `scripts/setup-env`: Performs installation of all Python and Node dependencies
    - `scripts/run-server-tests`: Calls setup-env, then runs all Python tests
    - `scripts/run-e2e-tests`: Runs Playwright E2E tests for frontend
    - `scripts/start-app`: Calls setup-env, then starts both backend and frontend servers

## Repository Structure

- `server/`: Flask backend code
  - `models/`: SQLAlchemy ORM models
  - `routes/`: API endpoints organized by resource
  - `tests/`: Unit tests for the API
  - `utils/`: Utility functions and helpers
- `client/`: Astro/Svelte frontend code
  - `src/components/`: Reusable Svelte components
  - `src/layouts/`: Astro layout templates
  - `src/pages/`: Astro page routes
  - `src/styles/`: CSS and Tailwind configuration
  - `e2e-tests/`: Playwright E2E tests (home, games, filtering, accessibility)
- `scripts/`: Development and deployment scripts
- `data/`: Database files
- `README.md`: Project documentation
