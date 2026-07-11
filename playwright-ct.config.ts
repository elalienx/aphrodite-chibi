import { defineConfig, devices } from "@playwright/experimental-ct-react";

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
    ctPort: 3100,
    ctViteConfig: { resolve: { tsconfigPaths: true } },
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
