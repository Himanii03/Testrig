
import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  async open() {
  //   await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc=${process.env.ASSIGNMENT_TOKEN}`);
  // }

  await this.page.goto(`${process.env.BASE_URL}/testing/cross-browser/shop?a=${process.env.ASSIGNMENT_TOKEN}`);}



  async signIn(email: string, password: string) {
    await this.page.getByTestId('shop-email').fill(email);
    // await this.page.getByTestId('shop-email').fill('xb-ds7x0ags@thedappled.test');
    await this.page.getByTestId('shop-password').fill(password);
    // await this.page.getByTestId('shop-password').fill('XbDKII3rBT!4');
    await this.page.getByTestId('shop-signin').click();
  }
}