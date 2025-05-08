import RatingStars from "../../../Shared/RatingStars/RatingStars";

export default function RecipeRating({ rating, reviewsAmount }) {
  return (
    <>
      <div className="flex items-center mb-6">
        <RatingStars
          style={{ maxWidth: 150, marginRight: 10 }}
          starsAmount={rating}
          isInteractive={false}
        ></RatingStars>
        <span className="font-semibold mr-4 text-lg">{rating}</span>
        <span className="text-accent/60">{reviewsAmount} reviews</span>
      </div>
    </>
  );
}
