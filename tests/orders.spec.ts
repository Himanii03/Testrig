import { test, expect } from '@playwright/test';
import { lab } from './lab';
test('create an order', async ({ page }, testInfo) => {
    //const id = `order-${testInfo.testId}`;
    const id = `order-${testInfo.testId}-${Math.random().toString(36).substring(2, 10)}`;

    testInfo.annotations.push({ type: 'order', description: id });
    await page.goto(lab());
    await page.getByTestId('order-id').fill(id);
    await page.getByTestId('order-create').click();
    await expect(page.getByTestId('order-result')).toHaveText(`Order ${id} created`);
  });