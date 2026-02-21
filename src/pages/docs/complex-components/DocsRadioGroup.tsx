import Label from "components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";

/** Hack until finding a better way to handle DocRadioGroup */
export default function DocsRadioGroup() {
  return (
    <RadioGroup id="sharedCustody">
      <Label>Har du delad vårdnad?</Label>
      <RadioOption>Ja</RadioOption>
      <RadioOption>Nej</RadioOption>
    </RadioGroup>
  );
}
