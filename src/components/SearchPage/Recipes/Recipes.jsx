import { useRecipes } from "../../../context/RecipesContext";
import formatTime from "../../../utils/formatTIme";
import ShowMore from "./components/ShowMore";
import { Link } from "react-router-dom";

export default function Recipes() {
  const { recipes, isLoading } = useRecipes();

  return (
    <>
      <div id="gridWrapper" className="grid gap-6 grid-cols-[repeat(auto-fit,240px)] justify-center mb-4">
        {isLoading ? (
          <span className="loading loading-spinner text-success loading-xl text-center justify-self-center"></span>
        ) : (
          recipes.map((value, index) => (
            <Link
              to={`/recipe/${value._id}`}
              key={value._id}
              className="card group shadow-none sm:max-w-sm h-[350px]"
            >
              <figure className="h-[75%]">
                <img
                  src={value.photo_path}
                  alt={`Recipe no. ${index}`}
                  className="transition-transform rounded-lg object-cover duration-500 group-hover:scale-110 h-full"
                />
              </figure>
              <div className="card-body p-1">
                <h5 className="text-lg font-bold mb-2.5">{value.recipe_name}</h5>
                <div className="card-actions flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <span>{value.avg_rating}</span>
                    <span className="icon-[mingcute--star-fill]" style={{ width: 16, height: 16 }} />
                    <span className="text-accent/60">{`(${value.reviews_count})`}</span>
                  </div>
                  <div>
                    <span>{formatTime(value.estimated_time)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
