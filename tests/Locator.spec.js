//const{test,expect}=require('@playwright/test')
// import{test,expect} from '@playwright/test'
// test('Locator',async({page})=>{
//    await page.goto("https://www.demoblaze.com/index.html")
//    //click on login button----property
//    await page.click('id=login2')
//    await page.fill('#loginusername','pavanol')
//    await page.fill('#id="loginpassword','test@123')
// })


import { test, expect } from '@playwright/test';

test('Login and check logout button', async ({ page }) => {
  // Navigate to the website
  await page.goto("https://www.demoblaze.com/index.html");

  // Click on the login button
  await page.click('#login2');

  // Wait for login modal to appear
  await page.waitForSelector('#logInModal');

  // Fill in the login form
  await page.fill('#loginusername', 'pavanol');
  await page.fill('#loginpassword', 'test@123');

  // Click the login submit button
  await page.click('button:has-text("Log in")');

  // Wait for the logout button to appear (indicating successful login)
  await page.waitForSelector('#logout2', { timeout: 5000 });

  // Assert that the logout button is visible
  const isLogoutVisible = await page.isVisible('#logout2');
  expect(isLogoutVisible).toBeTruthy();
});
