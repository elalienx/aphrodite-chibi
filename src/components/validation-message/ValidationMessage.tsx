import "./validation-message.css";

interface Props {
  /** Text to display if the form validation encountered an issue. */
  validationMessage?: string;
}

export default function ValidationMessage({ validationMessage }: Props) {
  <p className="validation-message">{validationMessage}</p>;
}
