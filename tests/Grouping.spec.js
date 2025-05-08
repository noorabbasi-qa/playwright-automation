
import { test, expect } from '@playwright/test';
test.beforeAll(async()=>{
console.log('This is my beforeAll Hook' )
})
test.afterAll(async()=>{
    console.log('This is my afterAll Hook' )
    })
    test.beforeEach(async()=>{
        console.log('This is my beforeEach Hook' )
        })

        test.afterEach(async()=>{
            console.log('This is my afterEach Hook' )
            })

test.describe.skip('Group1',()=>{
    test('Test1', async ({ page }) => {
        console.log('This is my test 1')
    })
    test('Test2', async ({ page }) => {
        console.log('This is my test 2')
    })
})
    
test.describe('Group2',()=>{

test('Test3', async ({ page }) => {
    console.log('This is my test 3')
})
test('Test4', async ({ page }) => {
    console.log('This is my test 4')
})}
)