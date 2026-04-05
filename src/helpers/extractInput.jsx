// Node modules
import { Children, cloneElement } from "react";

// Project files
import Input from "components/input/Input";

/**
 * Extracts an Input component from the children's list and injects the prop id and form.
 *
 * @param {ReactNode} children - A list of React components or HTML nodes.
 * @param {string} id - Unique identifier of a form field.
 * @param {FormStore} form - An instance of a Formisch form.
 * @returns {ReactElement | null} Returns an Aphrodite Chibi <Input/> with an id and form.
 */
export default function extractInput(children, id, form) {
  const reactComponents = Children.toArray(children);
  const input = reactComponents.find((child) => child.type === Input);

  return input && cloneElement(input, { id, form });
}
