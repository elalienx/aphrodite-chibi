import Label from "components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";

/** Hack until finding a better way to handle DocRadioGroup */
export default function DocsRadioGroup() {
  return (
    <RadioGroup form={null} id="sharedCustody">
      <Label>Har du delad vårdnad?</Label>
      <RadioOption value="true">Ja</RadioOption>
      <RadioOption value="false">Nej</RadioOption>
    </RadioGroup>
  );
}
