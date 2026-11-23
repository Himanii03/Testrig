import { type Page } from '@playwright/test';

export class cartPage { constructor(private page: Page) {}

async open() { await this.page.goto(  `https://thedappled.com/testing/page-objects/shop?a=CEWpv3t4vSpB${process.env.ASSIGNMENT_TOKEN}` );

 }

get confirmation() { return this.page.getByTestId('order-confirmation'); }

async placeorder() { await this.page.getByTestId('place-order').click(); } }