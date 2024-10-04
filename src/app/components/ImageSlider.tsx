"use client";
import { useState } from "react";

interface Slide {
  url: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-[600px] pr-40 pl-40">
      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-4xl text-white z-10 cursor-pointer pl-20"
        onClick={goToPrevious}
      >
        ❰
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-4xl text-white z-10 cursor-pointer pr-20"
        onClick={goToNext}
      >
        ❱
      </div>

      {/* Slide */}
      <div
        className="w-full h-full rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-1 cursor-pointer text-2xl ${
              slideIndex === currentIndex ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
