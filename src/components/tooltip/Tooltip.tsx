import "./tooltip.css";

interface Props {
    id: string;

  /** The text to display when clicking the tooltip. */
  text: string;
}

export default function Tooltip({id, text }: Props) {
  return (
    <>
     {/* Icon */}
      <button className="tooltip-icon" popoverTarget={id} style={{anchorName: `--${id}`}}>
        ℹ️
      </button>

     {/* Dialog window */}
      <div id={id} className="tooltip-popopver" popover="auto" style={{positionAnchor: `--${id}`}}>
        {text}
      </div>
    </>
  );
}
