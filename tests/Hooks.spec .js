// const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();

  // Wait for login to complete (wait for logout button to appear)
  await page.waitForSelector('#logout2');
});

test.afterEach(async () => {
  await page.locator('#logout2').click();
});

test('Home Page Test', async () => {
  const products = await page.$$('.hrefch');
  expect(products.length).toBe(9);
});

test('Add Product to Cart Test', async () => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
  await page.locator('//a[normalize-space()="Add to cart"]').click();

  // Handle alert popup
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
});
