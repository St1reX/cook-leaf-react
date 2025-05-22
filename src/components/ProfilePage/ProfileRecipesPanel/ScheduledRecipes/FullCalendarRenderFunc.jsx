export default function FullCalendarRenderFunc(eventInfo) {
  const {
    event: {
      extendedProps: { recipe_data, setSelectedRecipe },
    },
  } = eventInfo;

  const handleClick = () => {
    setSelectedRecipe(recipe_data);

    const modalEl = document.querySelector("#selected-recipe-modal");

    if (modalEl) {
      HSOverlay.open(modalEl);
    }
  };

  return (
    <>
      <button type="button" className="fc-event-title overflow-hidden">
        <span onClick={handleClick} className="badge badge-success cursor-pointer text-white">
          {eventInfo.event.title}
        </span>
      </button>
    </>
  );
}
