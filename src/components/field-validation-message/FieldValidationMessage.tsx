import type { ReactNode } from "react";

import "./field-validation-message.css";

interface Props {
  /**  Content to display inside the input field. */
  children?: ReactNode;

  /** A unique identifier for accessibility errors. */
  ariaErrorId: string;
}

export default function FieldValidationMessage({ children, ariaErrorId }: Props) {
  return (
    <div id={ariaErrorId} className="field-validation-message">
      <div className="pointy-arrow">{/* Design done using CSS */}</div>
      <p className="content">{children}</p>
    </div>
  );
}
