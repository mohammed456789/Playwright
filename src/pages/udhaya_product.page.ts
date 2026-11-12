import{Page,Locator} from '@playwright/test'

export class Product{
    readonly page: Page;
    readonly prod_search:Locator;
    readonly submit_search:Locator
    readonly product_A: Locator;
    readonly product_B:Locator;

    constructor(page: Page) {

        this.page = page;

        this.product_A = page.locator('//a[@data-product-id="1"]').first()
        this.product_B = page.locator('//a[@data-product-id="2"]').first()
        this.prod_search = page.getByRole('textbox', { name: 'Search Product' })
        this.submit_search = page.locator('#submit_search')

    }

    async add_to_cart()
    {
    }



}
