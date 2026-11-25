
import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // ADD THIS METHOD
  async open() {
    await this.page.goto(`https://thedappled.com/testing/cross-browser/shop?a=dS7X0AGsRvFc=${process.env.ASSIGNMENT_TOKEN}`);
  }

  async signIn(email: string, password: string) {
    await this.page.getByTestId('shop-email').fill(email);
    await this.page.getByTestId('shop-password').fill(password);

    await this.page.getByTestId('shop-signin').click();

    console.log('URL after login:', this.page.url());

    console.log(
      'Add ball button count:',
      await this.page.getByTestId('add-ball').count()
    );
  }
}
