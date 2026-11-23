import { test, expect, type Page } from '@playwright/test';

export class cartPage {
  constructor(private page: Page) {}
  async open() {
    await this.page.goto(`https://thedappled.com/testing/page-objects/shop?a=CEWpv3t4vSpB${process.env.ASSIGNMENT_TOKEN}`);
  
}
  async addProduct() {
    await this.page.getByTestId('place-order').click();

  }

}

test('cart page test', async ({ page }) => {
  const login = new cartPage(page);
  await login.open();
});
