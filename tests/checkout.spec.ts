import { test, expect } from '../fixtures/fixtures';

test('checks out two products', async ({
  loginPage,
  productsPage,
  cartPage
}) => {
  await loginPage.open();
  await loginPage.login();

  await productsPage.verifyProducts();
  await cartPage.verifyCart();
});