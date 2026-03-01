import type { ReactNode } from "react";

import "./radio-group.css";
import extractLabel from "../../helpers/extractLabel";
import extractRadioOptions from "../../helpers/extractRadioOptions";

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

  // Components
  const label = extractLabel(children, id);
  const radioOptions = extractRadioOptions(children, id);

  return (
    <div className="radio-group">
      {label}
      <div className="radio-options">{radioOptions}</div>
    </div>
  );
}
