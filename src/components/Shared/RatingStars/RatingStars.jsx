import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useState } from "react";

export default function RatingStars({ starsAmount, isInteractive, style }) {
  const [rating, setRating] = useState(starsAmount);

  return (
    <>
      <Rating
        itemStyles={{ itemShapes: Star, activeFillColor: "#000000", inactiveFillColor: "#CCCCCC" }}
        style={style}
        readOnly={!isInteractive}
        value={rating}
        onChange={setRating}
      />
    </>
  );
}
