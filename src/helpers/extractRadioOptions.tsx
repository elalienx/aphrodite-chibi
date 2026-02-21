import { type ReactNode, Children, isValidElement, cloneElement } from "react";

import RadioOption from "components/radio-option/RadioOption";

export default function extractRadioOptions(children: ReactNode, id: string) {
  return Children.map(children, (child) => {
    if (isValidElement(child) && child.type === RadioOption) {
      return cloneElement(child, { id } as any);
    }
  });
}
