import { test as base } from '@playwright/test';

export const authTest = base.extend<{ account: { email: string } }, { workerAccount: { email: string } }>({
  workerAccount: [async ({}, use, workerInfo) => {
    await use({ email: `worker-${workerInfo.workerIndex}@lab.test` });
  }, { scope: 'worker' }],
  // test-scoped view of it, so the report shows which account each test used
  account: async ({ workerAccount }, use, testInfo) => {
    testInfo.annotations.push({ type: 'account', description: workerAccount.email });
    await use(workerAccount);
  },
});