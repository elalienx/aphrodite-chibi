import getCorrectMobileKeyboard from "helpers/getCorrectMobileKeyboard";

import "./input.css";
import "./suffix.css";
import "./validation-message.css";

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
  const cssMessage = validationMessage ? "has-validation-message" : "";
  const cssSuffix = suffix ? "has-suffix" : "";

  return (
    <>
      <div className="input-and-suffix-wrapper">
        <input
          className={`input ${cssSuffix} ${cssMessage}`}
          type={type}
          inputMode={mobileKeyboard}
          placeholder={placeholder}
        />
        {suffix && <span className={`suffix ${cssMessage}`}>{suffix}</span>}
      </div>
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </>
  );
}
