import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
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
  console.log(
    'Sign in button count:',
    await this.page.getByTestId('shop-signin').count()
  );

  console.log(
    'Page content:',
    (await this.page.locator('body').innerText()).slice(0, 1000)
  );
}
