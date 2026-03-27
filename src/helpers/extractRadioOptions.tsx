import { type ReactNode, Children, isValidElement, cloneElement } from "react";
import type { FormStore } from "@formisch/react";

import RadioOption from "../components/radio-option/RadioOption";

export default function extractRadioOptions(
  children: ReactNode,
  id: string,
  form: FormStore,
) {
  return Children.map(children, (child) => {
    if (isValidElement(child) && child.type === RadioOption) {
      return cloneElement(child, { id, form } as any);
    }
  });
}
