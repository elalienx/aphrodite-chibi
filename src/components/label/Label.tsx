import type { ReactNode } from "react";

import "./label.css";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function Label({ children }: Props) {
  return <label className="label">{children}</label>;
}
