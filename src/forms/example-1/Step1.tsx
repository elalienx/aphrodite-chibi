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
  const form = useForm({ schema: schema, validate: "blur" });

  // Methods
  function submitForm(values: v.InferInput<typeof schema>) {
    if (form.isValid) {
      alert(`Congratulations ${values.name} your email ${values.email} was created 🎉`);
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
          <Label>E-postadress</Label>
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
