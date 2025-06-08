export default function Ingredients({ ingredients }) {
  return (
    <>
      <div className="flex flex-col gap-4 p-8 shadow-xl w-2/5 rounded-lg">
        <h4 className="text-xl mb-6">Ingredients</h4>
        {ingredients.map(({ ingredient, amount, unit }, index) => (
          <div key={ingredient.ingredient_name} className="flex justify-between items-center gap-5 mb-4">
            <div>
              <img
                src={ingredient.photo_path}
                alt={`${ingredient.ingredient_name} icon`}
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col items-start grow g-2">
              <h5>{ingredient.ingredient_name}</h5>
              <span className="text-accent/80 text-sm"></span>
            </div>
            <div>
              <span className="text-accent/80">{amount + " " + unit.unit_name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
