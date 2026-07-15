interface Props {
  /** The initial form values object to be processed from local storage or an API endpoint. */
  input: Record<string, any>;

  /** If true, treats the number 0 or the string "0" as an empty string. */
  treatZeroAsEmpty?: boolean;
}

/**
 * Helper to recursively process individual values: primitives, arrays, and objects.
 */
function cleanValue(value: any, treatZeroAsEmpty: boolean): any {
  // 1. Handle arrays: recursively clean each item
  if (Array.isArray(value)) {
    return value.map((item) => cleanValue(item, treatZeroAsEmpty));
  }

  // 2. Handle nested objects by passing them back into the main function
  if (value !== null && typeof value === "object") {
    return cleanInitialInput({ input: value, treatZeroAsEmpty });
  }

  // 3. Handle primitives
  const isNumber = typeof value === "number";
  const isBoolean = typeof value === "boolean";
  let safeValue = value;

  // Conversion
  if (isNumber || isBoolean) safeValue = String(value);

  // Special case
  if (treatZeroAsEmpty && safeValue === "0") return "";

  return safeValue;
}

/**
 * Formisch uses strings by default, just like native HTML `<input>`.
 * This creates a conflict when Valibot schemas find numbers or booleans
 * coming from local storage or an endpoint trying to pre-fill the fields.
 *
 * This method recursively converts initial non-string values to avoid errors.
 * Values are converted back to the correct type during form validation.
 */
export default function cleanInitialInput({ input, treatZeroAsEmpty = false }: Props): Record<string, any> {
  const entries = Object.entries(input);
  const cleanedEntries = entries.map(([key, value]) => [key, cleanValue(value, treatZeroAsEmpty)]);

  return Object.fromEntries(cleanedEntries);
}
