import Button from "components/button/Button";
import Label from "components/label/Label";
import RadioOption from "components/radio-option/RadioOption";

import "styles/style.css";
import "./step-2.css";
import RadioGroup from "components/radio-group/RadioGroup";

interface Props {
  onSubmit: () => void;
}

export default function Step2({ onSubmit }: Props) {
  return (
    <div id="step-2" className="soft-background">
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
