import Button from "components/button/Button";
import Input from "components/Input";

export default function Step1() {
  return (
    <div>
      <h2>Step 1</h2>

      {/* Name */}
      <Input />

      {/* Email */}
      <Input />

      {/* Phone */}
      <Input />

      {/* Submit */}
      <Button>Next</Button>
    </div>
  );
}
