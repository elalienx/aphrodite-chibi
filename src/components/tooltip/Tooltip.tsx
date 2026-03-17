import "./tooltip.css";

interface Props {
  /** The text to display when clicking the tooltip. */
  text: string;
}

export default function Tooltip({ text }: Props) {
  return (
    <>
     {/* Icon */}
      <button className="tooltip-icon" popoverTarget="foobar">
        ℹ️
      </button>

     {/* Dialog window */}
      <div id="foobar" className="tooltip-popopver" popover="hint">
        {text}
      </div>
    </>
  );
}
