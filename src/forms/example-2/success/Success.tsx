import Button from "components/button/Button";

interface Props {
  onContinue: () => void;
}

export default function Success({ onContinue }: Props) {
  return (
    <div className="soft-background">
      <section className="top">
        <header>
          <h3>Tack för din ansökan!</h3>
        </header>

        <section className="soft-green-background">
          <header>
            <h4>Vad händer nu?</h4>
          </header>
          <b>Vi ringer dig!</b>
          <p>En handläggare från Lendo kommer att ringa upp dig inom kort för att gå igenom din bolåneansökan.</p>
          <br />
          <p>
            Det är viktigt att du svarar när vi ringer, eftersom vi behöver prata med dig innan vi kan gå vidare med
            eventuella erbjudanden.
          </p>
          <br />
          <b>Vill du hellre ringa oss direkt?</b>
          <p>
            Kontakta oss på <a href="tel:+46771190190">0771 - 190 190</a>.
          </p>
        </section>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onContinue}>STARTA OM ANSÖKAN</Button>
      </section>
    </div>
  );
}
