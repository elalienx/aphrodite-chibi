import Button from "components/button/Button";
import Input from "components/input/Input";
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

        {/* Name */}
        <Label>Name</Label>
        <Input />

        {/* Email */}
        <Label>Email</Label>
        <Input />

        {/* Phone */}
        <Label>Phone</Label>
        <Input />
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Next</Button>
      </section>
    </div>
  );
}
