import { test, expect } from '@playwright/test';
test('page screenshot',async ({page})=> {
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests/screenshot/'+Date.now()+'HomePage.png'})
})
 test.only(' fULL page screenshot',async ({page})=> {
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'FullPage.png',fullPage:true})
    })

// test(' Element screenshot',async ({page})=> {

// })