import type { ReactNode } from "react";
import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import FieldValidationMessage from "../../components/field-validation-message/FieldValidationMessage";
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
  if (!form) return <p>Please add a Formisch form to get started</p>;
  if (!children) return <p>Please add a Label and at least two RadioOption to get started</p>;

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });

  // Properties
  const ariaErrorId = `aria-error-${id}`;

  // Components
  const label = extractLabel(children, id);
  const radioOptions = extractRadioOptions(field, id, children);

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{radioOptions}</div>
      {field.errors && <FieldValidationMessage ariaErrorId={ariaErrorId}>{field.errors?.[0]}</FieldValidationMessage>}
    </div>
  );
}
