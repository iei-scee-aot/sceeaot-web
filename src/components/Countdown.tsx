"use client";

import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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

  useEffect(() => {
    setIsClient(true);

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
            Online Hackathon
          </h2>
          <p className="text-lg lg:text-xl text-primary font-medium">
            Event Schedule
          </p>
        </div>

        {/* Hackathon Schedule */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 max-w-4xl w-full">
          <div className="text-center space-y-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
              <div className="flex-1">
                <h3
                  className="text-xl lg:text-2xl font-bold text-primary mb-2"
                  style={{ fontFamily: "KMR Apparat1" }}
                >
                  Hacakathon Starts
                </h3>
                <p className="text-lg lg:text-xl text-secondary">
                  August 30th, 2025
                </p>
                <p className="text-lg lg:text-xl text-primary font-semibold">
                  8:00 PM
                </p>
              </div>

              <div className="hidden lg:block w-px h-16 bg-primary/30"></div>
              <div className="lg:hidden w-full h-px bg-primary/30"></div>

              <div className="flex-1">
                <h3
                  className="text-xl lg:text-2xl font-bold text-primary mb-2"
                  style={{ fontFamily: "KMR Apparat1" }}
                >
                  Hacakathon Ends
                </h3>
                <p className="text-lg lg:text-xl text-secondary">
                  September 1st, 2025
                </p>
                <p className="text-lg lg:text-xl text-primary font-semibold">
                  8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="text-center mt-6 px-4">
          <p className="text-base lg:text-lg text-secondary/70 max-w-2xl">
            Join us for our exciting online hackathon! Explore innovative
            solutions and collaborate with fellow electrical engineering
            enthusiasts over the weekend.
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
          Event Countdown
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Counting down to August 30th, 2025
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
