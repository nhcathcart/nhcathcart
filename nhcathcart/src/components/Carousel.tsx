import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "../css/Carousel.css";
export function Carousel(props: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images } = props;
  function updateIndex(newIndex: number) {
    if (newIndex < 0) return;
    if (newIndex >= images.length) return;
    setActiveIndex(newIndex);
  }
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => {
          return <CarouselItem image={image} key={`carousel-item-${index}`} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          className={
            activeIndex === 0 ? "carousel-button-disabled" : "carousel-button"
          }
          onClick={() => updateIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M480 855.5 200.5 576 480 295.5l16.5 16-254 253h518v22h-518l254 253-16.5 16Z" />
          </svg>

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            height="100" viewBox="0 0 200 200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg> */}
        </button>
        <button
          className={activeIndex>=images.length-1? "carousel-button-disabled" : "carousel-button"}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="m480 855.5-14.5-16 252-253h-517v-22h517l-252-253 14.5-16L760.5 576 480 855.5Z" />
          </svg>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg> */}
        </button>
      </div>
    </div>
  );
}
