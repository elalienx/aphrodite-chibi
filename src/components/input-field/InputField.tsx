import type { ReactNode } from "react";
import type { FormStore } from "@formisch/react";

import "./input-field.css";
import extractLabel from "../../helpers/extractLabel";
import extractInput from "../../helpers/extractInput";

interface Props {
  /**  Content to display inside the input field. */
  children?: ReactNode;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id: string;

  /** An instance of a Formisch form. */
  form: FormStore;
}

export default function InputField({ children, id, form }: Props) {
  // Safeguard
  if (!children)
    return (
      <p>
        Please add an <code>Label</code> and a <code>InputField</code> to get started
      </p>
    );

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
