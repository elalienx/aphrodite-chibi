import type { ReactNode } from "react";

interface Props {
  /**  Content to display inside the input field. */
  children?: ReactNode;

  /** A unique identifier for accessibility errors. */
  ariaErrorId: string;
}

export default function FieldValidationMessage({
  children,
  ariaErrorId,
}: Props) {
  return (
    <div id={ariaErrorId} className="field-error-message">
      <div className="pointy-arrow">{/* Design done using CSS */}</div>
      <p>{children}</p>
    </div>
  );
}
