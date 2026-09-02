// Node modules
import { Children, isValidElement, type ReactNode } from "react";
import type { FormStore } from "@formisch/react";

// Project files
import Icon from "components/icon/Icon";
import InputText from "components/input/InputText";
import "./select.css";

interface Props {
  /** Unique identifier of the parent selector group to make sure only one selector option is active. */
  id?: string;

  /** The position where the popover will attach to the <Select>. */
  anchorId?: string;

  /** Text to display inside the selector option. */
  children: ReactNode;

  /** An instance of a Formisch form. */
  form?: FormStore;

  /** The text inside the user selected option. */
  activeText?: ReactNode;
}

function getTextContent(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return getTextContent(child.props.children);
      return "";
    })
    .join("");
}

export default function Select({ id, anchorId, children, form, activeText }: Props) {
  // Safeguards
  if (!id) return <p>Pass an id to know which field this input belongs</p>;
  if (!form) return <p>This component requires a Formisch form</p>;

  // Derived state
  const listId = `list-${id}`;
  const displayValue = activeText === undefined ? "" : getTextContent(activeText);
  const placeholder = getTextContent(children);

  // Methods
  function openOptions(): void {
    const list = document.getElementById(listId);
    if (list && !list.matches(":popover-open")) list.showPopover();
  }

  return (
    <div className="select" onClick={openOptions} onFocus={openOptions} style={{ anchorName: anchorId }}>
      <InputText
        displayValue={displayValue}
        form={form}
        id={id}
        placeholder={placeholder}
        readOnly
        showValidationMessage={false}
        type="text"
      />
      <Icon name={"chevron-down"} />
    </div>
  );
}
