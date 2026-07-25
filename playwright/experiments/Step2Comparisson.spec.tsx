// Node moduels
import { test, expect } from "@playwright/experimental-ct-react";

// Project files
import Step2 from "forms/mvp-mortgage/-step-2/Step2";

const item1 = "Kvadratmeter";
const item2 = "Antal rum";
const item3 = "Driftskostnad";

function setStep() {
  //
}

/**
 * About:
 * This file exist to compare the Step 2 on Aphrodite Master vs Aphrodite Chibi.
 * It renders the Step 2 directly with the house properly pre-selected and ends
 * as soon as the submit button stores the user data.
 *
 * It has a specific screen resolution to match the original Aphrodite Master test.
 */
test.use({ viewport: { width: 544, height: 700 } }); // Same as Mortgage component tests

test("should submit form data for house", async ({ mount }) => {
  // Arrange
  const form = await mount(<Step2 propertyType="house" setStep={setStep} />);

  // Act
  await form.getByRole("textbox", { name: item1 }).fill(String(120));
  await form.getByRole("textbox", { name: item2 }).fill(String(5));
  await form.getByRole("textbox", { name: item3 }).fill(String(3_000));
  await form.getByRole("button", { name: "Nästa" }).click();

  // Assert
  await expect(form.getByRole("textbox", { name: item1 })).toHaveValue("120");
  await expect(form.getByRole("textbox", { name: item2 })).toHaveValue("5");
  await expect(form.getByRole("textbox", { name: item3 })).toHaveValue("3 000"); // with extra space on purpse due to number formatting
});
