const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demoblaze.com/index.html');

  // Log the page title
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Validate the page title and URL
  await expect(page).toHaveTitle('STORE');  // Ensure title is 'STORE'
  await expect(page).toHaveURL('https://demoblaze.com/index.html');  // Ensure the URL is correct

  // Close the page
  await page.close();
});
