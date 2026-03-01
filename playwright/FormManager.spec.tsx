import { test, expect } from "@playwright/experimental-ct-react";

import FormManager from "forms/example-3/FormManager";

test("should work", async ({ mount }) => {
  const component = await mount(<FormManager />);

  await expect(component).toContainText("Playwright test");
});
