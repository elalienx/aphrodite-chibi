import { type ReactNode, Children, isValidElement, cloneElement } from "react";
import type { FieldStore } from "@formisch/react";

import RadioOption from "../components/radio-option/RadioOption";

export default function extractRadioOptions(field: FieldStore, id: string, children: ReactNode) {
  return Children.map(children, (child) => {
    if (isValidElement(child) && child.type === RadioOption) {
      return cloneElement(child, { field, id } as any);
    }
  });
}
