import { test,  type Page } from '@playwright/test';

export class productsPage {
  constructor(private page: Page) {}
  async open() {
    await this.page.goto(`https://thedappled.com/testing/page-objects/shop?a=CEWpv3t4vSpB{process.env.ASSIGNMENT_TOKEN}`);
  
}
  async addProduct() {
    await this.page.getByTestId('add-ball').click();
    await this.page.getByTestId('add-notebook').click();

  }

}

test('product page test', async ({ page }) => {
  const login = new productsPage(page);
  await login.open();
});