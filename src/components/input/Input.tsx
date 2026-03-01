import { useState, type FocusEvent } from "react";
import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import getCorrectMobileKeyboard from "./getCorrectMobileKeyboard";
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

type InputState = "default" | "focus" | "error" | "success";

export default function Input({ form, id, placeholder, type, suffix }: Props) {
  // Safeguards
  if (!form) return <p>This component requires a Formisch form and id</p>;
  if (!id) return <p>Please pass an id to know which field this input belongs too</p>;

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });
  const [fieldIsFocused, setFieldIsFocused] = useState(false);

  // Properties
  const debug = false;
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";
  const state: InputState = setState();

  // Methods
  function setState(): InputState {
    // Show error only if field is invalid AND (submitted OR user modified it)
    if (!field.isValid && (form.isSubmitted || field.isDirty)) {
      return "error";
    }

    // Focus state
    if (fieldIsFocused) {
      return "focus";
    }

    // Success state (valid, dirty, blurred)
    if (field.isValid && field.isDirty && !fieldIsFocused) {
      return "success";
    }

    // Default
    return "default";
  }

  function onFocus(event: FocusEvent<HTMLInputElement>) {
    field.props.onFocus(event);
    setFieldIsFocused(true);
  }

  function onBlur(event: FocusEvent<HTMLInputElement>) {
    field.props.onBlur(event);
    setFieldIsFocused(false);
  }

  return (
    <div className={`input-wrapper ${state} ${cssSuffix}`}>
      <input
        {...field.props}
        className="input"
        inputMode={mobileKeyboard}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {suffix && <span className="suffix">{suffix}</span>}
      {state === "error" && <p className="validation-message">{field.errors?.[0]}</p>}
    </div>
  );
}
