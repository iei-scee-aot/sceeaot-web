"use client";

import { useState, useEffect } from "react";

interface Slide {
  url: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" flex mx-auto flex-col items-center justify-center w-full md:h-[450px] h-56 relative">
      <div className="flex items-center h-full">
        {/* Left Arrow */}
        <div
          className="text-4xl text-white z-20 cursor-pointer pr-5"
          onClick={goToPrevious}
          aria-label="Previous Slide"
        >
          ❰
        </div>

        {/* Slide with Transparent Effect */}
        <div
          className="w-[315px] h-[200px] md:w-[490px] md:h-[320px] rounded-lg bg-cover bg-center transition-transform duration-500 ease-in-out relative overflow-hidden transform hover:scale-105" 
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundColor: "transparent",
          }}
        >
          {/* Overlay for transparency effect */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Right Arrow */}
        <div
          className="text-4xl text-white z-20 cursor-pointer pl-5"
          onClick={goToNext}
          aria-label="Next Slide"
        >
          ❱
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-1 cursor-pointer transition-transform duration-300 ease-in-out ${
              slideIndex === currentIndex ? "text-yellow-400 transform scale-150" : "text-gray-400"
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
