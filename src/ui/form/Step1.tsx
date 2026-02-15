import Button from "components/button/Button";
import Input from "components/Input";
import Label from "components/Label";

export default function Step1() {
  return (
    <div>
      <h2>Step 1</h2>

      {/* Name */}
      <Label>Name</Label>
      <Input />

      {/* Email */}
      <Label>Email</Label>
      <Input />

      {/* Phone */}
      <Label>Phone</Label>
      <Input />

      {/* Submit */}
      <Button>Next</Button>
    </div>
  );
}
