import { test, expect } from '@playwright/test';

const lab = () => `/testing/annotations-advanced/lab?a=${process.env.ASSIGNMENT_TOKEN}`;

test.describe('charts', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Charts need Chromium');
  test.beforeEach(async ({ page }) => { await page.goto(lab()); });

  test('revenue chart shows 6 months', async ({ page }) => {
    await expect(page.getByTestId('chart-bar')).toHaveCount(6);
  });
});

test.describe('settings', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.fixme(isMobile, 'Settings are not on mobile yet');
    await page.goto(lab());
  });

  test('turn on email alerts', async ({ page }) => {
    await page.getByTestId('setting-email').click();
    await expect(page.getByTestId('setting-email')).toBeChecked();
  });
});

test.describe('reports', {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.beforeEach(async ({ page }) => { await page.goto(lab()); });

  test('daily summary @fast', {
    annotation: [
      { type: 'issue', description: 'https://github.com/you/app/issues/58' },
      { type: 'owner', description: 'reports team' },
    ],
  }, async ({ page }) => {
    test.info().annotations.push({ type: '_runId', description: String(Date.now()) });
    await expect(page.getByTestId('report-daily')).toBeVisible();
  });

  test('full year report @slow', async ({ page }) => {
    await expect(page.getByTestId('report-year')).toBeVisible();
  });

  test.skip('export to PDF', async ({ page }) => {
    // written, not ready to run
  });
});