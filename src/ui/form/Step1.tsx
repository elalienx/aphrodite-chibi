import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

import "styles/style.css";
import "./step-1.css";

interface Props {
  onSubmit: () => void;
}

export default function Step1({ onSubmit }: Props) {
  return (
    <div id="step-1" className="soft-background">
      <section className="top">
        <h2>Step 1</h2>

        <InputField>
          <Label>Name</Label>
          <Input />
        </InputField>

        <InputField>
          <Label>Email</Label>
          <Input />
        </InputField>

        <InputField>
          <Label>Phone</Label>
          <Input />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Next</Button>
      </section>
    </div>
  );
}
