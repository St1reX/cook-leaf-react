import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { useAuth } from "../../../../context/AuthContext";
import { notyfInstance } from "../../../../constants/notyfConfig";
import moment from "moment";
import useScheduleRecipeMutation from "../../../../mutations/useScheduleRecipeMutation";
import { useState } from "react";

export default function ScheduleRecipe({ recipeId }) {
  const { user, setUser } = useAuth();
  const [selectedDates, setSelectedDates] = useState([]);
  const scheduledDates = user?.scheduled_recipes
    .filter((r) => r.recipe._id === recipeId)
    .map((r) => moment(r.date).format("YYYY-MM-DD"));
  const scheduleRecipeMutation = useScheduleRecipeMutation();
  const isDateDisabled = (date) => {
    return scheduledDates.includes(moment(date).format("YYYY-MM-DD"));
  };

  const handleModalOpen = () => {
    if (!user) {
      notyfInstance.error("You must be logged in to schedule a recipe.");
      return;
    }
  };

  const handleScheduleRecipe = async () => {
    if (!user) {
      notyfInstance.error("You must be logged in to schedule a recipe.");
      return;
    }

    try {
      await scheduleRecipeMutation.mutateAsync({
        recipeID: recipeId,
        dates: selectedDates.map((date) => moment(date).format("YYYY-MM-DD")),
      });

      setUser((prev) => ({
        ...prev,
        scheduled_recipes: [
          ...prev.scheduled_recipes,
          ...selectedDates.map((date) => ({
            recipe: { _id: recipeId },
            date: moment(date).format("YYYY-MM-DD"),
          })),
        ],
      }));

      setSelectedDates([]);
    } catch (err) {}
  };

  return (
    <>
      <div className="flex w-full justify-end mb-4">
        <span
          className="icon-[mingcute--calendar-2-line] text-4xl text-primary cursor-pointer"
          {...(!!user && {
            "aria-haspopup": "dialog",
            "aria-expanded": "false",
            "aria-controls": "basic-modal",
            "data-overlay": "#basic-modal",
          })}
          onClick={handleModalOpen}
        ></span>

        <div
          id="basic-modal"
          className="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300"
          role="dialog"
          tabIndex={-1}
        >
          <div className="modal-dialog overlay-open:opacity-100 overlay-open:duration-300">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Schedule recipe</h3>
                <button
                  type="button"
                  className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                  aria-label="Close"
                  data-overlay="#basic-modal"
                >
                  <span className="icon-[tabler--x] size-4" />
                </button>
              </div>
              <div className="modal-body">
                <span className="text-sm text-accent/80">
                  Disabled dates is the date you have already scheduled this recipe
                </span>
                <Flatpickr
                  className="input input-lg max-w-sm m-2 ml-0 cursor-pointer"
                  options={{
                    mode: "multiple",
                    dateFormat: "Y-m-d",
                    minDate: moment().format("YYYY-MM-DD"),
                    disable: [isDateDisabled],
                  }}
                  value={selectedDates}
                  onChange={(dates) => setSelectedDates(dates)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-soft btn-secondary" data-overlay="#basic-modal">
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleScheduleRecipe}
                  data-overlay="#basic-modal"
                >
                  Schedule Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
