const {test,expect}=require('@playwright/test')
test ('Mouse hover',async ({page})=>{
await page.goto('https://demo.opencart.com/')
   const Desktops =await page.locator('//a[normalize-space()="Desktops"]')
   const macbook =await page.locator('//a[normalize-space()="Mac(1)"]')
   await Desktops.hover()
   await macbook.hover()
   await page.waitForTimeout(5000)

})
