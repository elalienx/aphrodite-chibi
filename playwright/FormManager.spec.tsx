import { test, expect } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

test("Should show error on both field when pressing submit", async ({ mount }) => {
  const component = await mount(<FormManager />);

  await component.getByRole("button", { name: "Nästa" }).click();

  // Input 1

  // Input 2

  await expect(component.getByRole("heading", { name: "Playwright test" })).toBeVisible();
});
