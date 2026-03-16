import { useEffect, useState, type FocusEvent } from "react";
import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import getCorrectMobileKeyboard from "./getCorrectMobileKeyboard";
import "./input-type-number.css";
import "./input-wrapper-design.css";
import "./input-wrapper-layout.css";
import "./input-wrapper-state.css";

interface Props {
  /** An instance of a Formisch form. */
  form?: FormStore;

  /** Unique identifier of a form field. */
  id?: string;

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
  if (!id) return <p>Pass an id to know which field this input belongs</p>;

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });
  const [inputState, setInputstate] = useState<InputState>("default");
  const [fieldIsFocused, setFieldIsFocused] = useState(false);

  // Properties
  const ariaErrorName = `aria-error-${id}`;
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";

  // Methods
  useEffect(
    function calculateInputState() {
      // Show error after form submission
      if (form.isSubmitted && !field.isValid) {
        setInputstate("error");
        return;
      }

      // If the field already had an error, keep it even when focusing again
      if (fieldIsFocused && inputState === "error") {
        setInputstate("error");
        return;
      }

      // If the field already had a success, keep it even when focusing again
      if (fieldIsFocused && inputState === "success") {
        setInputstate("success");
        return;
      }

      // While editing a fresh field, stay in focus state
      if (fieldIsFocused) {
        setInputstate("focus");
        return;
      }

      // Default before interaction
      if (!field.isDirty) {
        setInputstate("default");
        return;
      }

      // Validate success
      if (field.isValid) {
        setInputstate("success");
        return;
      }

      // Validate failure
      if (!field.isValid) {
        setInputstate("error");
        return;
      }
    },
    [
      fieldIsFocused,
      form.isSubmitted,
      field.isDirty,
      field.isValid,
      inputState,
    ],
  );

  function onFocus(event: FocusEvent<HTMLInputElement>) {
    field.props.onFocus(event);
    setFieldIsFocused(true);
  }

  function onBlur(event: FocusEvent<HTMLInputElement>) {
    field.props.onBlur(event);
    setFieldIsFocused(false);
  }

  return (
    <div className={`input-wrapper ${inputState} ${cssSuffix}`}>
      <input
        {...field.props}
        id={id}
        aria-errormessage={ariaErrorName}
        aria-invalid={!!field.errors}
        className="input"
        inputMode={mobileKeyboard}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
      />
      {suffix && <span className="suffix">{suffix}</span>}
      {inputState === "error" && (
        <p id={ariaErrorName} className="validation-message">
          {field.errors?.[0]}
        </p>
      )}
    </div>
  );
}
