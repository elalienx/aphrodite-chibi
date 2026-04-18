// Node modules
import { Form, useForm } from "@formisch/react";

// Project files
import Button from "components/button/Button";
import Label from "components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";
import schema from "./schema";
import InputField from "components/input-field/InputField";
import Input from "components/input/Input";

export default function FormPage() {
  // Local state
  const form = useForm({ schema: schema, validate: "blur", revalidate: "blur" });

  // Methods
  function submitForm() {
    if (form.isValid) alert("Success");
  }

  return (
    <Form of={form} onSubmit={submitForm} className="soft-background">
      <section className="top">
        <h4>Radio group tests</h4>

        <InputField form={form} id="owner">
          <Label>Owner</Label>
          <Input type="text" placeholder="Jhon Doe" />
        </InputField>

        <RadioGroup form={form} id="type">
          <Label>Type</Label>
          <RadioOption value="card">Card</RadioOption>
          <RadioOption value="paypal">Paypal</RadioOption>
        </RadioGroup>

        {/* Payment type: Card */}
        <InputField form={form} id="number">
          <Label>Number</Label>
          <Input type="number" placeholder="1234 1234 1234 1234" />
        </InputField>

        <InputField form={form} id="expiration">
          <Label>Expiration</Label>
          <Input type="text" placeholder="MM/YY" />
        </InputField>

        {/* Payment type: Paypal */}
        <InputField form={form} id="email">
          <Label>Email</Label>
          <Input type="email" placeholder="example@email.com" />
        </InputField>
      </section>

      <hr />

      <section className="bottom" style={{ textAlign: "center" }}>
        <Button type="submit">Submit</Button>
        <br />
        <small>(Text to clean Playwright selector)</small>
      </section>
    </Form>
  );
}
