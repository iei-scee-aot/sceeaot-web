"use client";

import { useEffect, useRef, useState } from "react";

interface EventScheduleItemProps {
  title: string;
  icon: string;
  date: string;
  time: string;
  isLast?: boolean;
  index?: number;
}

const EventScheduleItem = ({
  title,
  icon,
  date,
  time,
  isLast = false,
  index = 0,
}: EventScheduleItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`flex items-start gap-4 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div
          className={`absolute left-6 top-12 w-0.5 h-full bg-primary/30 z-0 transition-all duration-1000 delay-300 ${
            isVisible ? "scale-y-100" : "scale-y-0"
          } origin-top`}
        ></div>
      )}

      {/* Timeline Node */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 bg-primary text-background border-primary z-10 flex-shrink-0 transition-all duration-500 ${
          isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
        } hover:scale-110 hover:rotate-12`}
      >
        <span
          className={`text-lg transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className={`p-4 rounded-lg border bg-primary/10 border-primary/40 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3
            className={`font-bold text-base lg:text-lg mb-2 text-secondary transition-all duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontFamily: "KMR Apparat1" }}
          >
            {title}
          </h3>
          <div
            className={`space-y-1 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm lg:text-base text-primary font-medium animate-pulse">
              {date}
            </p>
            {time && (
              <p className="text-sm text-secondary/80 font-mono">{time}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScheduleItem;
