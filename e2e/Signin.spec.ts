import { test, expect } from "@playwright/test";
 
test("test", async ({ page }) => {
    await page.goto(
        "https://thedappled.com/testing/ui-automation/login?a=HHtkFtIqrAKb"
    );
    await page.getByTestId("login-email").click();
    await page.getByTestId("login-password").click();
    await page.getByTestId("login-submit").click();


    await page.getByTestId("login-email").fill('demo@thedappled.com ');
    await page.getByTestId("login-password").fill('Test@1234');
    await page.getByTestId("login-submit").click();

    
    await page.getByTestId("login-email").fill('demo@thedappled.com ');
    await page.getByTestId("login-password").fill('  ');
    await page.getByTestId("login-submit").click();

});


