import { type FieldStore, type FormStore, type Schema } from "@formisch/react";

import "./debug.css";

interface Props {
  /** An instance of a Formisch form. */
  form: FormStore;

  /** Unique identifier of a form field. */
  field: FieldStore<Schema, [string]>;
}

export default function Debug({ form, field }: Props) {
  function showBoolean(value: boolean): string {
    return value ? "true" : "false";
  }

  return (
    <div className="soft-background debug">
      <h4>Debug</h4>

      <h5>Form</h5>
      <ul>
        <li>
          <b>errors:</b> {form.errors ? form.errors : "no errors"}
        </li>
        <li>
          <b>isDirty</b> {showBoolean(form.isDirty)}
        </li>
        <li>
          <b>errors</b> {showBoolean(form.isSubmitted)}
        </li>
        <li>
          <b>isSubmitting</b> {showBoolean(form.isSubmitting)}
        </li>
        <li>
          <b>isTouched</b> {showBoolean(form.isTouched)}
        </li>
        <li>
          <b>isValid</b> {showBoolean(form.isValid)}
        </li>
        <li>
          <b>isValidating </b>
          {showBoolean(form.isValidating)}
        </li>
      </ul>

      <h5>Field</h5>
      <ul>
        <li>
          <b>errors</b>
          {field.errors}
        </li>
        <li>
          <b>input</b> {field.input ? field.input : "?"}
        </li>
        <li>
          <b>isDirty</b> {showBoolean(field.isDirty)}
        </li>
        <li>
          <b>isTouched</b> {showBoolean(field.isTouched)}
        </li>
        <li>
          <b>isValid</b> {showBoolean(field.isValid)}
        </li>
        <li>
          <b>path</b> {showBoolean(field.path)}
        </li>
        <li>
          <b>props.autoFocus</b> {field.props.autoFocus}
        </li>
        <li>
          <b>props.name</b> {field.props.name}
        </li>
      </ul>
    </div>
  );
}
