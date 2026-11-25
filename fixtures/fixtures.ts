// import { test as base, expect } from '@playwright/test';
// import { LoginPage } from '../pages/Loginpage';
// import { productsPage } from '../pages/productspage';
// import { cartPage} from '../pages/cartpage';

// export const test = base.extend<{
//   loginPage: LoginPage;
//   productsPage: productsPage;
//   cartPage: cartPage;
// }>
// ({
//   loginPage: async ({ page }, use) => {
//     await use(new LoginPage(page));
//   },

//   productsPage: async ({ page }, use) => {
//     await use(new productsPage(page));
//   },

//   cartPage: async ({ page }, use) => {
//     await use(new cartPage(page));
//   },
// });

// export { expect } from '@playwright/test';

import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { ProductsPage } from '../pages/productspage';
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