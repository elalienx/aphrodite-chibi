import Button from "components/button/Button";
import Tooltip from "components/tooltip/Tooltip";

interface Props {
  onContinue: () => void;
}

export default function Step1({ onContinue }: Props) {
  return (
    <div id="step-1" className="soft-background">
      <section className="top">
        <header>
          <a href="/">Tillbaka</a>
          <h4>Road to MPV</h4>
        </header>

        <Tooltip id="one" text="This is the first tooltip 🥇" />

        <ul>
          <li>Add tooltips.</li>
          <li>Add icons.</li>
          <li>Change third input based on property type.</li>
          <li>Add validations.</li>
          <li>Add form submission.</li>
          <li>Add persistence.</li>
          <li>Add tracking.</li>
        </ul>
      </section>

      <Tooltip id="two" text="This is the second tooltip 🥈" />

      <hr />

      <section className="bottom">
        <Button onClick={onContinue}>Nästa</Button>
      </section>
    </div>
  );
}
