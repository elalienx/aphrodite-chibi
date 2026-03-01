import { test, expect } from "@playwright/experimental-ct-react";
import type { Locator } from "@playwright/test";

import FormManager from "../src/forms/example-3/FormManager";

let input1: Locator;
let input2: Locator;
let wrapper1: Locator;
let wrapper2: Locator;
let submitButton: Locator;

test.beforeEach(async ({ mount }) => {
  // Arrange
  const component = await mount(<FormManager />);

  input1 = component.getByRole("textbox", { name: "Leif Lend" });
  input2 = component.getByRole("textbox", { name: "leif@lendo.se" });
  wrapper1 = input1.locator("..");
  wrapper2 = input2.locator("..");
  submitButton = component.getByRole("button", { name: "Nästa" });
});

test("Should show error on both field when pressing submit", async ({ mount }) => {
  // Act
  await submitButton.click();

  // Assert
  await expect(wrapper1.getByText("Please enter your name")).toBeVisible();
  await expect(wrapper2.getByText("Please enter your email")).toBeVisible();
});

test("Should show active state of first field", async ({ mount }) => {
  // Act
  await input1.focus();

  // Assert
  await expect(wrapper1).toHaveClass(/focus/);
  await expect(wrapper2).not.toHaveClass(/error/);
});
