import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { ProductsPage } from '../pages/Productspage';
import { CartPage } from '../pages/cartpage';

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };