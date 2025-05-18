import { handleFilterUpdate } from "../../../../../utils/FiltersHandler";
import { useRecipes } from "../../../../../context/RecipesContext";

export default function SortByDropdown() {
  const {
    filters: {
      sortBy: { value: sort },
    },
    setFilters,
  } = useRecipes();

  const sortingOptions = [
    { label: "Newest", value: "createdAt" },
    { label: "Name", value: "name" },
    { label: "Preparation time shortest", value: "preparationTime" },
    { label: "Highest rated", value: "rating" },
  ];

  return (
    <>
      <div className="dropdown relative inline-flex [--auto-close:inside]">
        <button
          id="dropdown-transportation"
          type="button"
          className="dropdown-toggle btn-text btn-primary flex justify-center items-center"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          <span className="text-accent/60 mr-2">Sort By</span>

          <div className="font-semibold flex items-center">
            <span className="mr-0.5">{sortingOptions.find((element) => element.value === sort)?.label}</span>
            <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4" />
          </div>
        </button>
        <div
          className="dropdown-menu dropdown-open:opacity-100 hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-transportation"
        >
          {sortingOptions.map(({ value, label }, index) => (
            <div className="dropdown-item gap-4" key={index}>
              <input
                id={`sort-by-dropdown-option-${index}`}
                name="sort-by-dropdown"
                type="radio"
                className="radio radio-primary"
                value={value}
                checked={sort === value}
                onChange={() => {
                  handleFilterUpdate("sortBy", value, setFilters);
                }}
              />
              <label
                htmlFor={`sort-by-dropdown-option-${index}`}
                className="label-text text-base-content block text-sm font-semibold"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
