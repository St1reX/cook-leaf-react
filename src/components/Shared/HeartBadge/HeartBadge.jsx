import { useAuth } from "../../../context/AuthContext";
import { notyfInstance } from "../../../constants/notyfConfig";
import useAddToFavouritesMutation from "../../../mutations/useAddToFavouritesMutation";
import useDeleteFromFavouritesMutation from "../../../mutations/useDeleteFromFavouritesMutation";

export default function HeartBadge({ recipe }) {
  const addToFavouritesMutation = useAddToFavouritesMutation();
  const deleteFromFavouritesMutation = useDeleteFromFavouritesMutation();
  const { user, setUser } = useAuth();
  const isInFavourites = user?.favourite_recipes.some((r) => r._id === recipe._id);

  const handleClick = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
      notyfInstance.error("You must be logged in to add a recipe to your favorites.");
      return;
    }

    try {
      if (isInFavourites) {
        await deleteFromFavouritesMutation.mutateAsync(recipe._id);
        setUser((prev) => ({
          ...prev,
          favourite_recipes: prev.favourite_recipes.filter((r) => r._id !== recipe._id),
        }));
      } else {
        await addToFavouritesMutation.mutateAsync(recipe._id);
        setUser((prev) => ({ ...prev, favourite_recipes: [...prev.favourite_recipes, recipe] }));
      }
    } catch (error) {}
  };

  return (
    <>
      <span
        onClick={handleClick}
        className="badge badge-primary bg-transparent border-none size-6 rounded-full p-0 absolute top-2 right-2 z-10 cursor-pointer"
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
