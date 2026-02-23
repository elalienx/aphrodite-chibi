import { Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

interface Props {
  onContinue: () => void;
}

const schema = v.object({
  name: v.pipe(v.string("Name must not be empty"), v.minLength(5, "This name is too short")),
  email: v.pipe(v.string("Email must not be empty"), v.email("This email is not valid")),
});

export default function Step1({ onContinue }: Props) {
  // Properties
  const form = useForm({ schema: schema });

  // Methods
  function submitForm(values: v.InferInput<typeof schema>) {
    console.log(values); // { name: string, email: string }

    if (form.isValid) {
      alert("Success 🎉");
      onContinue();
    }
  }

  return (
    <Form of={form} onSubmit={submitForm} className="soft-background">
      <section className="top">
        <h2 className="level-4">Step 1</h2>

        <InputField>
          <Label>Namn och efternamn</Label>
          <Input form={form} id="name" type="text" placeholder="Leif Lend" />
        </InputField>

        <InputField>
          <Label>Namn och efternamn</Label>
          <Input form={form} id="email" type="text" placeholder="leif@lendo.se" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button type="submit">Nästa</Button>
      </section>
    </Form>
  );
}
