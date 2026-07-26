import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./playwright",
  snapshotDir: "./snapshots",
  timeout: process.env.CI ? 10_000 : 1_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: "list",
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:3100",
  },
  webServer: {
    // Runs 'astro dev --port 3100' using pnpm
    command: "pnpm dev --port 3100",
    url: "http://localhost:3100",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 800, height: 600 },
      },
    },
  ],
});
