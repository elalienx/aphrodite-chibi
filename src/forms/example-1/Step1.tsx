import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";
import RadioGroup from "components/radio-group/RadioGroup";
import RadioOption from "components/radio-option/RadioOption";

interface Props {
  onSubmit: () => void;
}

export default function Step1({ onSubmit }: Props) {
  return (
    <div className="soft-background">
      <section className="top">
        <h2 className="level-4">Step 1</h2>

        <InputField>
          <Label>Namn och efternamn</Label>
          <Input type="text" placeholder="kr" validationMessage="foobar" suffix="kr" />
        </InputField>

        <InputField>
          <Label>E-postadress</Label>
          <Input type="email" placeholder="leif@lendo.se" suffix="kr" />
        </InputField>

        <InputField>
          <Label>Telefonnummer</Label>
          <Input type="tel" placeholder="+46 729478013" />
        </InputField>

        <RadioGroup id="PEP">
          <Label>Är du PEP?</Label>
          <RadioOption>Ja</RadioOption>
          <RadioOption>Nej</RadioOption>
        </RadioGroup>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Nästa</Button>
      </section>
    </div>
  );
}
