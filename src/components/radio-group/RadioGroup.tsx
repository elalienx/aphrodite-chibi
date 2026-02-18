import React from "react";

import RadioOption from "../radio-option/RadioOption";
import Label from "../label/Label";

import "./radio-group.css";

interface Props {
  /**  Content to display inside the radio group. */
  children?: React.ReactNode;
}

export default function RadioGroup({ children }: Props) {
  // Safeguard
  if (!children)
    return (
      <p>
        Please add an <code>Label</code> and at least two{" "}
        <code>RadioOption</code> to get started
      </p>
    );

  const childArray = React.Children.toArray(children);

  const label = childArray.find(
    (child) => React.isValidElement(child) && child.type === Label,
  );

  const options = childArray.filter(
    (child) => React.isValidElement(child) && child.type === RadioOption,
  );

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{options}</div>
    </div>
  );
}
