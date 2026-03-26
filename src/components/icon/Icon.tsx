// Project files
import icons from "./font-awesome.json";
import "./icon.css";

interface Props {
  /** The icon name */
  icon: string;
}

export default function Icon({ icon }: Props) {
  // Properties
  // @ts-ignore
  const shape = icons[icon] ?? icons._default;
  const boundingBox = `0 0 ${shape.width} 512`;

  console.log("icon", icon);
  console.log("shape", shape);

  return (
    <span className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={boundingBox}>
        <path d={shape.path} />
      </svg>
    </span>
  );
}
