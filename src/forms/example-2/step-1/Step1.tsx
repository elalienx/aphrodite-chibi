import Button from "components/button/Button";
import Icon from "components/icon/Icon";

interface Props {
  onContinue: () => void;
}

export default function Step1({ onContinue }: Props) {
  return (
    <div id="step-1" className="soft-background">
      <section className="top">
        <header>
          <a className="link-go-back" href="/">
            <Icon icon="arrow-left" /> Tillbaka
          </a>
          <h4>Road to MPV</h4>
        </header>

        <ul>
          <li>Add icons.</li>
          <li>Change third input based on previous page property type.</li>
          <li>Add form submission.</li>
          <li>Add persistence.</li>
          <li>Format input currency using spaces.</li>
          <li>Add tracking.</li>
          <li>Add tooltips.</li>
        </ul>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onContinue}>
          Nästa <Icon icon="arrow-right" />
        </Button>
      </section>
    </div>
  );
}
