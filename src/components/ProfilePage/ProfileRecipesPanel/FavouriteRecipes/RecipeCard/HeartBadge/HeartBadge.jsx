export default function HeartBadge({ recipeID }) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <span
        onClick={handleClick}
        className="badge badge-primary bg-transparent border-none size-6 rounded-full p-0 absolute top-2 right-2 z-50"
      >
        <span className="icon-[mingcute--heart-fill]" style={{ width: 96, height: 96, color: "#f01154" }} />
      </span>
    </>
  );
}
