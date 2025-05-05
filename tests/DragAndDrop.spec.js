// 
const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

  const rome = page.locator('#box6');
  const italy = page.locator('#box106');

  // Use dragTo() for simpler and more reliable drag-and-drop
  await rome.dragTo(italy);

  // Optional: wait to visually confirm
  await page.waitForTimeout(5000);
});
