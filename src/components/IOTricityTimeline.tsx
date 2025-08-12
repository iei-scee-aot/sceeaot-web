"use client";

import { useEffect, useState } from "react";
import EventScheduleItem from "./EventScheduleItem";

interface EventSchedule {
  id: number;
  title: string;
  icon: string;
  date: string;
  time: string;
  type: string;
}

const IOTricityTimeline = () => {
  const [eventSchedule, setEventSchedule] = useState<EventSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEventSchedule = async () => {
      try {
        const response = await fetch("/hackathon-schedule.json");
        const data = await response.json();
        setEventSchedule(data);
      } catch (error) {
        console.error("Failed to load event schedule:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEventSchedule();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="animate-pulse text-center">
          <div className="h-16 bg-gray-300 rounded mb-4 w-48"></div>
          <div className="h-8 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Timeline Title */}
      <div className="text-center mb-6">
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
          Complete IOTricity Season 2.0 Timeline
        </p>
      </div>

      {/* Timeline Content */}
      <div className="w-full max-w-4xl">
        {/* Timeline Container */}
        <div className="relative">
          {eventSchedule.map((event, index) => (
            <EventScheduleItem
              key={event.id}
              title={event.title}
              icon={event.icon}
              date={event.date}
              time={event.time}
              type={event.type}
              isLast={index === eventSchedule.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Timeline Info */}
      <div className="text-center mt-6 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-3xl">
          Follow the complete journey of IOTricity Season 2.0! From online
          workshops and hackathon to the offline finale, every moment is
          designed to enhance your IoT and electrical engineering skills.
        </p>
      </div>
    </div>
  );
};

export default IOTricityTimeline;
