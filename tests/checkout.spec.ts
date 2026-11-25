
// import { test, expect } from '../fixtures/fixtures';

// test('checks out two products', async ({page ,loginPage, productsPage, cartPage }) => {

//   await loginPage.open();

//   await loginPage.signIn(

//     process.env.SHOP_EMAIL!,
//     process.env.SHOP_PASSWORD!
//   );

//   await productsPage.addproduct('add-ball');
//   await productsPage.addproduct('add-notebook');
 
//   await cartPage.opencart();
//   await cartPage.order();
//   await expect(cartPage.confirmation).toBeVisible();
// });

import { test, expect } from '../fixtures/fixtures';

test('checks out two products', async ({ loginPage, productsPage, cartPage }) => {
  await loginPage.open();
  await loginPage.signIn(
    process.env.SHOP_EMAIL!,
    process.env.SHOP_PASSWORD!
  );

  await productsPage.addProduct('add-ball');
  await productsPage.addProduct('add-notebook');

  await cartPage.opencart();
  await cartPage.order();

  await expect(cartPage.confirmation).toBeVisible();
});
