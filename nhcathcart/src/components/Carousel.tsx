import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "../css/Carousel.css";
export function Carousel(props: {images: string[]}) {
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
        {images.map((image) => {
          return (
            <CarouselItem image={image} />
          );
        })}
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={() => updateIndex(activeIndex - 1)}>
          <svg
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
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button className="carousel-button" onClick={() => updateIndex(activeIndex + 1)}>
          <svg
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
          </svg>
        </button>
      </div>
    </div>
  );
}
