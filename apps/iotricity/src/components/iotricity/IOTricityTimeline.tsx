"use client";

import { useEffect, useRef, useState } from "react";
import { eventSchedule } from "../../../constants";

interface EventScheduleItemProps {
  title: string;
  date: string;
  time?: string;
  isLast?: boolean;
  index?: number;
}

interface EventSchedule {
  id: number;
  title: string;
  icon: string;
  date: string;
  time: string;
  type: string;
}

const TimelineItem = ({
  title,
  date,
  time,
  isLast = false,
  index = 0,
}: EventScheduleItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 100); // Stagger animation
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      {/* Timeline Dot */}
      <div className="relative flex items-center justify-center flex-shrink-0 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 bg-primary border-primary/50 transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Content Card */}
      <div
        className={`ml-6 pb-8 flex-1 transition-all duration-600 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="p-4 lg:p-6 rounded-lg border bg-primary/10 border-primary/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <h3
            className="font-bold text-lg lg:text-xl mb-3 text-secondary"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            {title}
          </h3>
          <div className="space-y-1">
            <p className="text-sm lg:text-base text-primary font-medium">
              {date}
            </p>
            {time && (
              <p className="text-sm lg:text-base text-secondary/80 font-mono">
                {time}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const IOTricityTimeline = () => {
  const [lineProgress, setLineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Timeline starts animating when it enters viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const visibleHeight = Math.min(
          windowHeight - elementTop,
          elementHeight
        );
        const progress = Math.max(
          0,
          Math.min(100, (visibleHeight / elementHeight) * 100)
        );
        setLineProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Timeline Title */}
      <div className="text-center mb-8">
        <h2
          className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-2"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            color: "transparent",
          }}
        >
          Event Schedule
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Complete ESCAYPE Timeline
        </p>
      </div>

      {/* Timeline Content */}
      <div className="w-full max-w-2xl lg:max-w-3xl">
        <div ref={timelineRef} className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-2 top-0 w-0.5 bg-primary/20 h-full">
            <div
              className="w-full bg-primary transition-all duration-300 ease-out"
              style={{
                height: `${lineProgress}%`,
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {eventSchedule.map((event, index) => (
              <TimelineItem
                key={event.id}
                title={event.title}
                date={event.date}
                isLast={index === eventSchedule.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Info */}
      <div className="text-center mt-8 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-2xl mx-auto">
          Follow the complete journey of our Gaming Event! From intense online qualifiers to the thrilling finale, every moment is packed with action, competition, and unforgettable gameplay.
        </p>
      </div>
    </div>
  );
};

export default IOTricityTimeline;
