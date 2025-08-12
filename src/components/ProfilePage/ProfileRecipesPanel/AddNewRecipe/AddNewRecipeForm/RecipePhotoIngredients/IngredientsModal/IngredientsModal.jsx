import { useState } from "react";
import AutocompleteIngredientDropdown from "./ModalComponents/AutocompleteIngredientDropdown";
import NumberInput from "../../shared/NumberInput";
import UnitSelect from "./ModalComponents/UnitSelect";

export default function IngredientsModal({ ingredients, setIngredients, validateField }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState(null);

  const handleAdditionCancelation = () => {
    setSelectedIngredient(null);
    setQuantity(1);
  };

  const handleAddIngredient = () => {
    if (!selectedIngredient || !quantity || !unit) return;

    setIngredients([
      ...ingredients,
      {
        _id: selectedIngredient._id,
        name: selectedIngredient.ingredient_name,
        amount: quantity,
        unit_id: unit._id,
        unit_name: unit.unit_name,
      },
    ]);

    setSelectedIngredient(null);
    setQuantity(1);
  };

  const handleRemoveIngredient = (id) => {
    setIngredients(ingredients.filter((item) => item._id !== id));
  };

  return (
    <div
      id="ingredients-modal"
      className="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300"
      role="dialog"
    >
      <div className="modal-dialog overlay-open:opacity-100 overlay-open:duration-300">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-xl">Add ingredients to your recipe</h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label="Close"
              data-overlay="#ingredients-modal"
            >
              <span className="icon-[tabler--x] size-4" />
            </button>
          </div>

          <div className="modal-body space-y-4 flex flex-col overflow-visible">
            {selectedIngredient == null && (
              <AutocompleteIngredientDropdown
                onSelectIngredient={setSelectedIngredient}
                activeIngredients={ingredients}
              />
            )}

            {selectedIngredient && (
              <div className="flex gap-2 items-center font-semibold rounded-lg p-2 shadow-md">
                <img
                  src={selectedIngredient.photo_path}
                  alt={`${selectedIngredient.ingredient_name} icon`}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span>{selectedIngredient.ingredient_name}</span>
              </div>
            )}

            {selectedIngredient && (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex gap-4 items-center">
                  <NumberInput quantity={quantity} onQuantityChange={setQuantity} label={"Quantity"} />
                  <UnitSelect unit={unit} onUnitChange={setUnit} />
                </div>
                <div className="flex gap-2">
                  <button type="button" className="btn btn-primary btn-sm" onClick={handleAddIngredient}>
                    Add
                  </button>
                  <button type="button" className="btn btn-error btn-sm" onClick={handleAdditionCancelation}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {ingredients.map((value) => (
                <button
                  key={value._id}
                  onClick={() => handleRemoveIngredient(value._id)}
                  className="btn btn-soft btn-primary text-accent/80 flex gap-2 justify-between w-full"
                >
                  <div>
                    <span className="text-black text-xl mr-2">{value.name}</span>
                    <span>
                      {value.amount} {value.unit_name}
                    </span>
                  </div>
                  <span className="icon-[mingcute--close-line]" style={{ width: 24, height: 24 }} />
                </button>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-overlay="#ingredients-modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
