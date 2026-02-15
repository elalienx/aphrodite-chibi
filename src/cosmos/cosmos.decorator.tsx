// Node modules
import type { ReactNode } from "react";

// Project files
import "./cosmos-style.css"; // To center tested components on screen

interface Props {
  children: ReactNode;
}

export default function decorator({ children }: Props) {
  return <div id="cosmos">{children}hello</div>;
}
