import type { ReactNode } from "react";

import "./input-field.css";

interface Props {
  /**  Content to display inside the input field. */
  children?: ReactNode;

  /** Information shown to the user when the validatio runs. */
  validationMessage?: string;
}

export default function InputField({ children, validationMessage }: Props) {
  // Safeguard
  if (!children)
    return (
      <p>
        Please add an <code>Label</code> and a <code>InputField</code> to get started
      </p>
    );

  return (
    <div className="input-field">
      {children}

      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </div>
  );
}
