import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import FullCalendarRenderFunc from "./components/FullCalendarRenderFunc";
import SelectedRecipeModal from "./components/SelectedRecipeModal";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ScheduledRecipes() {
  const modalRef = useRef(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { user, setUser } = useAuth();

  const events = user?.scheduled_recipes.map((recipe) => ({
    title: recipe.recipe.recipe_name,
    start: recipe.date,
    recipe_data: recipe,
    setSelectedRecipe: setSelectedRecipe,
    modalRef: modalRef,
  }));

  return (
    <>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-8">
            <h5 className="card-title">Scheduled recipes</h5>
            <p>
              This section shows all your scheduled recipes. Easily keep track of what you plan to cook in the
              coming days, stay organized, and make meal planning more convenient and stress-free.
            </p>
          </div>

          {events.length > 0 ? (
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={events}
              eventContent={FullCalendarRenderFunc}
            />
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-base-content/50 text-2xl">You have no scheduled recipes</p>
                <Link to="/" className="btn btn-primary">
                  Browse recipes
                </Link>
              </div>
            </>
          )}

          <SelectedRecipeModal
            modalRef={modalRef}
            user={user}
            setUser={setUser}
            selectedRecipe={selectedRecipe}
          ></SelectedRecipeModal>
        </div>
      </div>
    </>
  );
}
