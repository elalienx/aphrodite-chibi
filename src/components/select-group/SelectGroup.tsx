// Node modules
import { Children, isValidElement, useRef, type KeyboardEvent, type ReactNode } from "react";
import { useField, type FormStore } from "@formisch/react";

// Project files
import Label from "components/label/Label";
import Select from "components/select/Select";
import SelectOption from "components/select-option/SelectOption";
import extractComponent from "helpers/extractComponent";
import extractOptions from "helpers/extractOptions";
import "./select-group.css";

const typeaheadResetTime = 500;

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (isValidElement<{ children?: ReactNode }>(node)) return getTextContent(node.props.children);

  return Children.toArray(node).map(getTextContent).join("");
}

interface Props {
  /** Unique identifier of the parent input group to make sure only one select option is active. */
  id: string;

  /**  Content to display inside the select. */
  children?: ReactNode;

  /** An instance of a Formisch form. */
  form: FormStore;

  /** All the possible tooltips hints available in this form. */
  hints?: Record<string, ReactNode>;
}

export default function SelectGroup({ id, children, form, hints }: Props) {
  // Safeguards
  if (!children) return <p>Please add a Label and at least two SelectOption to get started</p>;
  if (!form) return <p>Please add a Formisch form to get started</p>;

  // Local state
  const field = useField(form, { path: [id] });
  const typeahead = useRef({ query: "", lastKeyTime: 0 });

  // Derived state
  const anchorId = `--anchor-${id}`; // Requires "--" to work properly.
  const listId = `list-${id}`;

  // Components
  const hint = hints?.[id];
  const label = extractComponent({ component: Label, extractFrom: children, props: { id, hint } });
  const selectOptions = extractOptions({ component: SelectOption, extractFrom: children, props: { id, field } });
  const activeOption = selectOptions.find((item) => String(item.props.value) === field.input);
  const activeText = activeOption && activeOption.props.children;
  const selectProps = { id, anchorId, activeText, form };
  const select = extractComponent({ component: Select, extractFrom: children, props: selectProps });

  // Methods
  function selectOptionByTyping(event: KeyboardEvent<HTMLDivElement>): void {
    const target = event.target;

    // Only handle printable characters typed into this select's trigger.
    if (
      !(target instanceof HTMLInputElement) ||
      target.id !== id ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.nativeEvent.isComposing ||
      event.key.length !== 1 ||
      !event.key.trim()
    )
      return;

    const currentTime = Date.now();
    const previousQuery =
      currentTime - typeahead.current.lastKeyTime <= typeaheadResetTime ? typeahead.current.query : "";
    const query = `${previousQuery}${event.key}`.toLocaleLowerCase();
    typeahead.current = { query, lastKeyTime: currentTime };

    const matchingOption = selectOptions.find((option) =>
      getTextContent(option.props.children).trim().toLocaleLowerCase().startsWith(query),
    );

    if (!matchingOption) return;

    event.preventDefault();
    field.onChange(String(matchingOption.props.value));
  }

  return (
    <div className="select-group" onKeyDown={selectOptionByTyping}>
      {label}
      {select}
      <div id={listId} className="select-list" popover="auto" style={{ positionAnchor: anchorId }}>
        {selectOptions}
      </div>
    </div>
  );
}
