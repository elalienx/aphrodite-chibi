import type { ReactNode } from "react";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function Label({ children }: Props) {
  return <label>{children}</label>;
}
