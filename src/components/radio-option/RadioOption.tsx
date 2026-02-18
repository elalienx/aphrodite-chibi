import type { ReactNode } from "react";

import "./radio-option.css";

interface Props {
  /** Text to display inside the radio option. */
  children: ReactNode;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id: string;
}

export default function RadioOption({ children, id }: Props) {
  return (
    <label className="radio-option">
      <input type="radio" name={id} />
      {children}
    </label>
  );
}
