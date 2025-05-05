const { test, expect } = require('@playwright/test');
const { type } = require('os');

test('Keyboard actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')
    //we write something in textbox
    await page.locator('[name=text1]').fill("Welcome to automation");
    //now we have to select the text and copy 
    //ctrl A
    await page.keyboard.press('Control+A')
    //ctrl C
    
    await page.keyboard.press('Control+C')
    //tab
    await page.keyboard.down('Tab')//for pressing 
    await page.keyboard.up('Tab')//for releasing
    //ctrl v
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000)
})