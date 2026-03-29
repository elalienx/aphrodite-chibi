// @ts-ignore
import type { Locator } from "@playwright/test";
import { test, expect } from "@playwright/experimental-ct-react";
import type { MountResult } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

let component: MountResult;
let errorRadio1: Locator;
let errorRadio2: Locator;
let cleanUpText: Locator;
let submitButton: Locator;

test.beforeEach(async ({ mount }) => {
  component = await mount(<FormManager />);

  errorRadio1 = component.locator("#aria-error-likes_beer");
  errorRadio2 = component.locator("#aria-error-likes_guiness");
  cleanUpText = component.getByText("Text to clean Playwright selector");
  submitButton = component.getByRole("button", { name: "Next" });
});

test.afterEach(async () => {
  await expect(cleanUpText).toBeVisible();
});

test("1. Should show error state when submitting empty form", async () => {
  // Act
  await submitButton.click();

  // Assert
  await expect(errorRadio1).toBeVisible();
  await expect(errorRadio2).toBeVisible();
});

test("2. Should submit successfully", async () => {
  // Act
  await component.getByText("Yes").first().click();
  await component.getByText("Yes").nth(1).click();
  await submitButton.click();

  // Assert
  await expect(errorRadio1).not.toBeVisible();
  await expect(errorRadio2).not.toBeVisible();
});

test("3. Clicking on a radio button with error should immediately remove the error", async () => {
  await test.step("Trigger error", async () => {
    // Act
    await component.getByText("Yes").first().click();
    await submitButton.click();

    // Assert
    await expect(errorRadio1).not.toBeVisible();
    await expect(errorRadio2).toBeVisible();
  });

  await test.step("Clear error", async () => {
    // Act
    await component.getByText("Yes").nth(1).click();

    // Assert
    await expect(errorRadio1).not.toBeVisible();
    await expect(errorRadio2).not.toBeVisible();
  });
});
