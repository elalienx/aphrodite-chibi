import { test, expect } from "@playwright/experimental-ct-react";
import Step1 from "../../src/forms/example-1/Step1";

test("should work", async ({ mount }) => {
  const component = await mount(<Step1 onContinue={() => alert("submitted")} />);
  await expect(component).toContainText("Learn React");
});
