import { Link } from "react-router-dom";
import formatTime from "../../../../../utils/formatTIme";
import HeartBadge from "./HeartBadge/HeartBadge";

export default function RecipeCard({ recipe, recipeNumber }) {
  return (
    <>
      <Link to={`/recipe/${recipe._id}`} className="card group shadow-none sm:max-w-sm h-[350px] w-[240px]">
        <figure className="h-[75%] relative">
          <img
            src={recipe.photo_path}
            alt={`Recipe no. ${recipeNumber}`}
            className="transition-transform rounded-lg object-cover duration-500 group-hover:scale-110 h-full"
          />
          <HeartBadge recipeID={recipe._id}></HeartBadge>
        </figure>
        <div className="card-body p-1">
          <h5 className="text-lg font-bold mb-2.5">{recipe.recipe_name}</h5>
          <div className="card-actions flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span>{recipe.avg_rating}</span>
              <span className="icon-[mingcute--star-fill]" style={{ width: 16, height: 16 }} />
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
