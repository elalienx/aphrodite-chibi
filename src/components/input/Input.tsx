import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";
import * as v from "valibot";

import getCorrectMobileKeyboard from "helpers/getCorrectMobileKeyboard";

import "./input-wrapper-layout.css";
import "./input-wrapper-state.css";
import "./input-wrapper-design.css";
import "./input-type-number.css";

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
  // Local state
  const field = useField(form, { path: [id] });

  // Properties
  const firstError = field.errors?.[0];
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = firstError ? "has-validation-message" : "";
  const cssIsValid = field.isTouched && field.isValid ? "is-valid" : "";

  function onBlur() {
    if (!field.isValid) {
      alert(`error on ${field.props.name}`);
    }
  }

  return (
    <>
      <u style={{ textDecoration: "none" }}>
        <li>Is dirty? {field.isDirty ? "yes" : "no"}</li>
        <li>Is touched? {field.isTouched ? "yes" : "no"}</li>
        <li>
          Is valid? {field.isValid ? "yes" : "no"} <small>(looks like forms start on valid by default)</small>
        </li>
        <li>Has errors? {field.errors ? "yes" : "no"}</li>
        <li>Number of errors {field.errors ? field.errors.length : "0"}</li>
      </u>

      <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage} ${cssIsValid}`}>
        <input {...field.props} className="input" inputMode={mobileKeyboard} placeholder={placeholder} type={type} />
        {suffix && <span className="suffix">{suffix}</span>}
        {firstError && <p className="validation-message">{firstError}</p>}
      </div>
    </>
  );
}
