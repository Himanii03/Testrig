import { type Page } from '@playwright/test';

export class cartPage {
  constructor(private page: Page) {}

  async openplaceorder() {
    await this.page.getByText('Cart · 2').click();
  }

  async placeorder() {
    await this.page.getByTestId('place-order').click();
  }

  get confirmation() {
    return this.page.getByTestId('order-confirmation');
  }
}