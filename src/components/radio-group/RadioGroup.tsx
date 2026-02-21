import React, { Children, isValidElement, cloneElement } from "react";

import RadioOption from "../radio-option/RadioOption";
import Label from "../label/Label";

import "./radio-group.css";

interface Props {
  /** Content to display inside the radio group. */
  children?: React.ReactNode;

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

  const childArray = Children.toArray(children);
  const label = childArray.find((child) => isValidElement(child) && child.type === Label);
  const options = childArray
    .filter((child) => isValidElement(child) && child.type === RadioOption)
    .map((option) => {
      if (isValidElement(option)) {
        return cloneElement(option, { id } as any);
      }
    });

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{options}</div>
    </div>
  );
}
