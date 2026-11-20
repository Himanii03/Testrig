import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://thedappled.com/testing/ui-automation/signup?a=HHtkFtIqrAKb'
  );
  await page.getByTestId("signup-submit").click();
  
  await page.getByTestId('signup-name').fill('Himani');
  await page.getByTestId('signup-email').fill('himani@thedappled.com');
  await page.getByTestId('signup-password').fill('Test@1234');
  await page.getByTestId('signup-confirm').fill('Test@1234');
  await page.getByTestId('signup-terms').check();
  await page.getByTestId('signup-submit').click();

  await page.getByTestId('signup-name').fill('Himani');
  await page.getByTestId('signup-email').fill('himani@thedappled.com');
  await page.getByTestId('signup-password').fill('Test@1234');
  await page.getByTestId('signup-confirm').fill('Test@4321');
  await page.getByTestId('signup-terms').check();
  await page.getByTestId('signup-submit').click();

});
