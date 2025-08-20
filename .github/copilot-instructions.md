# Tailspin Toys Crowd Funding Development Guidelines

This is a crowdfunding platform for games with a developer theme. The application uses a Flask backend API with SQLAlchemy ORM for database interactions, and an Astro/Svelte frontend with Tailwind CSS for styling. Follow these guidelines when contributing:

## Project standards

### Scripts and tasks

- Always use scripts to perform tasks; do not run tasks manually if a script exists

### Required Before Each Commit

- Run Python tests to ensure backend functionality
- For frontend changes, run the end to end tests created in Playwright
- When making API changes, update and run the corresponding unit tests to ensure everything works correctly
- When updating models, ensure database migrations are included if needed
- When adding new functionality, update the README
- Updated guidance in the Copilot Instructions file is with any relevant changes, including to project structure and scripts, and programming guidance

### Python and Flask Patterns

- Use SQLAlchemy models for database interactions
- Use Flask blueprints for organizing routes
- Follow RESTful API design principles
- Tests are written using `unittest`
- Use type hints for return values and function parameters

### Svelte and Astro Patterns

- Use Svelte for interactive components, following Svelte's reactive programming model
- Create reusable components when functionality is used in multiple places
- Use Astro for page routing and static content
- End to end tests are written in Playwright to confirm functionality

### Styling

- Use Tailwind CSS classes for styling
- Maintain dark mode theme throughout the application
- Use rounded corners for UI elements
- Follow modern UI/UX principles with clean, accessible interfaces

### GitHub Actions workflows

- Follow good security practices
- Make sure to explicitly set the workflow permissions
- Add comments to document what tasks are being performed

## Scripts

- Always use existing scripts to perform tasks rather than performing them manually
- Several scripts exist in the `scripts` folder
- Existing scripts:
    - `scripts/setup-env.sh`: Performs installation of all Python and Node dependencies
    - `scripts/run-server-tests.sh`: Calls setup-env, then runs all Python tests
    - `scripts/start-app.sh`: Calls setup-env, then starts both backend and frontend servers
    - `scripts/run-e2e-tests.sh`: Calls setup-env, starts both servers, then runs end-to-end tests using Playwright

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
- `scripts/`: Development and deployment scripts
- `data/`: Database files
- `docs/`: Project documentation
- `README.md`: Project documentation
