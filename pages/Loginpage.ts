import { test, expect, type Page } from '@playwright/test';
// import process from 'node:process';

export class LoginPage {
  constructor(private page: Page) {}
  async open() {
    await this.page.goto(`/testing/cross-browser/shop?a=${process.env.ASSIGNMENT_TOKEN}`);
  }


  async signIn(email: string, password: string) {
    await this.page.getByTestId('shop-email').fill(email);
    await this.page.getByTestId('shop-password').fill(password);
    await this.page.getByTestId('shop-signin').click();
  }
}

test('Login page test', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
});