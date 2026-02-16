import type { ReactNode } from "react";

import "./input-field.css";

interface Props {
  /** Text to display inside the alert. */
  children?: ReactNode;
}

export default function InputField({ children }: Props) {
  // Safeguard
  if (!children)
    return (
      <p>
        Please add an <code>Label</code> and a <code>InputField</code> to get
        started
      </p>
    );

  return <div className="input-field">{children}</div>;
}
