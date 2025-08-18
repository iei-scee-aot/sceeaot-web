"use client";

import { useEffect, useState } from "react";

const Headlines = ({ headLine = "Headline", noMarquee = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Check if it's desktop and handle resize
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Disable marquee for About Us and Live Events on desktop
  const shouldDisableMarquee =
    noMarquee ||
    (isDesktop && (headLine === "About Us" || headLine === "Live Events"));

  return (
    <div
      className={`h-[2rem] md:h-[4rem] overflow-hidden ${
        shouldDisableMarquee ? "no-marquee" : ""
      }`}
    >
      <div
        className={`flex whitespace-nowrap ${
          isVisible ? "animate-marquee" : "opacity-0"
        }`}
      >
        <p
          className="text-[3.2rem] md:text-[7.1075rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] md:mb-0 md:mt-10 mr-36"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            lineHeight: "0",
          }}
        >
          {headLine}
        </p>
        <p
          className="text-[3.2rem] md:text-[7.1075rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] md:mb-0 md:mt-10 mr-36"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            lineHeight: "0",
          }}
        >
          {headLine}
        </p>
        <p
          className="text-[3.2rem] md:text-[7.1075rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] md:mb-0 md:mt-10 mr-36"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            lineHeight: "0",
          }}
        >
          {headLine}
        </p>
      </div>
    </div>
  );
};

export default Headlines;