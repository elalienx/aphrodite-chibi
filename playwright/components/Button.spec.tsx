import { test, expect } from "@playwright/experimental-ct-react";
import Button from "components/button/Button";

test("should work", async ({ mount }) => {
  const component = await mount(<Button>Learn React</Button>);

  await expect(component).toContainText("Learn React");
});
