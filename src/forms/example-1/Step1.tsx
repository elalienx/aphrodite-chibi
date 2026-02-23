import { Field, Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

interface Props {
  onSubmit: () => void;
}

const Step1Schema = v.object({
  name: v.pipe(v.string(), v.minLength(10)),
});

export default function Step1({ onSubmit }: Props) {
  // Properties
  const step1Form = useForm({ schema: Step1Schema });

  return (
    <Form className="soft-background" of={step1Form} onSubmit={(output, event) => console.log(output)}>
      <section className="top">
        <h2 className="level-4">Step 1</h2>

        <InputField>
          <Label>Namn och efternamn</Label>
          <Input type="text" placeholder="Leif Lend" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit} type="submit">
          Nästa
        </Button>
      </section>
    </Form>
  );
}
