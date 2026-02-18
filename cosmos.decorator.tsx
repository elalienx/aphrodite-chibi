// Node modules
import type { ReactNode } from "react";

// Project files
import "./src/cosmos/cosmos-style.css"; // To center tested components on screen
import "./src/styles/style.css";

interface Props {
  children: ReactNode;
}

export default function decorator({ children }: Props) {
  return <div id="cosmos">{children}</div>;
}
