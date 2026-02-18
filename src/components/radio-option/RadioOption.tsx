import type { ReactNode } from "react";

import "./radio-option.css";

interface Props {
  /** Text to display inside the radio option. */
  label: string;
}

export default function RadioOption({ label }: Props) {
  return (
    <label className="radio-option">
      <input type="radio" />
      {label}
    </label>
  );
}
