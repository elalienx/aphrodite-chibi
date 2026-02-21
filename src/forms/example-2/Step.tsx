import Button from "components/button/Button";
import Input from "components/input/Input";
import InputField from "components/input-field/InputField";
import Label from "components/label/Label";

import "./step.css";

export default function Step() {
  return (
    <div id="step" className="soft-background">
      <section className="top">
        <header>
          <a href="/">Tillbaka</a>
          <h2 className="level-4">2. Om bostaden</h2>
        </header>

        <InputField>
          <Label>Kvadratmeter</Label>
          <Input type="number" placeholder="0" suffix="kvm" />
        </InputField>

        <InputField>
          <Label>Antal rum</Label>
          <Input type="number" placeholder="0" suffix="st" />
        </InputField>

        <InputField>
          <Label>Månadsavgift</Label>
          <Input type="number" placeholder="0" suffix="kr/mån" />
        </InputField>
      </section>

      <hr />

      <section className="bottom">
        <Button>Nästa</Button>
      </section>
    </div>
  );
}
