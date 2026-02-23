import { useField, type FormStore } from "@formisch/react";

import getCorrectMobileKeyboard from "helpers/getCorrectMobileKeyboard";

import "./input-wrapper-layout.css";
import "./input-wrapper-state.css";
import "./input-wrapper-design.css";
import "./input-type-number.css";

interface Props {
  form: FormStore;
  id: string;

  /** An example value to show when the field is empty. */
  placeholder?: string;

  /** Decides what kind of keyboard to show on mobile. This does not affect validation. Handle that separately. */
  type: "text" | "number" | "email" | "tel" | "password";

  /** Decoration text on the right side of the input. Used to indicate a currency or measurment unit. */
  suffix?: string;

  /** Text to display if the form validation encountered an issue. */
  validationMessage?: string;
}

export default function Input({ form, id, placeholder, type, suffix, validationMessage }: Props) {
  // Local state
  const field = useField(form, { path: [id] });

  // Properties
  const fieldValue = typeof field.input === "string" ? field.input : "";
  const firstError = field.errors?.[0];
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = firstError ? "has-validation-message" : "";

  return (
    <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage}`}>
      <input
        {...field.props}
        className="input"
        inputMode={mobileKeyboard}
        placeholder={placeholder}
        type={type}
        value={fieldValue}
      />
      {suffix && <span className="suffix">{suffix}</span>}
      {firstError && <p className="validation-message">{firstError}</p>}
    </div>
  );
}
