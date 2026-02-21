import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

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
          <Input type="text" placeholder="Leif Lend" validationMessage="foobar" />
        </InputField>

        <InputField>
          <Label>E-postadress</Label>
          <Input type="email" placeholder="leif@lendo.se" />
        </InputField>

        <InputField>
          <Label>Telefonnummer</Label>
          <Input type="tel" placeholder="+46 729478013" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Nästa</Button>
      </section>
    </div>
  );
}
