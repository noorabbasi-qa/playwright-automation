/*page.get_by_role() to locate by explicit and implicit accessibility attributes.
page.get_by_text() to locate by text content.
page.get_by_label() to locate a form control by associated label's text.
page.get_by_placeholder() to locate an input by placeholder.
page.get_by_alt_text() to locate an element, usually image, by its text alternative.
page.get_by_title() to locate an element by its title attribute.
page.get_by_test_id() to locate an element based on its data-testid attribute (other attributes can be configured).


// */
// import{test,expect} from '@playwright/test';
// test ("Built-inLocators"),async(page)=>{
// await page.goto('https://www.orangehrm.com/')
// const logo=await page.getByAltText('company-branding')
// await expect(logo).toBeVisible();
// }


import { test, expect } from '@playwright/test';

test('Built-inLocators', async ({ page }) => {
  await page.goto('https://www.orangehrm.com/');
  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();
});
