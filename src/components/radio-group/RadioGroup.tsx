import { Children, isValidElement, cloneElement } from "react";
import type { ReactNode } from "react";

import RadioOption from "../radio-option/RadioOption";
import Label from "../label/Label";

import "./radio-group.css";

interface Props {
  /** Content to display inside the radio group. */
  children?: ReactNode;

  /** Unique identifier of the parent radio group to make sure only one radio option is active. */
  id: string;
}

export default function RadioGroup({ children, id }: Props) {
  // Safeguard
  if (!children) {
    return (
      <p>
        Please add a <code>Label</code> and at least two <code>RadioOption</code> to get started
      </p>
    );
  }

  const label = Children.toArray(children).find((child) => isValidElement(child) && child.type === Label);
  const radioOptions = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === RadioOption) {
      return cloneElement(child, { id } as any);
    }
  });

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{radioOptions}</div>
    </div>
  );
}
