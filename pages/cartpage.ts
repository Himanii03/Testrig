// import { Locator, type Page } from '@playwright/test';

// export class cartPage {
//   constructor(private page: Page) {}
//   // private placeorder_button :Locator
//   async open() {
//     await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc{process.env.ASSIGNMENT_TOKEN}`);
//   }

//   async opencart() {
//     await this.page.getByText('Cart · 2').click();
//   } 
//   // // async placeorder() {
//   // // await this.page.getByTestId('place-order').click();
//   // //  }

//   async order() {
//     await this.page.getByRole("button",{name:'place-order'}).click();
//     //await this.page.getByRole('button', { name: /place order/i }).click();
//   }
//   // async placeorder() {
//   //   const button = this.page.getByRole('button', {
//   //     name: /place order/i
//   //   });
  
   
//   get confirmation() {
//     return this.page.getByTestId('order-confirmation');
//   }
// }

import { type Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(
      `https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc${process.env.ASSIGNMENT_TOKEN}`
    );
  }

  async opencart() {
    await this.page.getByText('Cart · 2').click();
  }

  async order() {
    await this.page.getByRole('button', { name: /place order/i }).click();
  }

  get confirmation() {
    return this.page.getByTestId('order-confirmation');
  }
}