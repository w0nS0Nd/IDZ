import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/functional',
  webServer: {
    command: 'npm run start',  
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
