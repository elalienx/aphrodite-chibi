import type { ReactNode } from "react";

interface Props {
  /** Text to display inside the alert. */
  children: ReactNode;
}

export default function RadioOption({ children }: Props) {
  return (
    <label>
      <input type="radio" />
      {children}
    </label>
  );
}
