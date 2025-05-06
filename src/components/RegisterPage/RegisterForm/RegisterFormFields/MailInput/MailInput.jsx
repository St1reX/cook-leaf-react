import { useField } from "formik";

export default function MailInput() {
  const [field, meta] = useField("mail");

  return (
    <>
      <div>
        <label className="label-text font-medium" htmlFor="userMail">
          E-Mail
        </label>
        <div className={`input max-w-sm ${meta.touched && meta.error ? "is-invalid" : ""}`}>
          <span className="icon-[tabler--user] text-base-content/80 my-auto me-3 size-5 shrink-0" />
          <input
            className="grow"
            type="text"
            name="mail"
            id="userMail"
            placeholder="mailexample@domain.com"
            {...field}
          />
        </div>
        {meta.touched && meta.error ? <span className="helper-text">{meta.error}</span> : null}
      </div>
    </>
  );
}
