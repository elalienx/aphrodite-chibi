import { Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import InputField from "../../components/input-field/InputField";
import Label from "../../components/label/Label";

const schema = v.object({
  name: v.pipe(
    v.string("Please enter your full name."),
    v.nonEmpty("Name must not be empty."),
    v.minLength(3, "Name is too short."),
  ),
  email: v.pipe(
    v.string("Please enter your email."),
    v.nonEmpty("Email must not be empty."),
    v.email("The email address is badly formatted."),
  ),
});

export default function FormManager() {
  // Properties
  const form = useForm({
    schema: schema,
    validate: "blur",
    revalidate: "blur",
  });

  // Methods
  function submitForm() {
    if (form.isValid) alert("Success");
  }

  return (
    <Form of={form} onSubmit={submitForm} className="soft-background">
      <section className="top">
        <h4>Radio button test</h4>

        {/* Apartment type */}
        <p>placeholder</p>

        {/* Do you like beer? (yes/no) */}
        <p>placeholder</p>

        {/* Do you like Guiness? (yes/no) */}
        <p>placeholder</p>

        <hr />
      </section>

      <section className="bottom" style={{ textAlign: "center" }}>
        <Button type="submit">Nästa</Button>
        <br />
        <small>(Text to clean Playwright selector)</small>
      </section>
    </Form>
  );
}
