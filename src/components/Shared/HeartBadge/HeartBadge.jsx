import { useAuth } from "../../../context/AuthContext";
import { notyfInstance } from "../../../constants/notyfConfig";
import useAddToFavouritesMutation from "../../../mutations/useAddToFavouritesMutation";
import useDeleteFromFavouritesMutation from "../../../mutations/useDeleteFromFavouritesMutation";

export default function HeartBadge({ recipeID, recipeName }) {
  const addToFavouritesMutation = useAddToFavouritesMutation();
  const deleteFromFavouritesMutation = useDeleteFromFavouritesMutation();
  const { user, setUser } = useAuth();
  const isInFavourites = user?.favourite_recipes.some((r) => r._id === recipeID);

  const handleClick = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
      notyfInstance.error("You must be logged in to add a recipe to your favorites.");
    }

    try {
      if (isInFavourites) {
        const response = await deleteFromFavouritesMutation.mutateAsync(recipeID);
        notyfInstance.success(response.message);
        setUser((prev) => ({
          ...prev,
          favourite_recipes: prev.favourite_recipes.filter((r) => r._id !== recipeID),
        }));
      } else {
        const response = await addToFavouritesMutation.mutateAsync(recipeID);
        notyfInstance.success(response.message);
        setUser((prev) => ({ ...prev, favourite_recipes: [...prev.favourite_recipes, { _id: recipeID }] }));
      }
    } catch (error) {
      notyfInstance.error(error.response.data.message);
    }
  };

  return (
    <>
      <span
        onClick={handleClick}
        className="badge badge-primary bg-transparent border-none size-6 rounded-full p-0 absolute top-2 right-2 z-50 cursor-pointer"
      >
        {isInFavourites ? (
          <span className="icon-[mingcute--heart-fill]" style={{ width: 96, height: 96, color: "#f01154" }} />
        ) : (
          <span className="icon-[mingcute--heart-line]" style={{ width: 96, height: 96, color: "#f01154" }} />
        )}
      </span>
    </>
  );
}
