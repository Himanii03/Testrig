
import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // ADD THIS METHOD
  async open() {
    await this.page.goto('YOUR_WEBSITE_URL');
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
