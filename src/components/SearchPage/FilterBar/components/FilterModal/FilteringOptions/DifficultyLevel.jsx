import { handleFilterUpdate } from "../../../../../../utils/FiltersHandler";
import { useRecipes } from "../../../../../../context/RecipesContext";

export default function DifficultyLevel() {
  const {
    filters: {
      difficultyLevel: { value: selectedLevel },
    },
    setFilters,
  } = useRecipes();

  const handleLocalChange = (e) => {
    let newLevel = e.target.value === selectedLevel ? null : e.target.value;
    handleFilterUpdate("difficultyLevel", newLevel, setFilters);
  };

  const levels = ["easy", "average", "hard"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Difficulty level</h3>
        <div className="flex gap-1 w-full">
          {levels.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                name="difficultyLevel"
                className="checkbox hidden"
                value={value}
                checked={selectedLevel === value}
                onChange={handleLocalChange}
              />
              <span className="flex justify-center items-center label-text w-full text-lg font-medium text-start">
                {value}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
