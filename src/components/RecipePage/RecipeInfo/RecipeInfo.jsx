import { Link } from "react-router-dom";
import RecipeRating from "./RecipeRating/RecipeRating";
import RecipeMeta from "./RecipeMeta/RecipeMeta";

export default function RecipeInfo() {
  const tags = ["#test", "#test1", "#test2"];

  return (
    <>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex justify-start gap-2 mb-4">
          {tags.map((value, index) => (
            <span
              key={index}
              className="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6"
            >
              {value}
            </span>
          ))}
        </div>
        <h2 className="font-semibold text-4xl mb-6">Bułka test</h2>
        <RecipeRating rating={3.6} reviewsAmount={124}></RecipeRating>
        <RecipeMeta preparationTime={30} totalTime={65} portionsAmount={5}></RecipeMeta>
        <Link to={"/register"} className="btn btn-primary btn-xl w-fit">
          Register for free now
        </Link>
      </div>
    </>
  );
}
