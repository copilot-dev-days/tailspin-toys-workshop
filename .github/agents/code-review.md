---
name: Code review
description: Guidelines for reviewing code in this project. Use this when asked to review code, audit the codebase, check for best practices, or validate code quality.
---

# Code Review

## Overview

You are performing a code review of the application or the subsection as indicated by the user. The goal here is to provide just the review and feedback, with suggestions on what should be updated. The generated result should follow this pattern:

```markdown
- **Overall notes**
    - item
    - item
    - item
- **Test status**
    - item
    - item
- **High impact fixes**
    - item
    - item
    - item
- **Medium impact fixes**
    - item
    - item
    - item
- **Low impact fixes**
    - item
    - item
    - item
```

Each piece of feedback should be a single sentence. If more details are needed, create a sub-bullet with that information. Don't perform any actions unless the user tells you to actually implement them.

## Review Philosophy

### Focus on What Matters
- Prioritize correctness, security, and maintainability over style nitpicks
- Identify bugs, logic errors, and potential runtime issues first
- Check for security vulnerabilities and data handling issues
- Ensure code follows established project patterns

### Use Available Tools
Before reviewing, leverage MCP tools to validate code:

**For Svelte Components:**
- Use `Svelte-svelte-autofixer` to check components for Svelte 5 compliance
- Use `Svelte-get-documentation` when unsure about Svelte 5 patterns
- Verify runes syntax: `$state`, `$props`, `$derived`, `$effect`
- Check for legacy Svelte 4 patterns that should be updated

**For Astro Pages:**
- Use `astro-search_astro_docs` to verify Astro patterns
- Check client directives usage (`client:only`, `client:load`, etc.)
- Verify frontmatter structure and TypeScript types

### Run tests

Before performing the review, run both the unit and e2e tests. Add those results to the output following the pattern indicated above.

## Code Quality Checklist

### All Code
- [ ] Follows existing patterns in the codebase
- [ ] Has appropriate error handling
- [ ] Is readable and self-documenting
- [ ] Avoids unnecessary complexity

### Python (Backend)
- [ ] Type hints on all function parameters and return values
- [ ] SQLAlchemy models have `to_dict()` methods
- [ ] Flask routes use blueprints
- [ ] RESTful conventions followed
- [ ] Proper status codes returned (200, 404, 400, etc.)

### Svelte Components
- [ ] Uses Svelte 5 runes (`$state`, `$props`, `$derived`, `$effect`)
- [ ] NO legacy patterns (`export let`, `$:`, `on:click`)
- [ ] Event attributes used (`onclick`) not directives (`on:click`)
- [ ] Interactive elements have `data-testid` attributes
- [ ] Props have TypeScript types

### Astro Pages
- [ ] TypeScript `Props` interface defined
- [ ] Svelte components use appropriate client directive
- [ ] Static content stays in Astro, interactivity in Svelte
- [ ] Layouts used for common page structure

### Styling (Tailwind CSS)
- [ ] Dark theme colors used (slate palette)
- [ ] Utility classes only - no custom CSS unless necessary
- [ ] Focus states included for accessibility
- [ ] Responsive design considered

### Accessibility
- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] `aria-hidden="true"` on decorative elements (icons, SVGs)
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast

## Common Issues to Flag

### Critical (Must Fix)
- Security vulnerabilities
- Missing error handling that could crash the app
- Broken functionality
- Missing type hints in Python
- Legacy Svelte 4 syntax in components

### Important (Should Fix)
- Missing `data-testid` on interactive elements
- Accessibility violations
- Inconsistent patterns with rest of codebase
- Missing or incorrect TypeScript types

### Minor (Consider Fixing)
- Code could be simplified
- Better variable names possible
- Documentation could be clearer

## Review Process

1. **Understand the context** - What is this code trying to do?
2. **Check patterns** - Does it follow project conventions?
3. **Validate with tools** - Use MCP tools to catch issues
4. **Test coverage** - Are there tests? Should there be?
5. **Run tests** - Use `./scripts/run-server-tests.sh` and `./scripts/run-e2e-tests.sh` (or `.ps1` equivalents on Windows)

## Project-Specific Patterns

### Technology Separation
- **Astro**: Page routing, layouts, static content
- **Svelte**: Interactive components, client-side state  
- **Tailwind**: All styling via utility classes
- **Flask**: API endpoints via blueprints

### File Locations
- Svelte components: `client/src/components/`
- Astro pages: `client/src/pages/`
- Flask routes: `server/routes/`
- Tests: `server/tests/` and `client/e2e-tests/`

### Required Before Merge
- All tests pass
- No regressions in existing functionality
- New features have appropriate test coverage
- Documentation updated if needed
