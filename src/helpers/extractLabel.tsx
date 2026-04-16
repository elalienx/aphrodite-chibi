// Node modules
import { Children, type ReactNode, cloneElement, isValidElement } from "react";

// Project files
import Label from "components/label/Label";

export default function extractLabel(children: ReactNode, id: string) {
  const reactComponents = Children.toArray(children);
  const label = reactComponents.find((child) => isValidElement(child) && child.type === Label);

  return label && isValidElement(label) ? cloneElement(label, { id } as any) : null;
}
