import process from 'process';
import { test, expect } from '../fixtures/fixtures';

test('checks out two products', async ({page ,loginPage, productsPage, cartPage }) => {

  await loginPage.open();

  await loginPage.signIn(
    process.env.SHOP_EMAIL!,
    process.env.SHOP_PASSWORD!
  );

  await productsPage.addproduct('add-ball');
  await productsPage.addproduct('add-notebook');
  await cartPage.openplaceorder();
  await cartPage.placeOrder();
  await expect(cartPage.confirmation).toBeVisible();
});
