# Accessibility Guidelines

This document outlines the accessibility standards and best practices for the Tailspin Toys project.

## Overview

We are committed to ensuring that Tailspin Toys is accessible to all users, including those who rely on assistive technologies such as screen readers, keyboard-only navigation, and other accessibility tools. Our site meets WCAG 2.1 Level AA standards.

## Standards Compliance

- **WCAG 2.1 Level AA**: All pages and components meet WCAG 2.1 Level AA requirements
- **Automated Testing**: Using @axe-core/playwright for continuous accessibility testing
- **Manual Testing**: Regular keyboard and screen reader testing

## Key Accessibility Features

### 1. Semantic HTML

- Use proper HTML5 semantic elements (`<header>`, `<main>`, `<nav>`, `<article>`, etc.)
- Ensure proper heading hierarchy (h1 → h2 → h3, no skipping levels)
- Use lists (`<ul>`, `<ol>`) for list content

### 2. Keyboard Navigation

All interactive elements must be keyboard accessible:

- **Tab**: Navigate forward through interactive elements
- **Shift+Tab**: Navigate backward through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dropdown menus

### 3. Focus Indicators

All interactive elements must have visible focus indicators:

```css
/* Example focus styles */
.interactive-element {
  @apply focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900;
}
```

### 4. ARIA Attributes

#### Buttons
- Use `aria-label` for buttons without visible text
- Use `aria-expanded` for buttons that toggle content visibility
- Use `aria-controls` to link buttons to the elements they control

```html
<button 
  aria-label="Toggle navigation menu" 
  aria-expanded="false" 
  aria-controls="menu"
>
  <svg aria-hidden="true">...</svg>
</button>
```

#### Navigation Menus
- Use `role="menu"` on menu containers
- Use `role="menuitem"` on menu links
- Use `aria-label` to provide context

```html
<nav role="menu" aria-label="Main navigation">
  <ul role="none">
    <li role="none">
      <a href="/" role="menuitem">Home</a>
    </li>
  </ul>
</nav>
```

#### Decorative Images
- Always add `aria-hidden="true"` to decorative SVGs and icons

```html
<svg aria-hidden="true">
  <!-- SVG content -->
</svg>
```

### 5. Color Contrast

All text must meet WCAG AA contrast requirements:

- **Normal text**: Minimum contrast ratio of 4.5:1
- **Large text** (18pt+ or 14pt+ bold): Minimum contrast ratio of 3:1
- **UI components**: Minimum contrast ratio of 3:1

Current color palette meets these requirements:
- `text-slate-100` on `bg-slate-900`: High contrast
- `text-blue-400` on `bg-slate-900`: AA compliant
- `text-slate-300` on `bg-slate-900`: AA compliant

### 6. Form Accessibility

- Use `<label>` elements for all form inputs
- Use `aria-describedby` for additional help text
- Use `aria-invalid` and `aria-errormessage` for validation errors
- Group related inputs with `<fieldset>` and `<legend>`

### 7. Interactive Components

#### Links
- Links must have descriptive text (avoid "click here")
- External links should indicate they open in a new context
- Add focus indicators to all links

```html
<a 
  href="/game/1" 
  class="focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  View game details
</a>
```

#### Buttons
- Use semantic `<button>` elements (not `<div>` with click handlers)
- Include visible text or aria-label
- Ensure proper keyboard activation (Enter/Space)

```html
<button 
  class="focus:outline-none focus:ring-2 focus:ring-blue-400"
  aria-label="Support this game"
>
  Support This Game
</button>
```

## Testing

### Automated Testing

We use @axe-core/playwright for automated accessibility testing. Tests run on every pull request and cover:

1. **WCAG 2.1 Level A & AA violations**
2. **Color contrast compliance**
3. **ARIA attribute correctness**
4. **Semantic HTML structure**

Run accessibility tests locally:

```bash
./scripts/run-e2e-tests.sh
```

Or run only accessibility tests:

```bash
cd client
npx playwright test accessibility.spec.ts
```

### Manual Testing

#### Keyboard Testing
1. Navigate the site using only keyboard (Tab, Shift+Tab, Enter, Escape)
2. Verify all interactive elements can be accessed and activated
3. Ensure focus indicators are clearly visible
4. Test that dropdown menus can be opened and closed with keyboard

#### Screen Reader Testing

Test with popular screen readers:
- **NVDA** (Windows, free)
- **JAWS** (Windows, commercial)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

Checklist:
- [ ] All images have appropriate alt text or are marked as decorative
- [ ] Form inputs have associated labels
- [ ] Dynamic content changes are announced
- [ ] Navigation landmarks are identified
- [ ] Page titles are descriptive

## Component Guidelines

### Header Component

The header must include:
- Proper semantic `<header>` element
- Accessible menu toggle button with `aria-label`, `aria-expanded`, and `aria-controls`
- Focus indicators on all interactive elements
- Keyboard navigation support (including Escape to close)

### Game Cards

Game cards must include:
- Semantic link structure
- Clear focus indicators
- Descriptive link text (avoid "click here")
- Proper heading hierarchy

### Forms

When adding forms:
- Use `<label>` elements linked to inputs
- Provide error messages with `aria-describedby`
- Use `aria-required` for required fields
- Group related fields with `<fieldset>`

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Reporting Issues

If you discover an accessibility issue:

1. Open a GitHub issue with the "accessibility" label
2. Include:
   - Page/component affected
   - Description of the issue
   - Steps to reproduce
   - Severity level (Critical/High/Medium/Low)
   - Suggested fix (if known)

## Continuous Improvement

Accessibility is an ongoing effort. We:

- Run automated accessibility tests on every PR
- Conduct quarterly manual accessibility audits
- Stay updated with WCAG guidelines
- Welcome feedback from users with disabilities
- Prioritize accessibility fixes based on impact

---

Last updated: 2024
