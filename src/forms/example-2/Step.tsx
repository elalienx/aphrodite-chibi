import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

export default function Step() {
  return (
    <div className="soft-background">
      <section className="top">
        <h2 className="level-4">2. Om bostaden</h2>

        <InputField>
          <Label>Kvadratmeter</Label>
          <Input type="number" placeholder="0" />
        </InputField>

        <InputField>
          <Label>Antal rum</Label>
          <Input type="number" placeholder="0" />
        </InputField>

        <InputField>
          <Label>Månadsavgift</Label>
          <Input type="number" placeholder="0" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button>Nästa</Button>
      </section>
    </div>
  );
}
