import { test, expect } from '@playwright/test';
import { lab } from './lab';
test.describe.configure({ mode: 'parallel' });

for (const name of ['daily', 'weekly', 'monthly', 'yearly']) {
  test(`${name} report`, async ({ page }) => {
    await page.goto(lab());
    await page.getByTestId(`report-${name}-generate`).click();
    await expect(page.getByTestId(`report-${name}-status`)).toHaveText('Ready');
  });
}