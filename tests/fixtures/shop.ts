import { test as base } from '@playwright/test';

export const shopTest = base.extend<{ currency: string; saveLogs: void }, { forEachWorker: void }>({
  currency: ['USD', { option: true }],
 
  saveLogs: [async ({ page }, use, testInfo) => {
    const logs: string[] = [];
    page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
    await use();
    await testInfo.attach('console', { body: logs.join('\n'), contentType: 'text/plain' });  
    // teardown
  },
  { auto: true, box: true }],

  page: async ({ page, currency }, use, testInfo) => {
    testInfo.annotations.push({ type: 'currency', description: currency });
    await page.goto(`/testing/fixtures-advanced/lab?a=${process.env.ASSIGNMENT_TOKEN}&currency=${currency}`);
    await use(page);
  },

  forEachWorker: [async ({}, use) => {
    // runs once per worker, before any test: a global beforeAll
    await use();
  }, { scope: 'worker', auto: true, title: 'worker setup' }],
});