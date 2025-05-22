import moment from "moment";
import RecipeCard from "../../../Shared/RecipeCard/RecipeCard";

export default function SelectedRecipeModal({ selectedRecipe }) {
  const handleModalClose = () => {
    const modalEl = document.querySelector("#selected-recipe-modal");

    if (modalEl) {
      HSOverlay.close(modalEl);
    }
  };

  return (
    <>
      <div
        id="selected-recipe-modal"
        className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
        role="dialog"
        tabIndex={-1}
      >
        <div className="modal-dialog overlay-open:mt-12 overlay-open:opacity-100 overlay-open:duration-300 transition-all ease-out">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{selectedRecipe?.recipe.name}</h3>
              <button
                type="button"
                className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                aria-label="Close"
                data-overlay="#selected-recipe-modal"
              >
                <span className="icon-[tabler--x] size-4" />
              </button>
            </div>
            <div className="modal-body flex flex-col justify-center items-center gap-4">
              <div>
                <h2 className="text-2xl text-bold">{moment(selectedRecipe?.date).format("YYYY-MM-DD")}</h2>
              </div>
              <div onClick={handleModalClose}>
                {selectedRecipe !== null && (
                  <RecipeCard recipe={selectedRecipe.recipe} redirectionDelay={250}></RecipeCard>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-soft btn-secondary" onClick={handleModalClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
