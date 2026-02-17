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
        <h2>Step 1</h2>

        <InputField>
          <Label>Namn och efternamn</Label>
          <Input />
        </InputField>

        <InputField>
          <Label>E-postadress</Label>
          <Input />
        </InputField>

        <InputField>
          <Label>Telefonnummer</Label>
          <Input />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Next</Button>
      </section>
    </div>
  );
}
