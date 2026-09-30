import{Page,Locator,expect} from '@playwright/test'

export class Login{
    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton: Locator;
    readonly pageName:Locator;

    constructor(page: Page) {
        this.page = page;
        this.username=page.getByRole('textbox',{name:'Username'})
        this.password=page.getByRole('textbox',{name:'Password'})
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.pageName = page.locator('//div[@class="app_logo"]');
    }
async login(user:string,pass:string){
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginbutton.click();
    await this.pageName.innerText();

}
async validatePagetitle(expected:string){
    await expect(this.page).toHaveTitle(expected);
    await expect(this.pageName).toHaveText('Swag Labs');

}
}