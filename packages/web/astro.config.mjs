import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  integrations: [react(), tsconfigPaths()],
});
