// import { test, expect } from './fixtures';

// test('sign up with the worker account', async ({ page, account }) => {
//   await page.getByTestId('signup-email').fill(account.email);
//   await page.getByTestId('signup-submit').click();
//   await expect(page.getByTestId('signed-in-as')).toHaveText(account.email);
// });

// test('prices use the project currency', async ({ page, currency }) => {
//   await expect(page.getByTestId('store-currency')).toHaveText(currency);
// });

export const lab = () => `/testing/parallel-runs/lab?a=${process.env.ASSIGNMENT_TOKEN}`;

