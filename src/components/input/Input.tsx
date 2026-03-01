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
  const field = useField(form, { path: [id] });
  const [isFocused, setIsFocused] = useState(false);

  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);

  // State helpers
  const hasError = !!field.errors?.length;
  const hasUserTyped = field.isDirty;

  // Validation logic
  const shouldValidate = !isFocused && hasUserTyped;

  // Unified state logic
  let state: InputState = "default";

  if (isFocused) {
    state = "focus";
  } else if (shouldValidate) {
    state = hasError ? "error" : "success";
  }

  const cssState = state !== "default" ? `is-${state}` : "";
  const cssSuffix = suffix ? "has-suffix" : "";

  // Event handlers
  function onFocus(event: FocusEvent<HTMLInputElement>) {
    field.props.onFocus(event);
    setIsFocused(true);
  }

  function onBlur(event: FocusEvent<HTMLInputElement>) {
    field.props.onBlur(event);
    setIsFocused(false);
  }

  return (
    <div className={`input-wrapper ${cssSuffix} ${cssState}`}>
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
