import { test, expect } from "@playwright/experimental-ct-react";

import FormManager from "../src/forms/example-3/FormManager";

test("Should show error on both field when pressing submit", async ({ mount }) => {
  // Arrange
  const component = await mount(<FormManager />);
  const submitButton = component.getByRole("button", { name: "Nästa" });
  const input1 = component.getByRole("textbox", { name: "Leif Lend" });
  const input2 = component.getByRole("textbox", { name: "leif@lendo.se" });
  const wrapper1 = input1.locator("..");
  const wrapper2 = input2.locator("..");

  // Act
  await submitButton.click();

  // Assert
  await expect(wrapper1.getByText("Please enter your name")).toBeVisible();
  await expect(wrapper2.getByText("Please enter your email")).toBeVisible();
});

test("Should show active state of first field", async ({ mount }) => {
  // Arrange
  const component = await mount(<FormManager />);
  const input1 = component.getByRole("textbox", { name: "Leif Lend" });
  const input2 = component.getByRole("textbox", { name: "leif@lendo.se" });
  const wrapper1 = input1.locator("..");
  const wrapper2 = input2.locator("..");

  // Act
  await input1.focus();

  // Assert
  await expect(wrapper1).toHaveClass(/focus/);
  await expect(wrapper2).not.toHaveClass(/error/);
});
