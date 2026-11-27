// import { mergeTests } from '@playwright/test';
// export const test = mergeTests(authTest, shopTest);
// export { authTest } from './auth';
// export  { shopTest } from './shop';

// export { expect } from '@playwright/test';

import { mergeTests, expect } from '@playwright/test';

import { authTest } from './auth';
import { shopTest } from './shop';

export const test = mergeTests(authTest, shopTest);

export { expect };