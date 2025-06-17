import RecipeBasicData from "./RecipeBasicData/RecipeBasicData";
import FormNav from "./FormNav/FormNav";
import RecipePhotoIngredients from "./RecipePhotoIngredients/RecipePhotoIngredients";
import RecipeStepsCategories from "./RecipeStepsCategories/RecipeStepsCategories";
import FormControl from "./FormControl/FormControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useAddRecipeMutation from "../../../../../mutations/useAddRecipeMutation";
import { useRef } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Recipe name is required")
    .min(3, "Recipe name must be at least 3 characters")
    .max(100, "Recipe name must not exceed 100 characters"),
  difficulty_level: Yup.string().required("Difficulty level is required"),
  portions_amount: Yup.string().required("Portions amount is required"),
  ingredients: Yup.array().min(1, "At least one ingredient is required"),
  steps: Yup.array().min(1, "At least one step is required"),
  photo: Yup.mixed().nullable(),
});

const initialValues = {
  name: "",
  difficulty_level: "",
  portions_amount: "",
  ingredients: [],
  steps: [{ description: "", estimated_time: 5 }],
  photo: null,
  categories: [],
};

export default function AddNewRecipeForm() {
  const addRecipeMutation = useAddRecipeMutation();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addRecipeMutation.mutateAsync(values);
    } catch (error) {
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <>
      <div data-stepper="" className="bg-base-100 w-full rounded-lg p-4" id="wizard-validation-horizontal">
        <FormNav />
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form id="wizard-validation-form-horizontal" className="needs-validation mt-5 sm:mt-8">
              <RecipeBasicData />
              <RecipePhotoIngredients />
              <RecipeStepsCategories />
              <FormControl />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
