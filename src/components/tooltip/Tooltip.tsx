import "./tooltip.css";

interface Props {
  /** Unique identifier of the tooltip. */
  id: string;

  /** The text to display when clicking the tooltip. */
  text: string;
}

export default function Tooltip({ id, text }: Props) {
  // Properties
  const cssAnchorId = `--${id}`;

  return (
    <>
      {/* Icon */}
      <button className="tooltip-icon" popoverTarget={id} style={{ anchorName: cssAnchorId }}>
        ℹ️
      </button>

      {/* Dialog window */}
      <div id={id} className="tooltip-popopver" popover="auto" style={{ positionAnchor: cssAnchorId }}>
        {text}
      </div>
    </>
  );
}
