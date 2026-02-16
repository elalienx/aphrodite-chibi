import type { ReactNode } from "react";

import "./radio-option.css";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function RadioOption({ children }: Props) {
  return (
    <label className="radio-option">
      <input type="radio" />
      {children}
    </label>
  );
}
