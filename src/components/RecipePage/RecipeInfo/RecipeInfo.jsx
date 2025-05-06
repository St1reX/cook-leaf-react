import { Link } from "react-router-dom";
import RatingStars from "../../Shared/RatingStars/RatingStars";

export default function RecipeInfo() {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex justify-start gap-2 mb-4">
          <span className="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6">
            #test12
          </span>
        </div>
        <h2 className="font-semibold text-4xl mb-6">Bułka test</h2>
        <div className="flex items-center mb-6">
          <RatingStars
            style={{ maxWidth: 150, marginRight: 10 }}
            starsAmount={3}
            isInteractive={false}
          ></RatingStars>
          <span className="font-semibold mr-4 text-lg">3.1</span>
          <span className="text-accent/60">446 reviews</span>
        </div>
        <div className="flex flex-col font-medium gap-4 mb-8">
          <div className="flex items-center">
            <span
              className="icon-[mingcute--knife-line] mr-2"
              style={{ width: 24, height: 24, color: "#000" }}
            />
            <span>Preparation time: 30 minutes</span>
          </div>
          <div className="flex items-center">
            <span
              className="icon-[mingcute--knife-line] mr-2"
              style={{ width: 24, height: 24, color: "#000" }}
            />
            <span>Preparation time: 30 minutes</span>
          </div>
          <div className="flex items-center">
            <span
              className="icon-[mingcute--knife-line] mr-2"
              style={{ width: 24, height: 24, color: "#000" }}
            />
            <span>Preparation time: 30 minutes</span>
          </div>
        </div>
        <Link to={"/register"} className="btn btn-primary btn-xl w-fit">
          Register for free now
        </Link>
      </div>
    </>
  );
}
