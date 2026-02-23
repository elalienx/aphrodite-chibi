import Button from "components/button/Button";
import InputField from "components/input-field/InputField";
import Input from "components/input/Input";
import Label from "components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";

interface Props {
  onContinue: () => void;
}

export default function Step3({ onContinue }: Props) {
  return (
    <div className="soft-background">
      <section className="top">
        <h2 className="level-4">Step 3</h2>

        <RadioGroup id="PEP">
          <Label>PEP</Label>
          <RadioOption>Ja</RadioOption>
          <RadioOption>Nej</RadioOption>
          <RadioOption>Maybe?</RadioOption>
        </RadioGroup>

        <InputField>
          <Label>Age</Label>
          <Input type="text" placeholder="foo" />
        </InputField>

        <InputField>
          <Label>Phone</Label>
          <Input type="text" placeholder="foo" />
        </InputField>
      </section>
      <hr />
      <section className="bottom">
        <Button onClick={onContinue}>Foobar</Button>
      </section>
    </div>
  );
}
