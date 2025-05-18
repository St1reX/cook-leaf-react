import { useRecipeDetails } from "../../../../context/RecipeDetailsContext";

export default function RecipeSteps() {
  const { recipe } = useRecipeDetails();

  return (
    <>
      <div className="shadow-xl p-8 rounded-xl">
        <h4 className="text-xl mb-6">Preparation</h4>
        <ul className="space-y-5 text-sm font-nedium">
          {recipe.steps.map(({ description }, index) => (
            <>
              <li key="{index}" className="flex items-center space-x-3">
                <span className="border-primary text-primary flex items-center justify-center rounded-full border p-0.5">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180" />
                </span>
                <span className="text-base-content/80 text-base">{description}</span>
              </li>

              {index == recipe.steps.length - 1 ? "" : <div className="divider"></div>}
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
