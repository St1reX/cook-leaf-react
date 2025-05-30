import HeartBadge from "../../Shared/HeartBadge/HeartBadge";

export default function RecipePhoto({ recipe }) {
  return (
    <>
      <div className="w-1/2 h-full rounded-lg relative">
        <img
          src={recipe.photo_path}
          alt={`${recipe.recipe_name} picture`}
          className="h-full w-full object-cover rounded-lg"
        />
        <HeartBadge recipe={recipe} />
      </div>
    </>
  );
}
