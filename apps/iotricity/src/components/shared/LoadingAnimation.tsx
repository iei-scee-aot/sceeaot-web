"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [animationStage, setAnimationStage] = useState<
    "initial" | "revealing" | "complete"
  >("initial");

  useEffect(() => {
    // Start the animation after a brief moment
    const initialTimer = setTimeout(() => {
      setAnimationStage("revealing");
    }, 500);

    // Complete the animation and call onComplete
    const completeTimer = setTimeout(() => {
      setAnimationStage("complete");
      setTimeout(onComplete, 600);
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-700 ${
        animationStage === "complete"
          ? "opacity-0 pointer-events-none transform scale-105"
          : "opacity-100"
      }`}
    >
      {/* Logo Container */}
      <div className="relative overflow-hidden">
        <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
          {/* Logo Image */}
          <div
            className={`relative w-full h-full transition-all duration-2000 ease-out ${
              animationStage === "revealing"
                ? "transform translate-x-0 opacity-100 scale-100"
                : "transform translate-x-full opacity-0 scale-95"
            }`}
            style={{
              transitionDuration: "2000ms",
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Image
              src="/iotricity.svg"
              alt="Iotricity Logo"
              fill
              className="object-contain filter drop-shadow-2xl"
              priority
            />
          </div>

          {/* Reveal Effect Overlay - Black curtain sliding away */}
          <div
            className={`absolute inset-0 bg-black transition-transform duration-2200 ease-out ${
              animationStage === "revealing"
                ? "transform translate-x-full"
                : "transform translate-x-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        </div>
      </div>

      {/* Organization Name */}
      <div
        className={`mt-8 transition-all duration-1500 delay-1000 ${
          animationStage === "revealing"
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4"
        }`}
      >
        <h1 className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wide text-center">
          Welcome to IoTricity Season 2
        </h1>
      </div>

      {/* Loading Dots */}
      <div
        className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1500 ${
          animationStage === "revealing" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "1.5s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
