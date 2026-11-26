import { test, expect } from '@playwright/test';

test.describe('annotations lab', { tag: '@lab' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/testing/annotations/lab?a=${process.env.ASSIGNMENT_TOKEN}`);
  });

  test('SAVE10 takes 10% off', {
    tag: '@smoke',
    annotation: { type: 'issue', description: 'SAVE10 gives 20% off' },
  }, async ({ page }) => {
    test.fail(); // known bug
    await page.getByTestId('coupon-input').fill('SAVE10');
    await page.getByTestId('coupon-apply').click();
    await expect(page.getByTestId('order-total')).toHaveText('$72.00');
  });

  test('export CSV', { tag: '@regression' }, async ({ page }) => {
    test.slow(); // 90 s instead of 30 s
    await page.getByTestId('export-button').click();
    await expect(page.getByTestId('export-status'))
      .toHaveText('Export ready', { timeout: 45_000 });
  });

  test.fixme('dark-mode export', async () => {});

  test('copy link', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Clipboard is not supported on WebKit');
    test.info().annotations.push({ type: 'browser', description: browserName });
    await page.getByTestId('copy-link').click();
    await expect(page.getByTestId('copy-status')).toHaveText('Link copied');
  });
});
