import { defineConfig, devices } from "@playwright/experimental-ct-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Properties

export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 800, height: 600 },
      },
    },
  ],
  reporter: "list",
  retries: 0,
  snapshotDir: "./__snapshots__",
  testDir: "./",
  timeout: process.env.CI ? 10_000 : 1_000,
  use: {
    trace: "on-first-retry",
    ctPort: 3100,
    ctViteConfig: { plugins: [tsconfigPaths()] },
  },
  workers: process.env.CI ? 8 : undefined,
});
