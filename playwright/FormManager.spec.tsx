// @ts-ignore
import type { Locator } from "@playwright/test";
import { test, expect } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

const validName = "Eduardo";
const validEmail = "eduardo@lendo.se";
const invalidName = "Ed"; // Below minimum length
const invalidEmail = "eduardo@lendo"; // Missing top-level domain (e.g., .com, .se)
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

test("1. Should show error state when submitting empty form", async ({ mount }) => {
  // Act
  await submitButton.click();

  // Assert
  await expect(wrapper1.getByText("Please enter your name")).toBeVisible();
  await expect(wrapper2.getByText("Please enter your email")).toBeVisible();
});

test("2. Should show active state when input is focused and untouched", async ({ mount }) => {
  // Act
  await input1.focus();

  // Assert
  await expect(wrapper1).toHaveClass(/focus/);
  await expect(wrapper2).toHaveClass(/default/);
});

test("3. Should return to default state when input is focused and then blurred without typing", async ({ mount }) => {
  // Act
  await input1.focus();
  await input1.blur();

  // Assert
  await expect(wrapper1).toHaveClass(/default/);
  await expect(wrapper2).toHaveClass(/default/);
});

test("4. Should remain active while typing invalid value without blurring", async ({ mount }) => {
  // Act
  await input1.fill(invalidName);

  // Assert
  await expect(wrapper1).toHaveClass(/focus/);
  await expect(wrapper2).toHaveClass(/default/);
});

test("5. Should show error state when invalid value is entered and input is blurred", async ({ mount }) => {
  // Act
  await input1.fill(invalidName);
  await input1.blur();

  // Assert
  await expect(wrapper1.getByText("Please enter your name")).toBeVisible();
  await expect(wrapper2).toHaveClass(/default/);
});
