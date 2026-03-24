"use client";

import { useEffect, useState } from "react";
import Confetti from "./Confetti";
import { event, eventWinners } from "../../../constants";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ now }: { now: number }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [hasEventEnded, setHasEventEnded] = useState(false);

  // Multi-phase countdown states
  const [currentPhase, setCurrentPhase] = useState<
    "initial" | "hackathon" | "winners" | "ended" | "tournament"
  >("initial");
  const [phaseTitle, setPhaseTitle] = useState("");
  const [phaseDescription, setPhaseDescription] = useState("");

  useEffect(() => {
    setIsClient(true);

    const calculateTimeRemaining = () => {
      const hackathonStartDate = new Date(event.eventStart).getTime();
      const hackathonEndDate = new Date(event.eventEnd).getTime();
      const winnersDate = new Date(event.eventWinnersDate).getTime();

      let targetDate: number;
      let phase: "initial" | "hackathon" | "winners" | "ended" | "tournament";
      let title: string;
      let description: string;

      if (now < hackathonStartDate) {
        targetDate = hackathonStartDate;
        phase = "initial";
        title = "The Ultimate Esports Showdown Begins";
        description =
          "Gear up for intense battles in BGMI, Free Fire, Valorant, and eFootball. Assemble your squad and prepare to dominate!";
      } else if (now < hackathonEndDate) {
        targetDate = hackathonEndDate;
        phase = "tournament"; // Changed phase name from 'hackathon'
        title = "Live Tournament Ends";
        description =
          "The battlegrounds are live! Teams are fighting for the championship. Time remaining in the tournament:";
      } else if (now < winnersDate) {
        targetDate = winnersDate;
        phase = "winners";
        title = "Champions Will Be Crowned";
        description =
          "The matches have concluded! Officials are verifying the final scores and standings. Winners will be announced soon:";
      } else {
        phase = "ended";
        title = "Tournament Concluded";
        description = "GGWP! Thank you to all the players and teams for an amazing event. See you in the next season.";
        targetDate = winnersDate;
      }

      setCurrentPhase(phase);
      setPhaseTitle(title);
      setPhaseDescription(description);

      if (phase === "ended") {
        setHasEventEnded(true);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

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
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  if (hasEventEnded || currentPhase === "ended") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8 relative">
        <Confetti />
        {/* Thank You Title with Gold Header Design */}
        <div className="text-center mb-6 animate-fade-in">
          <h2
            className="text-[3rem] lg:text-[4rem] font-bold leading-tight tracking-tight mb-2 animate-bounce-slow"
            style={{
              fontFamily: "KMR Apparat1",
              WebkitTextStroke: "1px var(--primary)",
              color: "transparent",
            }}
          >
            Thank You!
          </h2>
          <p className="text-lg lg:text-xl text-primary font-medium animate-fade-in-delay">
            {phaseTitle}
          </p>
        </div>

        {/* Thank You Message */}
        <div className="w-full max-w-4xl bg-primary/10 border border-primary/30 rounded-lg p-8 text-center animate-slide-up">
          <div className="text-6xl mb-6 animate-bounce">🏆</div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4 animate-fade-in-delay-2"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            GGWP! The Tournament Has Concluded!
          </h3>
          <p className="text-base lg:text-lg text-secondary/80 mb-6 max-w-2xl mx-auto animate-fade-in-delay-3">
            Thank you to all the players and squads for dropping in and giving it your all across BGMI, Free Fire, Valorant, and eFootball. The insane clutches, strategic plays, and relentless competitive spirit made this event truly legendary.
          </p>
          <div className="space-y-4 text-secondary/70 animate-fade-in-delay-4">
            <p className="text-lg font-medium text-primary">
              We hope you enjoyed the intense competition and the thrill of the battle!
            </p>
            <p className="text-base">
              Stay connected with us for future tournaments, scrims, and prize pools.
            </p>
            <div className="text-2xl mt-6 animate-wave">
              <span
                className="text-primary font-bold"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                See you in the next lobby!
              </span>
              <span className="ml-2 animate-wave-hand">🎮</span>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-6 px-4 animate-fade-in-delay-5">
          <p className="text-sm lg:text-base text-secondary/60">
            Keep grinding, stay sharp, and never stop climbing the ranks!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Countdown Title */}
      <div className="text-center mb-6">
        <h2
          className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-2 text-primary"
          style={{ fontFamily: "KMR Apparat1" }}
        >
          {phaseTitle}
        </h2>
        <p className="text-lg lg:text-xl text-secondary/80 font-medium max-w-2xl mx-auto">
          {phaseDescription}
        </p>
      </div>

      {/* Phase indicator for multi-phase mode */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`w-3 h-3 rounded-full ${
            currentPhase === "initial" ? "bg-primary" : "bg-gray-600"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            currentPhase === "hackathon" || currentPhase === "tournament" ? "bg-secondary" : "bg-gray-600"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            currentPhase === "winners" ? "bg-primary" : "bg-gray-600"
          }`}
        ></div>
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

      {/* Phase-specific information */}
      <div className="text-center mt-6 px-4">
        {currentPhase === "initial" && (
          <p className="text-base lg:text-lg text-secondary/70 max-w-2xl">
            🎯 Join us for our Gaming Event! The countdown to the ultimate esports showdown has begun. Get your squads ready ⚔️
          </p>
        )}
        {currentPhase === "tournament" && (
          <p className="text-base lg:text-lg text-secondary/80 max-w-2xl">
            🚀 The tournament is LIVE! Squads are battling it out across BGMI, 
            Free Fire, Valorant, and eFootball. Secure those top placements before time runs out!
          </p>
        )}
        {currentPhase === "winners" && (
          <p className="text-base lg:text-lg text-primary/80 max-w-2xl">
            🏆 The matches have concluded! Tournament officials are verifying final 
            scores and leaderboards. The ultimate champions will be crowned soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Countdown;
