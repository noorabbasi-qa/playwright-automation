// const {test,expect}=require('@playwright/test')
// test('Mouse Right Click'),async({page})=>{
// await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
// const button=await page.locator('//span[normalize-space()="right click me"]')
// await button .click({button: 'right'});
// await page.waitForTimeout(5000)
//     }
const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  const button = await page.locator('//span[normalize-space()="right click me"]');
  await button.click({ button: 'right' });
});
