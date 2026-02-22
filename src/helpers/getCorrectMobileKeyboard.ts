/** Apple requires an additional property "inputMode" inside <input/> to show the correct keyboard.
 * This method extraxts this functionality so the Input.tsx stays clean and neutral.
 */
export default function getCorrectMobileKeyboard(type: string) {
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
