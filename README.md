# Tailspin Toys

The project is a website for a fictional game crowd-funding company named Tailspin Toys, with a [Flask](https://flask.palletsprojects.com/en/stable/) backend using [SQLAlchemy](https://www.sqlalchemy.org/) and [Astro](https://astro.build/) frontend using [Svelte](https://svelte.dev/) for dynamic pages.

## Launch the site

A script file has been created to launch the site. You can run it by:

```bash
./scripts/start-app.sh
```

Then navigate to the [website](http://localhost:4321) to see the site!

## Accessibility

Tailspin Toys is committed to being accessible to all users. We follow WCAG 2.1 Level AA standards and include automated accessibility testing in our CI/CD pipeline.

For detailed information about our accessibility standards and guidelines, see [docs/ACCESSIBILITY.md](./docs/ACCESSIBILITY.md).

## Testing

### Backend Tests

Run Python unit tests:

```bash
./scripts/run-server-tests.sh
```

### Frontend E2E Tests

Run Playwright end-to-end tests (includes accessibility tests):

```bash
./scripts/run-e2e-tests.sh
```

## License 

This project is licensed under the terms of the MIT open source license. Please refer to the [LICENSE](./LICENSE) for the full terms.

## Maintainers 

You can find the list of maintainers in [CODEOWNERS](./.github/CODEOWNERS).

## Support

This project is provided as-is, and may be updated over time. If you have questions, please open an issue.
