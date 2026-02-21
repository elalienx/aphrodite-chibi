import "./input.css";

interface Props {
  /** An example value to show when the field is empty. */
  placeholder?: string;

  /** Decides what kind of keyboard to show on mobile. This does not affect validation. Handle that separately. */
  type: "text" | "number" | "email" | "tel" | "password";
}

export default function Input({ placeholder = "", type = "text" }: Props) {
  // Properties
  const mobileKeyboard = getMobileKeyboard(type);

  // Methods
  function getMobileKeyboard(type: string) {
    switch (type) {
      case "number":
        return "numeric";
      case "email":
        return "email";
      case "tel":
        return "tel";
      case "password":
      case "text":
      default:
        return "text";
    }
  }

  return (
    <input
      className="input"
      type={type}
      inputMode={mobileKeyboard}
      placeholder={placeholder}
    />
  );
}
