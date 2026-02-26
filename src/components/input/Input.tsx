import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import getCorrectMobileKeyboard from "../../helpers/getCorrectMobileKeyboard";

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
  // Safeguards
  if (!form) return <p>This component requires a Formisch form and id</p>;
  if (!id) return <p>Please pass an id to know which field this input belongs too</p>;

  // State
  const field = useField(form, { path: [id] });

  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);

  // Validations
  const mainError = field.errors?.[0] ?? null;
  const formFailedSubmission = form.isSubmitted && !form.isValid;
  const hasFieldError = !!field.errors?.[0];
  const isConfirmedValid = form.isSubmitted && !hasFieldError;

  // Only show error if:
  // 1. Form failed submission AND this field has an error
  // 2. OR field is touched AND has an error
  const showError = (formFailedSubmission && hasFieldError) || (field.isDirty && hasFieldError);

  // Design
  const cssSuffix = suffix ? "has-suffix" : "";
  const cssValidationMessage = showError ? "has-validation-message" : "";
  const cssSuccess = isConfirmedValid ? "is-valid" : "";

  return (
    <>
      <p>form.isSubmitted {form.isSubmitted ? "y" : "n"}</p>
      <div className={`input-wrapper ${cssSuffix} ${cssValidationMessage} ${cssSuccess}`}>
        <input {...field.props} className="input" inputMode={mobileKeyboard} placeholder={placeholder} type={type} />
        {suffix && <span className="suffix">{suffix}</span>}
        {showError && <p className="validation-message">{mainError}</p>}
      </div>
    </>
  );
}
