import RatingStars from "../../../../../Shared/RatingStars/RatingStars";

export default function Rating({ onRatingChange }) {
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Rating</h3>

        <ul className="text-base-content/80 list-inside">
          {[1, 2, 3, 4, 5].map((value) => (
            <li key={value} className="flex justify-between items-center gap-1 mb-3">
              <div className="flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary mr-2" id={`rating-${value}`} />
                <RatingStars
                  starsAmount={value}
                  isInteractive={false}
                  style={{ maxWidth: 150 }}
                ></RatingStars>
              </div>
              <span>12312 Results</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
