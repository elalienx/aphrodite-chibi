import type { ReactNode } from "react";
import "./button.css";

interface Props {
  /**  Text and/or icon to display inside the button. */
  children: ReactNode;

  /** The function to execute when clicked. */
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
