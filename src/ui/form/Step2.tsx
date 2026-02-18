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

        {/* Political Exposed Person (PEP) */}
        <RadioGroup>
          <Label>Är du PEP?</Label>
          <RadioOption id="PEP">Ja</RadioOption>
          <RadioOption id="PEP">Nej</RadioOption>
        </RadioGroup>

        {/* Income */}
        <RadioGroup>
          <Label>Har du huvudsaklig inkomst i utländsk valuta?</Label>
          <RadioOption id="income">Ja</RadioOption>
          <RadioOption id="income">Nej</RadioOption>
        </RadioGroup>

        {/* Property type */}
        <RadioGroup>
          <Label>För vilken typ av bostad söker du lån</Label>
          <RadioOption id="propertyType">Villa</RadioOption>
          <RadioOption id="propertyType">Lägenhet</RadioOption>
          <RadioOption id="propertyType">Radhus</RadioOption>
          <RadioOption id="propertyType">Fritidshus</RadioOption>
        </RadioGroup>
      </section>

      <hr />

      {/* Submit */}
      <section className="bottom">
        <Button onClick={onSubmit}>Skicka in</Button>
      </section>
    </div>
  );
}
