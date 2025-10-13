import { test, expect } from '@playwright/test';

test.describe('Game Filtering', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('/');
    
    // Wait for the games to load
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
  });

  test('should display all games without filters', async ({ page }) => {
    // Check that games are displayed
    const gameCards = page.locator('[data-testid="game-card"]');
    const count = await gameCards.count();
    expect(count).toBeGreaterThan(0);
    
    // Check that filter components are visible
    await expect(page.locator('#publisher-filter')).toBeVisible();
    await expect(page.locator('#category-filter')).toBeVisible();
  });

  test('should filter games by publisher', async ({ page }) => {
    // Wait for the publisher dropdown to be populated
    await page.waitForFunction(() => {
      const select = document.querySelector('#publisher-filter') as HTMLSelectElement;
      return select && select.options.length > 1;
    }, { timeout: 10000 });
    
    // Get the total number of games before filtering
    const allGames = page.locator('[data-testid="game-card"]');
    const totalGameCount = await allGames.count();
    
    // Get the available publisher options
    const publisherOptions = await page.locator('#publisher-filter option').count();
    
    if (publisherOptions > 1) {
      // Select the first publisher option (index 1, since 0 is "All Publishers")
      await page.selectOption('#publisher-filter', { index: 1 });
      
      // Wait for the games to update
      await page.waitForTimeout(1000);
      
      // Get filtered games
      const filteredGames = page.locator('[data-testid="game-card"]');
      const filteredCount = await filteredGames.count();
      
      // Verify that filtering occurred (count should be less than or equal to original)
      expect(filteredCount).toBeLessThanOrEqual(totalGameCount);
      
      // Verify that filter indicator appears
      await expect(page.locator('text=/Publisher:/').first()).toBeVisible();
    }
  });

  test('should filter games by category', async ({ page }) => {
    // Wait for the category dropdown to be populated
    await page.waitForFunction(() => {
      const select = document.querySelector('#category-filter') as HTMLSelectElement;
      return select && select.options.length > 1;
    }, { timeout: 10000 });
    
    // Get the total number of games before filtering
    const allGames = page.locator('[data-testid="game-card"]');
    const totalGameCount = await allGames.count();
    
    // Get the available category options
    const categoryOptions = await page.locator('#category-filter option').count();
    
    if (categoryOptions > 1) {
      // Select the first category option (index 1, since 0 is "All Categories")
      await page.selectOption('#category-filter', { index: 1 });
      
      // Wait for the games to update
      await page.waitForTimeout(1000);
      
      // Get filtered games
      const filteredGames = page.locator('[data-testid="game-card"]');
      const filteredCount = await filteredGames.count();
      
      // Verify that filtering occurred (count should be less than or equal to original)
      expect(filteredCount).toBeLessThanOrEqual(totalGameCount);
      
      // Verify that filter indicator appears
      await expect(page.locator('text=/Category:/').first()).toBeVisible();
    }
  });

  test('should filter games by both publisher and category', async ({ page }) => {
    // Wait for both dropdowns to be populated
    await page.waitForFunction(() => {
      const publisherSelect = document.querySelector('#publisher-filter') as HTMLSelectElement;
      const categorySelect = document.querySelector('#category-filter') as HTMLSelectElement;
      return publisherSelect && categorySelect && 
             publisherSelect.options.length > 1 && 
             categorySelect.options.length > 1;
    }, { timeout: 10000 });
    
    // Select both publisher and category
    await page.selectOption('#publisher-filter', { index: 1 });
    await page.selectOption('#category-filter', { index: 1 });
    
    // Wait for the games to update
    await page.waitForTimeout(1000);
    
    // Verify that both filter indicators appear
    await expect(page.locator('text=/Publisher:/').first()).toBeVisible();
    await expect(page.locator('text=/Category:/').first()).toBeVisible();
  });

  test('should clear filters when clear button is clicked', async ({ page }) => {
    // Wait for the publisher dropdown to be populated
    await page.waitForFunction(() => {
      const select = document.querySelector('#publisher-filter') as HTMLSelectElement;
      return select && select.options.length > 1;
    }, { timeout: 10000 });
    
    // Apply a filter
    await page.selectOption('#publisher-filter', { index: 1 });
    await page.waitForTimeout(500);
    
    // Verify clear button appears
    await expect(page.locator('text="Clear Filters"')).toBeVisible();
    
    // Click clear button
    await page.click('text="Clear Filters"');
    await page.waitForTimeout(500);
    
    // Verify filters are reset
    await expect(page.locator('#publisher-filter')).toHaveValue('');
    await expect(page.locator('#category-filter')).toHaveValue('');
    
    // Verify filter indicators are gone
    await expect(page.locator('text=/Publisher:/').first()).not.toBeVisible();
    await expect(page.locator('text=/Category:/').first()).not.toBeVisible();
  });

  test('should show appropriate message when no games match filters', async ({ page }) => {
    // Wait for both dropdowns to be populated
    await page.waitForFunction(() => {
      const publisherSelect = document.querySelector('#publisher-filter') as HTMLSelectElement;
      const categorySelect = document.querySelector('#category-filter') as HTMLSelectElement;
      return publisherSelect && categorySelect && 
             publisherSelect.options.length > 1 && 
             categorySelect.options.length > 1;
    }, { timeout: 10000 });
    
    // Try different combinations until we find one that returns no results
    const publisherOptions = await page.locator('#publisher-filter option').count();
    const categoryOptions = await page.locator('#category-filter option').count();
    
    // Try the last publisher with the first category (less likely to have matches)
    if (publisherOptions > 2 && categoryOptions > 2) {
      await page.selectOption('#publisher-filter', { index: publisherOptions - 1 });
      await page.selectOption('#category-filter', { index: 1 });
      await page.waitForTimeout(1000);
      
      // Check if we got no results
      const gameCards = page.locator('[data-testid="game-card"]');
      const gameCount = await gameCards.count();
      
      if (gameCount === 0) {
        await expect(page.locator('text="No games found matching the selected filters."')).toBeVisible();
      }
    }
  });

  test('should maintain filter state in URL parameters', async ({ page }) => {
    // Wait for the publisher dropdown to be populated
    await page.waitForFunction(() => {
      const select = document.querySelector('#publisher-filter') as HTMLSelectElement;
      return select && select.options.length > 1;
    }, { timeout: 10000 });
    
    // Apply a filter
    await page.selectOption('#publisher-filter', { index: 1 });
    await page.waitForTimeout(1000);
    
    // Check that URL contains filter parameters
    const url = page.url();
    expect(url).toContain('publisher_id=');
    
    // Reload the page
    await page.reload();
    await page.waitForSelector('[data-testid="games-grid"]', { timeout: 10000 });
    
    // Verify that filter is still applied after reload
    const publisherFilter = page.locator('#publisher-filter');
    const selectedValue = await publisherFilter.inputValue();
    expect(selectedValue).not.toBe('');
    
    // Verify filter indicator is still visible
    await expect(page.locator('text=/Publisher:/').first()).toBeVisible();
  });

  test('should work on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Wait for filters to load
    await page.waitForFunction(() => {
      const select = document.querySelector('#publisher-filter') as HTMLSelectElement;
      return select && select.options.length > 1;
    }, { timeout: 10000 });
    
    // Verify filters are still functional on mobile
    await expect(page.locator('#publisher-filter')).toBeVisible();
    await expect(page.locator('#category-filter')).toBeVisible();
    
    // Test filtering on mobile
    await page.selectOption('#publisher-filter', { index: 1 });
    await page.waitForTimeout(1000);
    
    // Verify games update and filter indicator appears
    await expect(page.locator('text=/Publisher:/').first()).toBeVisible();
    
    // Verify games grid is responsive
    const gamesGrid = page.locator('[data-testid="games-grid"]');
    await expect(gamesGrid).toBeVisible();
  });
});
