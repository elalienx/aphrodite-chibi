import { Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Input from "../../components/input/Input";
import InputField from "../../components/input-field/InputField";
import Label from "../../components/label/Label";
import Button from "../../components/button/Button";

interface Props {
  onContinue: () => void;
}

const schema = v.object({
  name: v.pipe(v.string("Please enter your name."), v.minLength(3, "This name is too short")),
  email: v.pipe(v.string("Please enter your email."), v.email("This email is not valid")),
});

export default function Step1({ onContinue }: Props) {
  // Properties
  const form = useForm({ schema: schema, validate: "blur", revalidate: "blur" });

  // Methods
  function submitForm(values: v.InferInput<typeof schema>) {
    if (form.isValid) {
      console.log(`${values.name} the email ${values.email} is valid`);
      onContinue();
    }
  }

  return (
    <Form of={form} onSubmit={submitForm} className="soft-background">
      <section className="top">
        <h4>Playwright test</h4>

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
