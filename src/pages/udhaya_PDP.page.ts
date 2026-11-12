
import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {

    readonly page: Page;
    readonly productName: Locator;
    readonly category: Locator;
    readonly price: Locator;
    readonly availability: Locator;
    readonly condition: Locator;
    readonly brand: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productName = page.getByRole('heading', {name: 'Blue Top'});
        this.category = page.getByText('Category: Women > Tops');
        this.price = page.getByText('Rs.');
        this.availability = page.getByText('Availability: In Stock');
        this.condition = page.getByText('Condition: New');
        this.brand = page.getByText('Brand: Polo');

    }

}
