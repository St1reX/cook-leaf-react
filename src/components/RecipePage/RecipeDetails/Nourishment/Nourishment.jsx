import CalculateNourishment from "./CalculateNourishment";

export default function Nourishment({ ingredients }) {
  const nutritionFacts = {
    calories: { label: "Calories", value: 0, unit: "kcal" },
    protein: { label: "Protein", value: 0, unit: "mg" },
    fat: { label: "Fat", value: 0, unit: "mg" },
    carbohydrates: { label: "Carbohydrates", value: 0, unit: "mg" },
    fiber: { label: "Fiber", value: 0, unit: "mg" },
    saturated_fat: { label: "Saturated Fat", value: 0, unit: "mg" },
    sodium: { label: "Sodium", value: 0, unit: "mg" },
  };

  ingredients.forEach((element) => {
    CalculateNourishment(
      element.ingredient.nutrition_per_gram,
      element.amount,
      element.unit.default_grams,
      nutritionFacts
    );
  });

  return (
    <div className="shadow-xl p-8 rounded-xl">
      <h4 className="text-xl mb-6">Nutrition Facts</h4>
      {Object.entries(nutritionFacts).map(([key, { label, value }]) => (
        <div key={key} className="flex justify-between mb-4">
          <h5>{label}</h5>
          <span className="text-accent/80">
            {key === "calories"
              ? `${value.toFixed(1)} kcal / ${(value * 4.184).toFixed(1)} kJ`
              : value < 1000
              ? `${value.toFixed(1)} mg`
              : `${(value / 1000).toFixed(1)} g`}
          </span>
        </div>
      ))}
    </div>
  );
}
