// Node modules
import { Children, cloneElement } from "react";

// Project files
import RadioOption from "components/radio-option/RadioOption";

/**
 * Extracts a RadioOption component from the children's list and injects the props id and field.
 *
 * @param {ReactNode} children - A list of React components or HTML nodes.
 * @param {string} id - Unique identifier of a form field.
 * @param {FieldStore} field - An instance of a Formisch field.
 * @returns {ReactElement | null} Returns an Aphrodite Chibi <RadioOption> with an id and field.
 */
export default function extractRadioOptions(children, id, field) {
  return Children.map(children, (child) => {
    if (child.type === RadioOption) return cloneElement(child, { id, field });
  });
}
