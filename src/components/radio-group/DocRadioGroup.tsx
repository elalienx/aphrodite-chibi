import Label from "components/label/Label";
import RadioOption from "components/radio-option/RadioOption";
import RadioGroup from "./RadioGroup";

/** Hack until finding a better way to handle DocRadioGroup */
export default function DocRadioGroup() {
  return (
    <RadioGroup id="sharedCustody">
      <Label>Har du delad vårdnad?</Label>
      <RadioOption>Ja</RadioOption>
      <RadioOption>Nej</RadioOption>
    </RadioGroup>
  );
}
