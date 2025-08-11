"use client";

import { useEffect, useState } from "react";
import EventScheduleItem from "./EventScheduleItem";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventSchedule {
  id: number;
  title: string;
  icon: string;
  date: string;
  time: string;
  type: string;
}

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [hasDatePassed, setHasDatePassed] = useState(false);
  const [eventSchedule, setEventSchedule] = useState<EventSchedule[]>([]);

  useEffect(() => {
    setIsClient(true);

    // Load event schedule data
    const loadEventSchedule = async () => {
      try {
        const response = await fetch("/hackathon-schedule.json");
        const data = await response.json();
        setEventSchedule(data);
      } catch (error) {
        console.error("Failed to load event schedule:", error);
      }
    };

    loadEventSchedule();

    const calculateTimeRemaining = () => {
      const targetDate = new Date("2025-08-30T00:00:00").getTime();
      //   const now = new Date().getTime();
      const now = new Date("2025-08-30T01:00:00").getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
        setHasDatePassed(false);
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setHasDatePassed(true);
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="animate-pulse text-center">
          <div className="h-16 bg-gray-300 rounded mb-4 w-48"></div>
          <div className="h-8 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { value: timeRemaining.days, label: "Days" },
    { value: timeRemaining.hours, label: "Hours" },
    { value: timeRemaining.minutes, label: "Minutes" },
    { value: timeRemaining.seconds, label: "Seconds" },
  ];

  // If the date has passed, show hackathon information
  if (hasDatePassed) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        {/* Hackathon Title with Gold Header Design */}
        <div className="text-center mb-6">
          <h2
            className="text-[3rem] lg:text-[4rem] font-bold leading-tight tracking-tight mb-2"
            style={{
              fontFamily: "KMR Apparat1",
              WebkitTextStroke: "1px var(--primary)",
              color: "transparent",
            }}
          >
            IOTricity Season2.0
          </h2>
          <p className="text-lg lg:text-xl text-primary font-medium">
            Complete Event and Hackathon Schedule
          </p>
        </div>

        {/* Hackathon Schedule */}
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
              />
            ))}
          </div>
        </div>

        {/* Event Info */}
        <div className="text-center mt-6 px-4">
          <p className="text-base lg:text-lg text-secondary/70 max-w-3xl">
            Join us for IOTricity 2025! From online workshops and hackathon to
            the offline finale, experience a complete journey through IoT
            innovation and electrical engineering excellence.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Countdown Title with Gold Header Design */}
      <div className="text-center mb-6">
        <h2
          className="text-[3rem] lg:text-[4rem] font-bold leading-tight tracking-tight mb-2"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            color: "transparent",
          }}
        >
          IOTRICITY SEASON2.0
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Counting down to the biggest event of the year.
        </p>
      </div>

      {/* Countdown Display */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-4xl">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center bg-primary/10 border border-primary/30 rounded-lg p-4 lg:p-6 min-h-[120px] lg:min-h-[140px]"
          >
            <div
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-2"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm lg:text-base text-secondary/80 font-medium uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      {/* Event Info */}
      <div className="text-center mt-6 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-2xl">
          Join us for our upcoming event! Stay tuned for more details about this
          exciting opportunity to explore electrical engineering.
        </p>
      </div>
    </div>
  );
};

export default Countdown;
