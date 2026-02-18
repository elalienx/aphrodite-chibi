import "./label.css";

interface Props {
  /** Text to display inside the label. */
  label: string;
}

export default function Label({ label }: Props) {
  return <label className="label">{label}</label>;
}
