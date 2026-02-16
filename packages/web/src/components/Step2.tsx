import Button from "ui/components/button/Button";
import RadioGroup from "ui/components/radio-group/RadioGroup";
import RadioOption from "ui/components/radio-option/RadioOption";
import Label from "ui/components/label/Label";

import "styles/style.css";
import "./step2.css";

interface Props {
  onSubmit: () => void;
}

export default function Step2({ onSubmit }: Props) {
  return (
    <div id="step2" className="soft-background">
      <section className="top">
        <h2>Step 2</h2>

        {/* Age */}
        <RadioGroup>
          <Label>Are you over 18?</Label>
          <RadioOption>Yes</RadioOption>
          <RadioOption>No</RadioOption>
        </RadioGroup>

        {/* Income */}
        <RadioGroup>
          <Label>Is your income in Swedish kronas?</Label>
          <RadioOption>Yes</RadioOption>
          <RadioOption>No</RadioOption>
        </RadioGroup>
      </section>

      <hr />

      {/* Submit */}
      <section className="bottom">
        <Button onClick={onSubmit}>Submit</Button>
      </section>
    </div>
  );
}
