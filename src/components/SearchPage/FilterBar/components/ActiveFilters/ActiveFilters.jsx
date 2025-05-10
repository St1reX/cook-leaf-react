import { handleFilterDelete } from "../FilterHandlers/FilterHandlers";

export default function ActiveFilters({ filters, onFilterDelete }) {
  const filtersToDisplay = Object.entries(filters).filter(([key, { displayLocation, value }]) => {
    return displayLocation === "filtersList" && value != null;
  });

  return (
    <>
      {filtersToDisplay.map(([key, { prefix, value }]) =>
        Array.isArray(value) ? (
          <button
            key={key}
            onClick={() => handleFilterDelete(key, onFilterDelete)}
            className="btn btn-soft btn-primary text-accent/80"
          >
            {prefix + value.join(", ")}
            <span className="icon-[mingcute--close-line]" style={{ width: 24, height: 24, color: "#000" }} />
          </button>
        ) : (
          <button
            key={key}
            onClick={() => handleFilterDelete(key, onFilterDelete)}
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
