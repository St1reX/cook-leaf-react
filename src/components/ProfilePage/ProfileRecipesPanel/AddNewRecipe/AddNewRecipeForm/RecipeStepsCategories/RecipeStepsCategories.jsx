import { useFormikContext } from "formik";
import CategoriesModal from "./modals/CategoriesModal/CategoriesModal";
import StepsModal from "./modals/StepsModal/StepsModal";
import { Field } from "formik";

export default function RecipeStepsCategories() {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div
      id="social-links-validation"
      className="space-y-5"
      data-stepper-content-item='{ "index": 3 }'
      style={{ display: "none" }}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="label-text" htmlFor="recipe-steps">
            Recipe steps
          </label>
          <button
            type="button"
            className="btn btn-primary"
            id="recipe-steps"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="steps-modal"
            data-overlay="#steps-modal"
          >
            Add steps
          </button>
          <Field name="steps">
            {({ meta }) => <>{meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}</>}
          </Field>
        </div>

        <div>
          <label className="label-text" htmlFor="recipe-categories">
            Recipe categories
          </label>
          <button
            type="button"
            className="btn btn-primary"
            id="recipe-categories"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="categories-modal"
            data-overlay="#categories-modal"
          >
            Add categories
          </button>
        </div>
      </div>

      <StepsModal steps={values.steps} setSteps={(newSteps) => setFieldValue("steps", newSteps)} />
      <CategoriesModal
        categories={values.categories}
        setCategories={(newCategories) => setFieldValue("categories", newCategories)}
      />
    </div>
  );
}
