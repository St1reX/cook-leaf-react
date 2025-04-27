import notFoundImage from "../assets/not_found_undraw.svg";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24 min-h-[70vh]">
        <img src={notFoundImage} className="w-32 mb-8"></img>

        <h4 className="font-bold text-xl mb-4">We are sorry!</h4>
        <p className="text-lg mb-8">
          Unfortunately, the page was not found. Go to the home page or use the search engine.
        </p>

        <button className="btn btn-outline btn-xl btn-primary">Explore</button>
      </div>
    </>
  );
}
