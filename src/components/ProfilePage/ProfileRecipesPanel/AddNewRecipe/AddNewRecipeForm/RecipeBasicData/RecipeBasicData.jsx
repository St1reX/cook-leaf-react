import { RECIPE_DIFFICULTIES } from "../../../../../../constants/recipeDifficulties";
import { PORTIONS_AMOUNT } from "../../../../../../constants/portionsAmount";
import { capitalizeFirstLetter } from "../../../../../../utils/stringUtils";
import { Field } from "formik";

export default function RecipeBasicData() {
  return (
    <>
      <div id="account-details-validation" className="space-y-5" data-stepper-content-item='{ "index": 1 }'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="name">
              Recipe Title
            </label>
            <Field name="name">
              {({ field, meta }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    placeholder="Spaghetti Bolognese"
                    className={`input ${meta.touched && meta.error ? "is-invalid" : ""}`}
                    id="name"
                  />
                  {meta.touched && meta.error && (
                    <div className="text-red-500 text-sm mt-1">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>

          <div>
            <label className="label-text" htmlFor="difficulty_level">
              Difficulty level
            </label>
            <Field name="difficulty_level">
              {({ field, meta }) => (
                <>
                  <select
                    {...field}
                    className={`select ${meta.touched && meta.error ? "is-invalid" : ""}`}
                    id="difficulty_level"
                  >
                    <option value="">Select difficulty</option>
                    {RECIPE_DIFFICULTIES.map((level) => (
                      <option key={level} value={level}>
                        {capitalizeFirstLetter(level)}
                      </option>
                    ))}
                  </select>
                  {meta.touched && meta.error && (
                    <div className="text-red-500 text-sm mt-1">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="portions_amount">
              Portions Amount
            </label>
            <Field name="portions_amount">
              {({ field, meta }) => (
                <>
                  <select
                    {...field}
                    id="portions_amount"
                    className={`select ${meta.touched && meta.error ? "is-invalid" : ""}`}
                  >
                    <option value="">Select portions</option>
                    {PORTIONS_AMOUNT.map((amount) => (
                      <option key={amount} value={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                  {meta.touched && meta.error && (
                    <div className="text-red-500 text-sm mt-1">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
        </div>
      </div>
    </>
  );
}
