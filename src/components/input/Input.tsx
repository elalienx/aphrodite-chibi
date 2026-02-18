import "./input.css";

interface Props {
  /** An example value to show when the field is empty. */
  placeholder?: string;
  /** Decides what kind of keyboard to show on mobile. This does not affect validation. Handle that separately. */
  type: "text" | "number" | "email" | "tel" | "password";
}

export default function Input({ placeholder = "", type = "text" }: Props) {
  return <input className="input" type={type} placeholder={placeholder} />;
}
