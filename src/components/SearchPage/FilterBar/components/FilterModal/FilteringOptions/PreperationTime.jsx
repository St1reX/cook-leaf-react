import { handleFilterUpdate } from "../../../../../../utils/FiltersHandler";
import { useRecipes } from "../../../../../../context/RecipesContext";
import { PREPARATION_TIMES } from "../../../../../../constants/preparationTimes";

export default function PreperationTime({ onPreparationTimeChange }) {
  const {
    filters: {
      preparationTime: { value: selectedTime },
    },
    setFilters,
  } = useRecipes();

  const handleLocalChange = (e) => {
    const newTime = e.target.value === selectedTime ? null : e.target.value;
    handleFilterUpdate("preparationTime", newTime, setFilters);
  };

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Preperation time</h3>
        <div className="w-full flex gap-1">
          {PREPARATION_TIMES.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                id={`preparationTime-${value}`}
                name={`preparationTime-${value}`}
                className="checkbox hidden"
                value={value}
                checked={value === selectedTime}
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
