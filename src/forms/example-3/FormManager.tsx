import { Form, useForm } from "@formisch/react";
import * as v from "valibot";

import Button from "../../components/button/Button";
import Label from "../../components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";

const schema = v.object({
  apartment_type: v.pipe(v.string("What property you will purchase.")),
  likes_beer: v.pipe(v.string("Say either yes or no.")),
  likes_guiness: v.pipe(v.string("Say either yes or no.")),
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
        <RadioGroup form={form} id={"apartment_type"}>
          <Label>Apartment type</Label>
          <RadioOption value="house">House</RadioOption>
          <RadioOption value="apartment">Apartment</RadioOption>
          <RadioOption value="summer_house">Summer house</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>

        {/* Do you like beer? (yes/no) */}
        <RadioGroup form={form} id={"likes_beer"}>
          <Label>Apartment type</Label>
          <RadioOption value="true">Yes</RadioOption>
          <RadioOption value="false">No</RadioOption>
        </RadioGroup>

        {/* Do you like Guiness? (yes/no) */}
        <RadioGroup form={form} id={"likes_guiness"}>
          <Label>Apartment type</Label>
          <RadioOption value="true">Yes</RadioOption>
          <RadioOption value="false">No</RadioOption>
        </RadioGroup>

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
