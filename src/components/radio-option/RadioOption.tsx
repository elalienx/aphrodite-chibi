import type { ReactNode } from "react";

import "./radio-option.css";

interface Props {
  /** Text to display inside the radio option. */
  label: string;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id: string;
}

export default function RadioOption({ label, id }: Props) {
  return (
    <label className="radio-option">
      <input type="radio" name={id} />
      {label}
    </label>
  );
}
