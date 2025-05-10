export default function ActiveFilters({ filters, onFilterDelete }) {
  const filtersToDisplay = Object.values(filters).filter(({ displayLocation, value }) => {
    return displayLocation === "filtersList" && typeof value === "string";
  });

  return (
    <>
      {filtersToDisplay.map(({ prefix, value }) => (
        <button key={value} className="btn btn-soft btn-primary text-accent/80">
          {prefix + value}
          <span className="icon-[mingcute--close-line]" style={{ width: 24, height: 24, color: "#000" }} />
        </button>
      ))}
    </>
  );
}
