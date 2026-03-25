"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const interval = 3000; // 3 seconds
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4 lg:mt-0 overflow-hidden group">
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0} // Priority loading for the first image
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b to-black/65 from-transparent z-20 pointer-events-none" />

      {/* Navigation Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Switch to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideShow;