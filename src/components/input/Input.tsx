import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

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
  // Global state
  const field = useField(form, { path: [id] });

  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);

  const mainError = field.errors?.[0];
  const failedValidation = field.isTouched && field.isDirty && field.errors;

  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = failedValidation ? "has-validation-message" : "";
  const cssIsValid = field.isTouched && field.isDirty && field.isValid ? "is-valid" : "";

  const showDebug = true;

  return (
    <>
      {/* This can be a React component */}
      {showDebug && (
        <ul>
          <li>Is dirty? {field.isDirty ? "yes" : "no"}</li>
          <li>Is touched? {field.isTouched ? "yes" : "no"}</li>
          <li>Is valid? {field.isValid ? "yes" : "no"} (forms start as valid by default)</li>
          <li>Has errors? {field.errors ? "yes" : "no"}</li>
          <li>Number of errors {field.errors ? field.errors.length : "0"}</li>
          <li>Main error: {mainError ? mainError : "no errors yet"}</li>
          <li>Failed validation: {failedValidation ? "failed" : "pass"}</li>
        </ul>
      )}

      <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage} ${cssIsValid}`}>
        <input {...field.props} className="input" inputMode={mobileKeyboard} placeholder={placeholder} type={type} />
        {suffix && <span className="suffix">{suffix}</span>}
        {failedValidation && <p className="validation-message">{mainError}</p>}
      </div>
    </>
  );
}
