import type { ReactNode } from "react";
import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import extractLabel from "../../helpers/extractLabel";
import extractRadioOptions from "../../helpers/extractRadioOptions";
import "./radio-group.css";

interface Props {
  /** An instance of a Formisch form. */
  form: FormStore;

  /** Unique identifier of the parent input group to make sure only one radio option is active. */
  id: string;

  /**  Content to display inside the input field. */
  children?: ReactNode;
}

export default function RadioGroup({ form, id, children }: Props) {
  // Safeguard
  if (!children) {
    return (
      <p>
        Please add a <code>Label</code> and at least two{" "}
        <code>RadioOption</code> to get started
      </p>
    );
  }

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });

  // Properties
  const ariaErrorId = `aria-error-${id}`;

  // Components
  const label = extractLabel(children, id);
  const radioOptions = extractRadioOptions(children, id, form);

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{radioOptions}</div>

      {field.errors && (
        <p id={ariaErrorId} className="generic-validation-message">
          {field.errors?.[0]}
        </p>
      )}
    </div>
  );
}
