import { test, expect } from '@playwright/test';
import { env } from "../utls/env";

test('signs in with the .env credentials', async ({ page }) => {
    await page.goto(`/testing/framework-setup/login?a=${env.assignment}`);
    await page.getByTestId('env-email').fill(env.demoEmail);
    await page.getByTestId('env-password').fill(env.demoPass);
    await page.getByTestId('env-submit').click();
    await expect(page.getByTestId('env-success')).toBeVisible();

    await page.goto(`/testing/framework-setup/login?a=${env.assignment}`);
    await page.getByTestId('env-email').fill(env.demoEmail);
    await page.getByTestId('env-password').fill( "123345678765");
    await page.getByTestId('env-submit').click();
    
  });