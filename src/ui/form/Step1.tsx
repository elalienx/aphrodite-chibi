import Button from "components/button/Button";
import Input from "components/Input";
import Label from "components/Label";

import "styles/style.css";
import "./step-1.css";

export default function Step1() {
  return (
    <div id="step-1" className="soft-background">
      <header>
        <h2>Step 1</h2>
      </header>

      <section>
        {/* Name */}
        <Label>Name</Label>
        <Input />

        {/* Email */}
        <Label>Email</Label>
        <Input />

        {/* Phone */}
        <Label>Phone</Label>
        <Input />
      </section>

      <hr />

      {/* Submit */}
      <footer>
        <Button>Next</Button>
      </footer>
    </div>
  );
}
