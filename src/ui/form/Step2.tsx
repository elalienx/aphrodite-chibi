import Button from "components/button/Button";
import Label from "components/label/Label";
import RadioOption from "components/radio-option/RadioOption";
import RadioGroup from "components/radio-group/RadioGroup";

interface Props {
  onSubmit: () => void;
}

export default function Step2({ onSubmit }: Props) {
  return (
    <div className="soft-background">
      <section className="top">
        <h2>Step 2</h2>

        {/* Age */}
        <RadioGroup>
          <Label>Är du PEP?</Label>
          <RadioOption>Ja</RadioOption>
          <RadioOption>Nej</RadioOption>
        </RadioGroup>

        {/* Income */}
        <RadioGroup>
          <Label>Har du huvudsaklig inkomst i utländsk valuta?</Label>
          <RadioOption>Ja</RadioOption>
          <RadioOption>Nej</RadioOption>
        </RadioGroup>

        {/* Property type */}
        <RadioGroup>
          <Label>För vilken typ av bostad söker du lån</Label>
          <RadioOption>Villa</RadioOption>
          <RadioOption>Lägenhet</RadioOption>
          <RadioOption>Radhus</RadioOption>
          <RadioOption>Fritidshus</RadioOption>
        </RadioGroup>
      </section>

      <hr />

      {/* Submit */}
      <section className="bottom">
        <Button onClick={onSubmit}>Submit</Button>
      </section>
    </div>
  );
}
