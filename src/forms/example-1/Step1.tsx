import { Field, Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

const Step1Schema = v.object({
  name: v.pipe(v.string(), v.minLength(5)),
  email: v.pipe(v.string(), v.email()),
});

export default function Step1() {
  // Properties
  const form = useForm({ schema: Step1Schema });

  // Methods
  function onSubmit() {
    // check if the form is valid
    // then run the function send by the parent
  }

  return (
    <Form className="soft-background" of={form} onSubmit={(output, event) => console.log(output)}>
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
