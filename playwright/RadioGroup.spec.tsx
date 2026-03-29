// @ts-ignore
import type { Locator } from "@playwright/test";
import { test, expect } from "@playwright/experimental-ct-react";
import type { MountResult } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

const aria2 = "#aria-error-likes_beer";
const aria3 = "#aria-error-likes_guiness";
const specificError = "What property you will purchase";
const genericError = "Say either yes or no.";

let component: MountResult;
let cleanUpText: Locator;
let submitButton: Locator;

test.beforeEach(async ({ mount }) => {
  component = await mount(<FormManager />);
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
  await expect(component.getByText(specificError)).toBeVisible();
  await expect(component.locator(aria2).getByText(genericError)).toBeVisible();
  await expect(component.locator(aria3).getByText(genericError)).toBeVisible();
});

test("2. Should submit successfully", async () => {
  // Act
  await component.getByText("House", { exact: true }).click();
  await component.getByText("Yes").first().click();
  await component.getByText("Yes").nth(1).click();
  await submitButton.click();

  // Assert
  await expect(component.getByText("Succes")).toBeVisible();
});
