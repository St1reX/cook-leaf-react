import RatingStars from "../../../../../Shared/RatingStars/RatingStars";
import { useRecipes } from "../../../../../../context/RecipesContext";
import { handleFilterUpdate } from "../../FilterHandlers/FilterHandlers";

export default function Rating() {
  const {
    filters: {
      rating: { value: selectedRatings },
    },
    setFilters,
  } = useRecipes();

  const handleLocalChange = (e) => {
    const value = Number(e.target.value);
    let newRatings = [];

    if (selectedRatings?.includes(value)) {
      newRatings = selectedRatings.filter((v) => v !== value);
    } else {
      newRatings = [...selectedRatings, value].sort((a, b) => a - b);
    }
    handleFilterUpdate("rating", newRatings, setFilters);
  };

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Rating</h3>

        <ul className="text-base-content/80 list-inside">
          {[1, 2, 3, 4, 5].map((value) => (
            <li key={value} className="flex justify-between items-center gap-1 mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mr-2"
                  id={`rating-${value}`}
                  value={value}
                  checked={selectedRatings.includes(value)}
                  onChange={handleLocalChange}
                />
                <RatingStars
                  starsAmount={value}
                  isInteractive={false}
                  style={{ maxWidth: 150 }}
                ></RatingStars>
              </div>
              <span>12312 Results</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
