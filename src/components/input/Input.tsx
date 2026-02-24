import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import getCorrectMobileKeyboard from "helpers/getCorrectMobileKeyboard";

import "./input-type-number.css";
import "./input-wrapper-design.css";
import "./input-wrapper-layout.css";
import "./input-wrapper-state.css";

interface Props {
  /** An instance of a Formisch form. */
  form: FormStore;

  /** Unique identifier of a form field. */
  id: string;

  /** An example value to show when the field is empty. */
  placeholder?: string;

  /** Decides what kind of keyboard to show on mobile. This does not affect validation. Handle that separately. */
  type: "text" | "number" | "email" | "tel" | "password";

  /** Decoration text on the right side of the input. Used to indicate a currency or measurment unit. */
  suffix?: string;
}

export default function Input({ form, id, placeholder, type, suffix }: Props) {
  // State
  const field = useField(form, { path: [id] });

  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = field.errors ? "has-validation-message" : "";
  const cssIsValid = field.isValid && field.isDirty ? "is-valid" : "";

  return (
    <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage} ${cssIsValid}`}>
      <input {...field.props} className="input" inputMode={mobileKeyboard} placeholder={placeholder} type={type} />
      {suffix && <span className="suffix">{suffix}</span>}
      {field.errors && <p className="validation-message">{field.errors[0]}</p>}
    </div>
  );
}
