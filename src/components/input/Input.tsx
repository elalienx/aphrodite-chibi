import getCorrectMobileKeyboard from "helpers/getCorrectMobileKeyboard";

import "./input-wrapper-layout.css";
import "./input-wrapper-state.css";
import "./input-wrapper-design.css";
import "./input-type-number.css";

interface Props {
  /** An example value to show when the field is empty. */
  placeholder?: string;

  /** Decides what kind of keyboard to show on mobile. This does not affect validation. Handle that separately. */
  type: "text" | "number" | "email" | "tel" | "password";

  /** Decoration text on the right side of the input. Used to indicate a currency or measurment unit. */
  suffix?: string;

  /** Text to display if the form validation encountered an issue. */
  validationMessage?: string;
}

export default function Input({ placeholder, type, validationMessage, suffix }: Props) {
  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = validationMessage ? "has-validation-message" : "";

  return (
    <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage}`}>
      <input className="input" type={type} inputMode={mobileKeyboard} placeholder={placeholder} />
      {suffix && <span className="suffix">{suffix}</span>}
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </div>
  );
}
