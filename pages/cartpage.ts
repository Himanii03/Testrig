import { type Page } from '@playwright/test';

export class cartPage {
  constructor(private page: Page) {}
  // async open() {
  //   await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc{process.env.ASSIGNMENT_TOKEN}`);
  // }

  async openplaceorder() {
    await this.page.getByText('Cart · 2').click();
  } 

  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place order' }).click();
}
//   async placeorder() {
//   await this.page.getByTestId('place-order').click();
//    }
// //    const placeOrder = this.page.getByTestId('place-order');
//    await placeOrder.click();  
//  }

// async placeorder() {
//   const button = this.page.getByTestId('place-order');

//   await button.waitFor({ state: 'visible' });

//   await button.scrollIntoViewIfNeeded();

//   await button.click();
// }

  get confirmation() {
    return this.page.getByTestId('order-confirmation');
  }
}