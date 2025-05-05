import useFlyonUIInit from "../hooks/useFlyonUIInit";
import AdvantagesList from "../components/AboutPage/AdvantagesList/AdvantagesList";
import Carrousel from "../components/AboutPage/Carrousel/Carrousel";
import coupleImage from "../assets/aboutPage/cookleaf_happycouple_aboutsite.avif";
import tableTopViewImage from "../assets/aboutPage/cookleaf_tabletopview_aboutsite.avif";
import { Link } from "react-router-dom";

export default function About() {
  useFlyonUIInit();

  return (
    <>
      <div className="">
        <img src={coupleImage} alt="Happy couple" className="w-full object-cover mb-10 rounded-lg" />

        <div id="advantagesList" className="mb-10">
          <h2 className="text-3xl font-medium mb-8">Top 10 advantages of CookLeaf®</h2>
          <AdvantagesList></AdvantagesList>
          <Link to={"/register"} className="btn btn-soft btn-lg btn-primary">
            Create account now!
          </Link>
        </div>

        <div id="descOne" className="mb-10">
          <div className="mb-8">
            <h3 className="text-2xl mb-4">Create perfect meals effortlessly</h3>
            <h4 className="text-xl mb-2 underline">
              Feel the joy of cooking and save time to spend with family and friends.
            </h4>
            <p>
              CookLeaf® provides access to more than 89,000 great recipes from around the world, so it can
              help you make faster and better cooking decisions. Explore recipes, filter and select them
              according to your preferences to create delicious and diverse dishes that fit your personal
              lifestyle. Smarter meal planning. Easier cooking. More time for you.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Excellent results every time</h3>
            <h4 className="text-xl mb-2 underline">
              A surprisingly easy way to prepare your favorite foods.
            </h4>
            <p>
              CookLeaf® provides an endless source of inspiration for every day's recipe choices, and the
              Cooking with Settings feature ensures perfect cooking results every time with simple on-screen
              instructions and videos so you can prepare meals with peace of mind and confidence. Achieve
              perfect results - whether you're a novice cook or a master chef.
            </p>
          </div>
        </div>

        <img src={tableTopViewImage} alt="Happy couple" className="w-full object-cover mb-10 rounded-lg" />

        <div id="descTwo" className="mb-10">
          <div className="mb-8">
            <h3 className="text-2xl mb-4">Expand your horizons.</h3>
            <h4 className="text-xl mb-2 underline">Trying new things has never been easier.</h4>
            <p>
              CookLeaf® provides a range of resources and tools for planning, preparing and serving food -
              from classic everyday dishes to special occasion dishes. Browse quick dishes, seasonal cuisines,
              special diets and authentic international recipes to expand your culinary repertoire.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl mb-4">Let's get together and cook and learn together.</h3>
            <h4 className="text-xl mb-2 underline">
              Join a community of passionate cooks to share recipes and ideas.
            </h4>
            <p>
              Cooking brings people together, and CookLeaf® allows you to involve others in the cooking
              process, making it even more interactive. Share recipes and invite family members and friends to
              cook together, exchange ideas for shared meals, and share CookLeaf® shopping lists.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Discover new flavors and techniques from around the world.</h3>
            <h4 className="text-xl mb-2 underline">
              Explore a variety of international recipes and culinary traditions.
            </h4>
            <p>
              Cooking is a journey of discovery, and with CookLeaf®, you can expand your culinary horizons.
              Try new ingredients, explore global cuisines, and experiment with different cooking methods.
              Each recipe is an opportunity to learn something new and improve your cooking skills while
              enjoying the flavors of the world.
            </p>
          </div>
        </div>

        <Carrousel></Carrousel>
      </div>
    </>
  );
}
