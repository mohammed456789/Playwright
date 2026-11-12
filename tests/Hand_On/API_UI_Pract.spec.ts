import {test,expect} from '@playwright/test'
import config from '../testdata/config.json' with { type: 'json' };

test.describe("API + UI Combination", ()=>{
    test("UI Test practice", async({page})=>{

        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Products' }).click();
        await page.locator('.product-overlay').first().click();
        await page.getByText('Add to cart').nth(1).click();
        await expect(page.getByText('Your product has been added')).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay').click();
        await page.getByText('Add to cart').nth(2).click();
        await expect(page.getByText('Your product has been added')).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.getByRole('link', { name: ' Cart' }).click();
    })
    test("API Test validation", async({request})=>{

        const getres = await request.get("https://automationexercise.com/view_cart")

    })
})