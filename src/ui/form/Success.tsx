import Button from "components/button/Button";

import "styles/style.css";
import "./success.css";

interface Props {
  onSubmit: () => void;
}

export default function Success({ onSubmit }: Props) {
  return (
    <div className="soft-background">
      <section className="top">
        <h2>Success</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quam
          fugit inventore, tenetur illo quae beatae omnis exercitationem
          quibusdam officiis amet, dolorem ipsum? Deleniti molestiae vero
          distinctio est corrupti? Maiores.
        </p>
      </section>

      <hr />

      <section className="bottom">
        <Button onClick={onSubmit}>Restart</Button>
      </section>
    </div>
  );
}
