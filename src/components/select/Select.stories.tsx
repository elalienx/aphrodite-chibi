// Node modules
import { Form, useForm } from "@formisch/react";
import * as v from "valibot";

// Project files
import preview from "../../../.storybook/preview";
import Select from "./Select";

// Metadata
const meta = preview.meta({
  title: "Form atoms/Select",
  component: Select,
});

// Stories
export const Default = meta.story({
  name: "Default",
  render: () => {
    const form = useForm({ schema: v.object({ favorite_videogame: v.string() }) });

    return (
      <Form of={form} onSubmit={() => undefined}>
        <Select form={form} id="favorite_videogame">
          Favorite videogame
        </Select>
      </Form>
    );
  },
});
