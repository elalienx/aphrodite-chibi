// @ts-ignore
import type { Locator } from "@playwright/test";
import { test, expect } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

let cleanUpText: Locator;
let submitButton: Locator;

test.beforeEach(async ({ mount }) => {
  // Arrange
  const component = await mount(<FormManager />);

  cleanUpText = component.getByText("Text to clean Playwright selector");
  submitButton = component.getByRole("button", { name: "Next" });
});

test.afterEach(async () => {
  await expect(cleanUpText).toBeVisible();
});

test("1. Should show error state when submitting empty form", async () => {
  // Act
  await submitButton.click();

  //   // Assert
  //   await expect(wrapper1).toHaveClass(/error/);
  //   await expect(wrapper2).toHaveClass(/error/);
});
