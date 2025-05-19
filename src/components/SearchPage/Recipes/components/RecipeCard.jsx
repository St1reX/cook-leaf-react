import { Link } from "react-router-dom";
import formatTime from "../../../../utils/formatTIme";

export default function RecipeCard({ recipe, recipeNumber }) {
  return (
    <>
      <Link to={`/recipe/${recipe._id}`} className="card group shadow-none sm:max-w-sm h-[350px]">
        <figure className="h-[75%]">
          <img
            src={recipe.photo_path}
            alt={`Recipe no. ${recipeNumber}`}
            className="transition-transform rounded-lg object-cover duration-500 group-hover:scale-110 h-full"
          />
        </figure>
        <div className="card-body p-1">
          <h5 className="text-lg font-bold mb-2.5">{recipe.recipe_name}</h5>
          <div className="card-actions flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span>{recipe.avg_rating}</span>
              <span className="icon-[mingcute--star-fill]" style={{ width: 16, height: 16 }} />
              <span className="text-accent/60">{`(${recipe.reviews_count})`}</span>
            </div>
            <div>
              <span>{formatTime(recipe.estimated_time)}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
