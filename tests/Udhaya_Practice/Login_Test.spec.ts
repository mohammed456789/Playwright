import {test,expect} from '@playwright/test'
import { Page } from '@playwright/test' 
import { Signup } from '../../src/pages/udhaya_signup.page';
import { Login_Signup } from '../../src/pages/udhaya_login.page';
import udhaya_config from '../testdata/udhaya_config.json' with { type: 'json' };

test.describe('Login_Automation_Check_Flow',() => {

    
    test('Register a new user', async ({ page }) => {
    
        const signup = new Signup(page);
        const logged_in = new Login_Signup(page)
    
        const data = {
            pass: 'Test@123',
            days: '10',
            months: '5',
            years: '1997',
            first_name: 'Udhaya',
            last_name: 'Kumar',
            company: 'ABC Technologies',
            address: 'Thiruvanmiyur',
            address_2: 'Chennai',
            state: 'Tamil Nadu',
            city: 'Chennai',
            zipcode: '600041',
            mobile: '9876543210'
        }
        const user_name:string = "Udhaya_Test"
        
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        await logged_in.sign_up(user_name,`udhaya.test123.${Date.now()}@example.com`)
        await signup.sign_up_newuser(data);
        await expect(page.getByText('Account Created! Congratulations! Your new account has been successfully')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page.locator('b')).toContainText(user_name)
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(page.getByText('Account Deleted! Your account')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
    });

    test('Successfull Login', async({ page })=>{
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        const logged_in = new Login_Signup(page)
        await logged_in.log_in(udhaya_config.login_data.username,udhaya_config.login_data.password)
        await expect(page.locator('b')).toContainText('test')
    })

    test.only('Login check with invalid data', async({ page})=>{
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        const logged_in = new Login_Signup(page)
        await logged_in.log_in(udhaya_config.failure_login_data.username,udhaya_config.failure_login_data.password)
        await expect(page.getByText('Your email or password is')).toBeVisible();
    })

    test('Signup with existing account', async({ page })=> {
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        const logged_in = new Login_Signup(page)
        await logged_in.sign_up(udhaya_config.login_data.username,udhaya_config.login_data.password)
        await expect(page.getByText('Email Address already exist!')).toBeVisible();
    })
   
})

