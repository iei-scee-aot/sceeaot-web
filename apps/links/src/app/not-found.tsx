"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-secondary">
      {/* Main container with side borders */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto min-h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Animated 404 */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-[120px] md:text-[180px] lg:text-[240px] font-bold leading-none mb-4"
            style={{
              fontFamily: "KMR Apparat1",
              WebkitTextStroke: "2px var(--primary)",
              color: "transparent",
            }}
          >
            404
          </h1>
        </div>
        {/* Error Message */}
        <div
          className={`text-center max-w-2xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary font-apparat">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 text-secondary/80 font-pxg leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into
            the digital void. It might have been moved, deleted, or perhaps it
            never existed at all.
          </p>
        </div>
        {/* Footer Message */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-secondary/60 font-pxg">
            Lost? Don't worry, even the best engineers sometimes take wrong
            turns.
          </p>
        </div>
      </div>
    </div>
  );
}
