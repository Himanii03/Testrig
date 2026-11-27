
// import { defineConfig, devices } from '@playwright/test';
// import 'dotenv/config';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */

// // export default defineConfig({
// //   testDir: './tests',
// //   testMatch: ['**/*.spec.ts'],
// //   fullyParallel: true,
// //   forbidOnly: !!process.env.CI,
// //   retries: process.env.CI ? 2 : 0,
// //   workers: 2,
// // });

// export default defineConfig({
//   testDir: './tests',

//   testMatch: ['**/*.spec.ts'],

//   /* Run tests in files in parallel */
//   fullyParallel: true,

//   /* Fail the build on CI if you accidentally left test.only */
//   forbidOnly: !!process.env.CI,

//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,

//   /* Opt out of parallel tests on CI */
//   // workers: process.env.CI ? 1 : undefined,
//   workers: 2,

//   /* Currency projects */
//   //  projects: [
//   //    { name: 'usd', use: { currency: 'USD' } },
//   //    { name: 'eu', use: { currency: 'EUR' } },
//   // ],
//   projects: [
//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//         // Project currency: USD
//       },
//       metadata: {
//         currency: 'USD',
//       },
//     },
//     {
//       name: 'firefox',
//       use: {
//         ...devices['Desktop Firefox'],
//         // Project currency: EUR
//       },
//       metadata: {
//         currency: 'EUR',
//       },
//     },
//   //   {
//   //     name: 'webkit',
//   //     use: {
//   //       ...devices['Desktop Safari'],
//   //       // Project currency: INR
//   //     },
//   //     metadata: {
//   //       currency: 'INR',
//   //     },
//   //   },
//   // ],

//   /* Reporter to use */
//   reporter: 'html',

//   /* Shared settings for all projects */
//   use: {
//     /* Base URL to use in actions */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test */
//     trace: 'on-first-retry',

//     baseURL: process.env.BASE_URL,
//   },

//   // forbidOnly: !!process.env.CI,
//   // use: { baseURL: process.env.BASE_URL },

//   // projects: [
//   //   { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//   //   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//   //   { name: 'mobile', use: { ...devices['Pixel 7'] } },
//   // ],

//   /* Configure projects for major browsers */
//   // projects: [
//   //   {
//   //     name: 'chromium',
//   //     use: { ...devices['Desktop Chrome'] },
//   //   },

//   //   {
//   //     name: 'firefox',
//   //     use: { ...devices['Desktop Firefox'] },
//   //   },

//   //   {
//   //     name: 'webkit',
//   //     use: { ...devices['Desktop Safari'] },
//   //   },

//     /* Test against mobile viewports */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });


import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 2,

  // Currency projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        currency: 'USD',
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        currency: 'EUR',
      },
    },
  ],

  reporter: 'html',

  // Shared settings
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },
});
