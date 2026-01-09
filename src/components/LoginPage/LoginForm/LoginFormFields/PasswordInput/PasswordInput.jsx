import { useField } from "formik";

export default function PasswordInput() {
  const [field, meta] = useField("password");
  return (
    <>
      <div className="mb-4">
        <label className="label-text font-medium" htmlFor="password">
          Password
        </label>
        <div className={`input max-w-sm ${meta.touched && meta.error ? "is-invalid" : ""}`}>
          <span className="icon-[mingcute--key-2-line] text-base-content/80 my-auto me-3 size-5 shrink-0" />
          <input
            type="password"
            className="grow"
            placeholder="*********"
            id="password"
            name="password"
            autoComplete="current-password"
            {...field}
          />
        </div>
        {meta.touched && meta.error ? <span className="helper-text">{meta.error}</span> : null}
      </div>
    </>
  );
}
