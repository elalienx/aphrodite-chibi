import { Children, isValidElement, cloneElement, type ReactNode } from "react";

import Input from "components/input/Input";

export default function extractInput(children: ReactNode, id: string) {
  const reactComponents = Children.toArray(children);
  const input = reactComponents.find((child) => isValidElement(child) && child.type === Input);

  return input && isValidElement(input) ? cloneElement(input, { id } as any) : null;
}
