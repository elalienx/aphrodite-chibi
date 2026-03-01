import { Form, useForm } from "@formisch/react";

import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

import schema from "./schema";
import "./step-2.css";

interface Props {
  onContinue: () => void;
}

export default function Step2({ onContinue }: Props) {
  // Properties
  const form = useForm({ schema: schema, validate: "blur", revalidate: "blur" });

  // Methods
  function submitForm() {
    if (form.isValid) onContinue();
  }

  return (
    <Form of={form} onSubmit={submitForm} id="step-2" className="soft-background">
      <section className="top">
        <header>
          <a href="/">Tillbaka</a>
          <h4>2. Om bostaden</h4>
        </header>

        <InputField>
          <Label>Kvadratmeter</Label>
          <Input form={form} id="size" type="number" placeholder="0" suffix="kvm" />
        </InputField>

        <InputField>
          <Label>Antal rum</Label>
          <Input form={form} id="rooms" type="number" placeholder="0" suffix="st" />
        </InputField>

        <InputField>
          <Label>Månadsavgift</Label>
          <Input form={form} id="monthly_fee" type="number" placeholder="0" suffix="kr/mån" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button type="submit">Nästa</Button>
      </section>
    </Form>
  );
}
