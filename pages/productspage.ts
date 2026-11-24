import { type Page } from '@playwright/test';

export class productsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(`/testing/cross-browser/shop?a=${process.env.ASSIGNMENT_TOKEN}`);
  }

  async addProduct(product: string) {await this.page.getByTestId(product).click();

  }

  async clickLink() {
    await this.page.getByText('Cart · 2').click();
  }
}