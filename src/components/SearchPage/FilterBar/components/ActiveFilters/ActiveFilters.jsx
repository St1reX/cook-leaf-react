import { useRecipes } from "../../../../../context/RecipesContext";
import { handleFilterDelete } from "../../../../../utils/FiltersHandler";

export default function ActiveFilters() {
  const { filters, setFilters } = useRecipes();

  const filtersToDisplay = Object.entries(filters).filter(([key, { displayLocation, value }]) => {
    return displayLocation === "filtersList" && value != null && value.length > 0;
  });

  return (
    <>
      {filtersToDisplay.map(([key, { prefix, value }]) =>
        Array.isArray(value) ? (
          <button
            key={key}
            onClick={() => handleFilterDelete(key, setFilters, [])}
            className="btn btn-soft btn-primary text-accent/80"
          >
            {prefix + value.join(", ")}
            <span className="icon-[mingcute--close-line]" style={{ width: 24, height: 24, color: "#000" }} />
          </button>
        ) : (
          <button
            key={key}
            onClick={() => handleFilterDelete(key, setFilters)}
            className="btn btn-soft btn-primary text-accent/80"
          >
            {prefix + value}
            <span className="icon-[mingcute--close-line]" style={{ width: 24, height: 24, color: "#000" }} />
          </button>
        )
      )}
    </>
  );
}
