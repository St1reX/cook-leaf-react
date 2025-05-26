import { useFormikContext } from "formik";
import IngredientsModal from "./IngredientsModal/IngredientsModal";

export default function RecipePhotoIngredients() {
  const { values, setFieldValue } = useFormikContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFieldValue("photo", file);
  };

  return (
    <div
      id="personal-info-validation"
      className="space-y-5"
      data-stepper-content-item='{ "index": 2 }'
      style={{ display: "none" }}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="label-text" htmlFor="recipe-image">
            Recipe Image
          </label>
          <input
            type="file"
            className="input"
            id="recipe-image"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <div>
          <label className="label-text" htmlFor="recipe-ingredients">
            Recipe ingredients
          </label>
          <button
            type="button"
            className="btn btn-primary"
            id="recipe-ingredients"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="ingredients-modal"
            data-overlay="#ingredients-modal"
          >
            {values.ingredients.length > 0 ? `${values.ingredients.length} included` : "Add ingredients"}
          </button>
        </div>
      </div>

      <IngredientsModal
        ingredients={values.ingredients}
        setIngredients={(newIngredients) => setFieldValue("ingredients", newIngredients)}
      />
    </div>
  );
}
