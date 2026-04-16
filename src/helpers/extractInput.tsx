import type { FormStore } from "@formisch/react";
import Input from "components/input/Input";
import { Children, isValidElement, cloneElement, type ReactNode } from "react";

export default function extractInput(children: ReactNode, id: string, form: FormStore) {
  const reactComponents = Children.toArray(children);
  const input = reactComponents.find((child) => isValidElement(child) && child.type === Input);

  return input && isValidElement(input) ? cloneElement(input, { id, form } as any) : null;
}
