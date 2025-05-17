import { handleFilterUpdate } from "../../FilterHandlers/FilterHandlers";
import { useRecipes } from "../../../../../../context/RecipesContext";

export default function PortionsAmount() {
  const {
    filters: {
      portionsAmount: { value: selectedPortionsAmount },
    },
    setFilters,
  } = useRecipes();

  const handleLocalChange = (e) => {
    const newPortionsAmount = e.target.value === selectedPortionsAmount ? null : e.target.value;
    handleFilterUpdate("portionsAmount", newPortionsAmount, setFilters);
  };

  const portions = ["1", "2", "4", "6", "8+"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Portions amount</h3>
        <div className="flex gap-1 w-full">
          {portions.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                className="checkbox hidden"
                value={value}
                checked={value === selectedPortionsAmount}
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
