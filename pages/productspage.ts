import { type Page } from '@playwright/test';

export class productsPage {
  constructor(private page: Page) {}

  async open() {
        await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc=${process.env.ASSIGNMENT_TOKEN}`);

  }

async addProduct(product: string): Promise<void> {
    await this.page.getByTestId(product).click();
}
}



  async clickLink() {
    await this.page.getByText('Cart · 2').click();
  }
}
