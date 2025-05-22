import moment from "moment";
import RecipeCard from "../../../Shared/RecipeCard/RecipeCard";
import useScheduleDeleteMutation from "../../../../mutations/useScheduleDeleteMutation";

export default function SelectedRecipeModal({ selectedRecipe, setUser, modalRef }) {
  const deleteScheduleMutation = useScheduleDeleteMutation();
  const handleModalClose = () => {
    if (modalRef) {
      HSOverlay.close(modalRef.current);
    }
  };

  const handleScheduleDelete = async () => {
    await deleteScheduleMutation.mutateAsync({
      recipeID: selectedRecipe.recipe._id,
      date: moment(selectedRecipe.date).format("YYYY-MM-DD"),
    });

    setUser((prev) => ({
      ...prev,
      scheduled_recipes: prev.scheduled_recipes.filter(
        (r) =>
          r.recipe._id !== selectedRecipe.recipe._id ||
          moment(selectedRecipe.date).format("YYYY-MM-DD") !== moment(r.date).format("YYYY-MM-DD")
      ),
    }));

    handleModalClose();
  };

  return (
    <>
      <div
        id="selected-recipe-modal"
        className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
        role="dialog"
        tabIndex={-1}
        ref={modalRef}
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
              <button onClick={handleScheduleDelete} type="button" className="btn btn-error">
                Delete Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
