import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import InputField from "../../components/input-field/InputField";

export default {
  NoErrors: (
    <InputField>
      <Label>Whats your full name?</Label>
      <Input type="text" placeholder="Ja" />
    </InputField>
  ),
  WithErrors: (
    <InputField validationMessage="foobar">
      <Label>Where do you live?</Label>
      <Input type="text" placeholder="Ja" />
    </InputField>
  ),
};
