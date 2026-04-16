// Node modules
import { Children, type ReactNode, cloneElement, isValidElement } from "react";
import type { FieldStore } from "@formisch/react";

// Project files
import RadioOption from "components/radio-option/RadioOption";

export default function extractRadioOptions(children: ReactNode, id: string, field: FieldStore) {
  return Children.map(children, (child) => {
    if (isValidElement(child) && child.type === RadioOption) {
      return cloneElement(child, { field, id } as any);
    }
  });
}
