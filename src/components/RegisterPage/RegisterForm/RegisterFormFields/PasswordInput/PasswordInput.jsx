import { useField } from "formik";

export default function PasswordInput() {
  const [field, meta] = useField("password");

  return (
    <>
      <div className="max-w-sm">
        <div className="flex mb-2">
          <div className="flex-1">
            <div>
              <label className="label-text font-medium" htmlFor="userPassword">
                Password
              </label>
              <div className={`input max-w-sm ${meta.touched && meta.error ? "is-invalid" : ""}`}>
                <span className="icon-[mingcute--key-2-line] text-base-content/80 my-auto me-3 size-5 shrink-0" />
                <input
                  type="password"
                  className="grow"
                  placeholder="*********"
                  id="userPassword"
                  name="password"
                  {...field}
                />
              </div>
              {meta.touched && meta.error ? <span className="helper-text">{meta.error}</span> : null}
            </div>
            <div
              data-strong-password='{
          "target": "#userPassword",
          "hints": "#userPasswordContent",
          "stripClasses": "strong-password:bg-primary strong-password-accepted:bg-primary h-1.5 flex-auto bg-neutral/20"
        }'
              className="rounded-full overflow-hidden mt-2 flex gap-0.5"
            ></div>
          </div>
        </div>
        <div id="userPasswordContent" className="mb-3">
          <div>
            <span className="text-sm text-base-content">Level: </span>
            <span
              data-pw-strength-hint='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
              className={`text-base-content text-sm font-semibold`}
            ></span>
          </div>
          <h6 className="my-2 text-base font-semibold text-base-content">Your password must contain:</h6>
          <ul className="text-base-content/80 space-y-1 text-sm">
            <li
              data-pw-strength-rule="min-length"
              className="strong-password-active:text-success flex items-center gap-x-2"
            >
              <span className="icon-[tabler--circle-check] hidden size-5 shrink-0" data-check></span>
              <span className="icon-[tabler--circle-x] hidden size-5 shrink-0" data-uncheck></span>
              Minimum number of characters is 6.
            </li>
            <li
              data-pw-strength-rule="uppercase"
              className="strong-password-active:text-success flex items-center gap-x-2"
            >
              <span className="icon-[tabler--circle-check] hidden size-5 shrink-0" data-check></span>
              <span className="icon-[tabler--circle-x] hidden size-5 shrink-0" data-uncheck></span>
              Should contain uppercase.
            </li>
            <li
              data-pw-strength-rule="numbers"
              className="strong-password-active:text-success flex items-center gap-x-2"
            >
              <span className="icon-[tabler--circle-check] hidden size-5 shrink-0" data-check></span>
              <span className="icon-[tabler--circle-x] hidden size-5 shrink-0" data-uncheck></span>
              Should contain numbers.
            </li>
            <li
              data-pw-strength-rule="special-characters"
              className="strong-password-active:text-success flex items-center gap-x-2"
            >
              <span className="icon-[tabler--circle-check] hidden size-5 shrink-0" data-check></span>
              <span className="icon-[tabler--circle-x] hidden size-5 shrink-0" data-uncheck></span>
              Should contain special characters.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
