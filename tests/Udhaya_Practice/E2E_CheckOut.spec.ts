import {test,expect} from '@playwright/test'
import { Page } from '@playwright/test' 
import { Signup } from '../../src/pages/udhaya_signup.page';
import { Login_Signup } from '../../src/pages/udhaya_login.page';
import udhaya_config from '../testdata/udhaya_config.json' with { type: 'json' };
import { ProductDetailsPage } from '../../src/pages/udhaya_PDP.page';

test.describe('E2E_Automation_Checkout_Flow',() => {

    test.beforeEach(async({page})=>{
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        const logged_in = new Login_Signup(page)
        await logged_in.log_in(udhaya_config.login_data.username,udhaya_config.login_data.password)
        await expect(page.locator('b')).toContainText('test')
    })

    test("PDP_Check",async({page})=>{
        await page.getByRole('link', { name: ' Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        await page.getByRole('link', { name: ' View Product' }).first().click();
        const pdp = new ProductDetailsPage(page)
            await expect(pdp.productName).toBeVisible();
            await expect(pdp.category).toBeVisible();
            await expect(pdp.price).toBeVisible();
            await expect(pdp.availability).toBeVisible();
            await expect(pdp.condition).toBeVisible();
            await expect(pdp.brand).toBeVisible();
        
        })
    })
