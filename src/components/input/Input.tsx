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
  if (!id)
    return <p>Please pass an id to know which field this input belongs too</p>;

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });
  const [state, setState] = useState("default");

  // Properties
  const mobileKeyboard = getCorrectMobileKeyboard(type);
  const cssSuffix = suffix ? "has-suffix" : "";

  useEffect(() => {
    if (form.isSubmitted && !field.isValid) {
      setState((_prev) => "error");
    }
  }, [form.isSubmitted, field.isValid]);

  // Methods
  function onFocus(event: FocusEvent<HTMLInputElement>) {
    field.props.onFocus(event);

    // Safeguard
    if (state === "error" || state === "success") return;

    setState((_prev) => "focus");
  }

  function onBlur(event: FocusEvent<HTMLInputElement>) {
    field.props.onBlur(event);

    if (!field.isValid) {
      setState((_prev) => "error");
      return;
    }

    if (field.isDirty && !field.isValid) {
      setState((_prev) => "error");
      return;
    }

    if (!field.isValid) {
      setState((_prev) => "success");
      return;
    }

    setState("default");
  }

  return (
    <div className={`input-wrapper ${state} ${cssSuffix}`}>
      <input
        {...field.props}
        className="input"
        id={id}
        inputMode={mobileKeyboard}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
      />
      {suffix && <span className="suffix">{suffix}</span>}
      {state === "error" && (
        <p className="validation-message">{field.errors?.[0]}</p>
      )}
      field.isValid: {field.isValid ? "y" : "n"}
    </div>
  );
}
