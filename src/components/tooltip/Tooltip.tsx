import "./info-button.css";
import "./tooltip.css";

interface Props {
  /** Unique identifier of the tooltip. */
  id: string;

  /** The text to display when clicking the tooltip. */
  text: string;
}

export default function Tooltip({ id, text }: Props) {
  // Properties
  const anchorName = `--${id}`;

  return (
    <>
      {/* Info button */}
      <button className="info-button" popoverTarget={id} style={{ anchorName: anchorName }}>
        ℹ️
      </button>

      {/* Popopver */}
      <div id={id} className="tooltip" popover="auto" style={{ positionAnchor: anchorName }}>
        <div className="content">{text}</div>
        <div className="arrow ">{/* empty on purpose */}</div>
      </div>
    </>
  );
}
