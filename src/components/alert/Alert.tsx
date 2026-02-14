import type { ReactNode } from "react";
import "./alert.css";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function Alert({ children }: Props) {
  return (
    <div className="alert">
      <span className="icon">ℹ️</span>
      {children}
    </div>
  );
}
