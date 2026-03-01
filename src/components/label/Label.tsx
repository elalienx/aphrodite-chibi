import type { ReactNode } from "react";
import "./label.css";

interface Props {
  /** Text to display inside the label. */
  children: ReactNode;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id?: string;
}

export default function Label({ children, id }: Props) {
  // Safeguard
  if (!id)
    return (
      <p>
        Please pass an <code>id</code> to connect this label to a formulary field
      </p>
    );

  return (
    <label className="label" htmlFor={id}>
      @{id}@ {children}
    </label>
  );
}
