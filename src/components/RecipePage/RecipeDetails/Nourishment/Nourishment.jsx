export default function Nourishment({ recipe }) {
  const nutritionFacts = [
    { name: "Calories", value: "447.2 kcal / 1871 kJ" },
    { name: "Protein", value: "16.4 g" },
    { name: "Fat", value: "29.7 g" },
    { name: "Carbohydrates", value: "30 g" },
    { name: "Fiber", value: "4.8 g" },
    { name: "Saturated Fat", value: "8.8 g" },
    { name: "Sodium", value: "1298.3 mg" },
  ];

  return (
    <>
      <div className="shadow-xl p-8 rounded-xl">
        <h4 className="text-xl mb-6">Nutrition Facts</h4>
        {nutritionFacts.map(({ name, value }, index) => (
          <div key={index} className="flex justify-between mb-4">
            <h5>{name}</h5>
            <span className="text-accent/80">{value}</span>
          </div>
        ))}
      </div>
    </>
  );
}
