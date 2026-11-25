

// import type { Page } from '@playwright/test';


// export class productsPage {
//   constructor(private page: Page) {}
//   async open() {
//     await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc${process.env.ASSIGNMENT_TOKEN}`);
//   }
//   async addproduct(testId: string) {
//     // await this.page.getByTestId(p0).click();
//     await this.page.getByTestId('add-ball').click();
//     // await this.page.getByTestId('add-notebook').click();
//     await this.page.getByTestId('cart-link').click();
    
//   }
  
//   }

import type { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(
      `https://thedappled.com/testing/cross-browser/shop?a=${process.env.ASSIGNMENT_TOKEN}`
    );
  }

  async addProduct(testId: string) {
    await this.page.getByTestId(testId).click();
  }

  async openCart() {
    await this.page.getByTestId('cart-link').click();
  }
}