import type { ReactNode } from "react";
import { useField } from "@formisch/react";
import type { FormStore } from "@formisch/react";

import "./radio-option.css";

interface Props {
  /** An instance of a Formisch form. */
  form?: FormStore;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id?: string;

  /** Text to display inside the radio option. */
  children: ReactNode;

  /** The value sent to the database. */
  value: string | number;
}

export default function RadioOption({ form, id, children, value }: Props) {
  // Safeguard
  if (!form) return <p>This component requires a Formisch form and id</p>;
  if (!id) return <p>Pass an id to know which field this input belongs</p>;

  // State
  // @ts-ignore
  const field = useField(form, { path: [id] });

  // Properties
  const labelId = `${id}_${value}`;

  return (
    <label className="radio-option" id={labelId}>
      <input
        {...field.props}
        checked={field.input === value}
        name={id}
        type="radio"
        value={value}
      />
      {children}
    </label>
  );
}
