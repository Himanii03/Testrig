import { test, expect } from '@playwright/test';
import { lab } from './lab';
test.describe('checkout', () => {
  test.describe.configure({ mode: 'serial' });
  test('cart is ready', async ({ page }) => {
    await page.goto(lab());
    await expect(page.getByTestId('checkout-cart')).toHaveText('Ready');
  });
  test('payment goes through', async ({ page }) => {   // fails: the service is down
    await page.goto(lab());
    await page.getByTestId('checkout-pay').click();
    await expect(page.getByTestId('checkout-payment')).toHaveText('Paid');
  });
  test('order is confirmed', async ({ page }) => {      // skipped after the failure
    await page.goto(lab());
    await expect(page.getByTestId('checkout-confirm')).toHaveText('Confirmed');
  });
});