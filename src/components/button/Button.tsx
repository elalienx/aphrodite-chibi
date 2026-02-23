import type { ReactNode } from "react";
import "./button.css";

interface Props {
  /**  Text and/or icon to display inside the button. */
  children: ReactNode;

  /** The function to execute when clicked. */
  onClick?: () => void;

  type?: string;
}

export default function Button({ children, onClick, type = "button" }: Props) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
