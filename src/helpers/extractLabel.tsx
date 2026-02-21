import { Children, isValidElement, type ReactNode } from "react";

import Label from "components/label/Label";

export default function extractLabel(children: ReactNode) {
  const reactComponents = Children.toArray(children);

  return reactComponents.find((child) => isValidElement(child) && child.type === Label);
}
