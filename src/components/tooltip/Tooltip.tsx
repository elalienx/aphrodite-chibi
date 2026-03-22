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
  const anchor = `--${id}`;

  return (
    <>
      {/* Info button */}
      <button className="info-button" popoverTarget={id} style={{ anchorName: anchor }}>
        ℹ️
      </button>

      {/* Popopver */}
      <div id={id} className="popover" popover="auto" style={{ positionAnchor: anchor }}>
        <div id={id} className="tooltip">
          <div className="content soft-shadow">{text}</div>
          <div className="arrow ">{/* empty on purpose */}</div>
        </div>
      </div>
    </>
  );
}
