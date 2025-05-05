const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait for the button to be visible (recommended)
  const btnCopy = page.locator('//button[normalize-space()="Copy Text"]');
  await btnCopy.waitFor({ state: 'visible' });

  // Perform a double click
  await btnCopy.dblclick();

  // Get the second field and check the value
  const field2 = page.locator('#field2');
  await expect(field2).toHaveValue('Hello World!');

  // Wait to observe the result (optional)
  await page.waitForTimeout(5000);
});
