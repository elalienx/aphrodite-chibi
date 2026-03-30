// Node modules
import type { ReactNode } from "react";
import type { FormStore } from "@formisch/react";

// Project files
import extractLabel from "../../helpers/extractLabel";
import extractInput from "../../helpers/extractInput";
import "./input-field.css";

interface Props {
  /** An instance of a Formisch form. */
  form: FormStore;

  /** Unique identifier of the parent input group to make sure only one radio option is active. */
  id: string;

  /**  Content to display inside the input field. */
  children?: ReactNode;
}

export default function InputField({ form, id, children }: Props) {
  // Safeguard
  if (!children) return <p>Please add a Label and a InputField to get started</p>;

  // Components
  const label = extractLabel(children, id);
  const input = extractInput(children, id, form);

  return (
    <div className="input-field">
      {label}
      {input}
    </div>
  );
}
