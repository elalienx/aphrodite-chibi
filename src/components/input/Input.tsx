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
  const mobileKeyboard = getMobileKeyboard(type);
  const styleMessage = validationMessage ? "has-validation-message" : "";
  const styleSuffix = suffix ? "has-suffix" : "";

  // Methods
  function getMobileKeyboard(type: string) {
    switch (type) {
      case "number":
        return "numeric";
      case "email":
        return "email";
      case "tel":
        return "tel";
      case "password":
      case "text":
      default:
        return "text";
    }
  }

  return (
    <>
      <div className="wrapper">
        <input
          className={`input ${styleSuffix} ${styleMessage}`}
          type={type}
          inputMode={mobileKeyboard}
          placeholder={placeholder}
        />
        {suffix && <span className={`suffix ${styleMessage}`}>{suffix}</span>}
      </div>
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </>
  );
}
