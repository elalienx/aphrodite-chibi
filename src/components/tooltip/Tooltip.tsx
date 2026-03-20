import "./info-button.css";
import "./popover.css";
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
      <button className="info-button" popoverTarget={id} style={{ anchorName: cssAnchorId }}>
        ℹ️
      </button>

      {/* Dialog window */}
      <div id={id} className="popover" popover="auto" style={{ positionAnchor: cssAnchorId }}>
        <div className="tooltip">
          <div className="content soft-shadow">{text}</div>
          <div className="arrow ">{/* empty on purpose */}</div>
        </div>
      </div>
    </>
  );
}
