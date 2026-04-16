// Node modules
import { Children, type ReactNode, cloneElement, isValidElement } from "react";
import type { FormStore } from "@formisch/react";

// Project files
import Input from "components/input/Input";

export default function extractInput(children: ReactNode, id: string, form: FormStore) {
  const reactComponents = Children.toArray(children);
  const input = reactComponents.find((child) => isValidElement(child) && child.type === Input);

  return input && isValidElement(input) ? cloneElement(input, { form, id } as any) : null;
}
