// Node modules
import { Children, cloneElement } from "react";

// Project files
import Label from "components/label/Label";

/**
 * Extracts a Label component from the children's list and injects the prop id.
 *
 * @param {ReactNode} children - A list of React components or HTML nodes.
 * @param {string} id - Unique identifier of a form field.
 * @returns {ReactElement | null} Returns an Aphrodite Chibi <Label/> with an id.
 */
export default function extractLabel(children, id) {
  const reactComponents = Children.toArray(children);
  const label = reactComponents.find((child) => child.type === Label);

  return label && cloneElement(label, { id });
}
