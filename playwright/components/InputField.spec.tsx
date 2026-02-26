import { test, expect } from "@playwright/experimental-ct-react";
import InputField from "components/input-field/InputField";
import Input from "components/input/Input";
import Label from "components/label/Label";

test("should work", async ({ mount }) => {
  const component = await mount(
    <InputField>
      <Label>Email</Label>
      <Input type="email" placeholder="leif@lendo.se" />
    </InputField>,
  );

  await expect(component).toContainText("Email");
});
