import React from "react";

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
        Please add a <code>Label</code> and at least two{" "}
        <code>RadioOption</code> to get started
      </p>
    );
  }

  const childArray = React.Children.toArray(children);

  const label = childArray.find(
    (child) => React.isValidElement(child) && child.type === Label,
  );

  // Filter and clone the RadioOptions to inject the 'id' prop
  const options = childArray
    .filter(
      (child) => React.isValidElement(child) && child.type === RadioOption,
    )
    .map((option) => {
      if (React.isValidElement(option)) {
        return React.cloneElement(option, { id } as any);
      }
      return option;
    });

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{options}</div>
    </div>
  );
}
