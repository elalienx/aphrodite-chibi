import type { ReactNode } from "react";

import "./field-validation-message.css";

interface Props {
  /**  Content to display inside the input field. */
  children: ReactNode;

  /** A unique identifier for accessibility errors. */
  ariaErrorId: string;
}

export default function FieldValidationMessage({ children, ariaErrorId }: Props) {
  return (
    <p id={ariaErrorId} className="field-validation-message">
      {children}
    </p>
  );
}