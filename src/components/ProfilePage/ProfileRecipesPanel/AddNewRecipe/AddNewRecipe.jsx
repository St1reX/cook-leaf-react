import AddNewRecipeForm from "./AddNewRecipeForm/AddNewRecipeForm";

export default function AddNewRecipe() {
  return (
    <>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-8">
            <h5 className="card-title mb-2.5">Add your own recipe!</h5>
            <p>
              Ready to share your culinary creations? Use this section to add your own recipes and build your
              personal cookbook. Whether it's a family classic or a new experiment, your recipes belong here.
            </p>
          </div>
          <AddNewRecipeForm></AddNewRecipeForm>
        </div>
      </div>
    </>
  );
}
