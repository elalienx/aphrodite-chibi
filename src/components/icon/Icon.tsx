// Project files
import icons from "./font-awesome.json";
import "./icon.css";

interface Props {
  /** The icon name */
  icon: "arrow-left" | "arrow-right" | "info" | "x-mark";
}

export default function Icon({ icon }: Props) {
  // Properties
  // @ts-ignore
  const shape = icons[icon] || icons._default;
  const boundingBox = `0 0 ${shape.width} 24`;

  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={boundingBox}
    >
      <path d={shape.path} />
    </svg>
  );
}
