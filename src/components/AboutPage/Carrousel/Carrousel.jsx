import image1 from "../../../assets/aboutPage/carrousel/carrousel_item_1.avif";
import image2 from "../../../assets/aboutPage/carrousel/carrousel_item_2.avif";
import image3 from "../../../assets/aboutPage/carrousel/carrousel_item_3.avif";
import image4 from "../../../assets/aboutPage/carrousel/carrousel_item_4.avif";
import image5 from "../../../assets/aboutPage/carrousel/carrousel_item_5.avif";

export default function Carrousel() {
  const carrouselItems = [image1, image2, image3, image4, image5];

  return (
    <>
      <div
        id="carrousel"
        data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 1500 }'
        className="relative w-full mb-12"
      >
        <div className="carousel h-120">
          <div className="carousel-body opacity-0 h-full">
            {carrouselItems.map((element, index) => (
              <div key={index} className="carousel-slide">
                <img src={element} className="w-full h-full object-cover" alt="carrouselitem" />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Slide */}
        <button type="button" className="carousel-prev">
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180" />
          </span>
          <span className="sr-only">Previous</span>
        </button>
        {/* Next Slide */}
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
            <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180" />
          </span>
        </button>
      </div>
    </>
  );
}
