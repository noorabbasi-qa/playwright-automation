// import { test, expect } from '@playwright/test';

// test('LocateMultipleElements', async ({ page }) => {
//   await page.goto('https://www.demoblaze.com/index.html');
// //   const links = await page.$$('a');
  
// //   for (const link of links) {
// //     const linkText = await link.textContent();
// //     console.log(linkText);
// //   }
// const products=await page.$$("//div[@id='tbody']//div//h4/a")
// for(const product of products)
// {
//    const productName= await product.textContent()
//    console.log(productName)
// }
// });

import { test, expect } from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

 // page.waitForSelector('`xpath=//div[@id='tbody']//div//h4/a`');
  const products = await page.$$(`xpath=//div[@id='tbody']//div//h4/a`);
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});


