import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('home page should not have accessibility violations', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('game details page should not have accessibility violations', async ({ page }) => {
    await page.goto('/game/1');
    await page.waitForSelector('[data-testid="game-details"]', { timeout: 10000 });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('about page should not have accessibility violations', async ({ page }) => {
    await page.goto('/about');
    await page.waitForTimeout(2000);
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('keyboard navigation - should be able to navigate header menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Focus on the menu button using Tab
    await page.keyboard.press('Tab');
    
    // Verify the menu button is focused
    const menuButton = page.locator('#menu-toggle');
    await expect(menuButton).toBeFocused();
    
    // Open menu with keyboard (Enter or Space)
    await page.keyboard.press('Enter');
    
    // Verify menu is visible
    const menu = page.locator('#menu');
    await expect(menu).not.toHaveClass(/hidden/);
    
    // Tab to first menu item
    await page.keyboard.press('Tab');
    const homeLink = page.locator('#menu a[href="/"]');
    await expect(homeLink).toBeFocused();
    
    // Tab to second menu item
    await page.keyboard.press('Tab');
    const aboutLink = page.locator('#menu a[href="/about"]');
    await expect(aboutLink).toBeFocused();
  });

  test('keyboard navigation - should be able to navigate to game cards', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Tab through header elements to get to game cards
    let tabCount = 0;
    let gameCardFocused = false;
    
    // Tab up to 20 times to find a game card
    while (tabCount < 20 && !gameCardFocused) {
      await page.keyboard.press('Tab');
      tabCount++;
      
      // Check if a game card is focused
      const focusedElement = page.locator(':focus');
      const testId = await focusedElement.getAttribute('data-testid').catch(() => null);
      
      if (testId === 'game-card') {
        gameCardFocused = true;
      }
    }
    
    expect(gameCardFocused).toBeTruthy();
  });

  test('keyboard navigation - should be able to activate game card with Enter', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Get first game card
    const firstGameCard = page.locator('[data-testid="game-card"]').first();
    const gameId = await firstGameCard.getAttribute('data-game-id');
    
    // Focus on the game card
    await firstGameCard.focus();
    
    // Activate with Enter
    await page.keyboard.press('Enter');
    
    // Verify navigation occurred
    await expect(page).toHaveURL(`/game/${gameId}`);
  });

  test('focus indicators - should have visible focus indicators on interactive elements', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Check menu button has focus indicator
    const menuButton = page.locator('#menu-toggle');
    await menuButton.focus();
    
    // Get computed styles to check for outline or box-shadow
    const hasVisibleFocus = await menuButton.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      const outline = styles.outline;
      const outlineWidth = styles.outlineWidth;
      const boxShadow = styles.boxShadow;
      
      // Check if there's a visible outline or box-shadow (focus ring)
      return (outline !== 'none' && outlineWidth !== '0px') || boxShadow !== 'none';
    });
    
    expect(hasVisibleFocus).toBeTruthy();
  });

  test('ARIA labels - header menu should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check menu button has aria-label or aria-labelledby
    const menuButton = page.locator('#menu-toggle');
    const hasAriaLabel = await menuButton.evaluate((el) => {
      return el.hasAttribute('aria-label') || 
             el.hasAttribute('aria-labelledby') ||
             el.hasAttribute('aria-describedby');
    });
    
    // SVG should have proper role or title
    const menuIcon = menuButton.locator('svg');
    const svgAccessible = await menuIcon.evaluate((el) => {
      return el.hasAttribute('role') || 
             el.hasAttribute('aria-label') ||
             el.querySelector('title') !== null;
    });
    
    expect(hasAriaLabel || svgAccessible).toBeTruthy();
  });

  test('color contrast - should meet WCAG AA standards', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Run axe with specific color contrast checks
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .include('body')
      .analyze();
    
    // Filter for color contrast violations
    const contrastViolations = accessibilityScanResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );
    
    expect(contrastViolations).toEqual([]);
  });

  test('semantic HTML - main landmarks should be present', async ({ page }) => {
    await page.goto('/');
    
    // Check for header landmark
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check for main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('decorative SVGs should have aria-hidden attribute', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Check menu button SVG has aria-hidden
    const menuButtonSvg = page.locator('#menu-toggle svg');
    await expect(menuButtonSvg).toHaveAttribute('aria-hidden', 'true');
    
    // Check game card arrow SVGs have aria-hidden (scope to first card to avoid strict mode violation)
    const firstGameCard = page.locator('[data-testid="game-card"]').first();
    const gameCardSvgs = firstGameCard.locator('svg');
    const count = await gameCardSvgs.count();
    
    // Verify at least one SVG exists and all have aria-hidden
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(gameCardSvgs.nth(i)).toHaveAttribute('aria-hidden', 'true');
    }
  });
});
