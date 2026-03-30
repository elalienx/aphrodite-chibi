// Node modules
import type { ReactNode } from "react";
import type { FieldStore } from "@formisch/react";

// Project files
import "./radio-option.css";

interface Props {
  /** An instance of a Formisch form. */
  field?: FieldStore;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id?: string;

  /** Text to display inside the radio option. */
  children: ReactNode;

  /** The value sent to the database. */
  value: string | number;
}

export default function RadioOption({ field, id, children, value }: Props) {
  // Safeguard
  if (!field) return <p>This component requires a Formisch field</p>;
  if (!id) return <p>Pass an id to know which field this input belongs</p>;

  // Properties
  const labelId = `${id}_${value}`;

  return (
    <label className="radio-option" id={labelId}>
      <input {...field.props} checked={field.input === value} name={id} type="radio" value={value} />
      {children}
    </label>
  );
}
