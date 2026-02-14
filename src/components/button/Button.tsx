import type { ReactNode } from "react";
import "./button.css";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return <button className="button">{children}</button>;
}
