import Button from "components/button/Button";
import Label from "components/Label";
import RadioOption from "components/RadioOption";

export default function Step2() {
  return (
    <div id="step-2">
      <h2>Step 2</h2>

      {/* Age */}
      <Label>Are you over 18?</Label>
      <RadioOption>Yes</RadioOption>
      <RadioOption>No</RadioOption>

      {/* Income */}
      <Label>Is you income in Swedish kronas?</Label>
      <RadioOption>Yes</RadioOption>
      <RadioOption>No</RadioOption>

      {/* Submit */}
      <Button>Submit</Button>
    </div>
  );
}
