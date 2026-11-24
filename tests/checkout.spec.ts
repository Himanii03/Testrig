import { test, expect } from '../fixtures/fixtures';

test('checks out two products', async ({ loginPage, productsPage, cartPage }) => {

  await loginPage.open();

  await loginPage.signIn(
    process.env.SHOP_EMAIL!,
    process.env.SHOP_PASSWORD!
  );

  await productsPage.addProduct('add-ball');
  await productsPage.addProduct('add-notebook');

  await cartPage.openplaceorder();
  await cartPage.placeorder();

  await expect(cartPage.confirmation).toBeVisible();
});
