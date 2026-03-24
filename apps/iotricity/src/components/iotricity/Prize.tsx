"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { eventWinners } from "../../../constants";

const GAME_ICONS: Record<string, string> = {
  Valorant: "🎯",
  BGMI: "🪖",
  "Free Fire": "⚡",
  "E-Football": "⚽",
};

const RANK_LABELS: Record<number, string> = {
  1: "Champion",
  2: "Runner Up",
  3: "2nd Runner Up",
};

const RANK_COLORS: Record<number, string> = {
  1: "var(--primary)",
  2: "#C0C0C0",
  3: "#CD7F32",
};

const RANK_GLOW: Record<number, string> = {
  1: "rgba(255,190,0,0.25)",
  2: "rgba(192,192,192,0.15)",
  3: "rgba(205,127,50,0.15)",
};

export default function Prize() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = eventWinners.length;

  const goTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setVisible(false);
      setAnimating(true);
      setTimeout(() => {
        setActive(next);
        setVisible(true);
        setTimeout(() => setAnimating(false), 500);
      }, 350);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % total, "right");
  }, [active, total, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total, "left");
  }, [active, total, goTo]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 4500);
  };

  const game = eventWinners[active];
  const icon = GAME_ICONS[game.game] ?? "🎮";

  const slideStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0) scale(1)"
      : direction === "right"
      ? "translateX(60px) scale(0.96)"
      : "translateX(-60px) scale(0.96)",
    transition: "opacity 0.35s cubic-bezier(.4,0,.2,1), transform 0.35s cubic-bezier(.4,0,.2,1)",
    willChange: "opacity, transform",
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 py-6 select-none">
      {/* Top label */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3
          className="text-xl lg:text-3xl font-bold tracking-widest uppercase"
          style={{ fontFamily: "KMR Apparat1", color: "var(--primary)" }}
        >
          {game.game}
        </h3>
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Carousel body */}
      <div style={slideStyle} className="w-full max-w-4xl">
        {/* Game image / banner area */}
        <div
          className="relative w-full h-36 lg:h-48 rounded-2xl mb-8 overflow-hidden flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,190,0,0.08) 0%, rgba(0,0,0,0.6) 100%)",
            border: "1px solid rgba(255,190,0,0.18)",
          }}
        >
          {/* Animated background grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,190,0,0.3) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,190,0,0.3) 40px)",
            }}
          />
          {game.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.imageUrl}
              alt={game.game}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 z-10">
              <span className="text-6xl lg:text-8xl" style={{ filter: "drop-shadow(0 0 24px var(--primary))" }}>
                {icon}
              </span>
              <span
                className="text-xs lg:text-sm font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--primary)", opacity: 0.6 }}
              >
                {game.game}
              </span>
            </div>
          )}

          {/* Scan line shimmer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg,transparent 60%,rgba(255,190,0,0.04) 100%)",
            }}
          />
        </div>

        {/* Podium */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-6">
          {/* Reorder: 2nd, 1st, 3rd — staggered heights */}
          {[...game.winners]
            .sort((a, b) => {
              // Display order: 2nd, 1st, 3rd
              const order: Record<number, number> = { 2: 0, 1: 1, 3: 2 };
              return (order[a.rank] ?? 99) - (order[b.rank] ?? 99);
            })
            .map((winner, i) => {
              const color = RANK_COLORS[winner.rank] ?? "var(--primary)";
              const glow = RANK_GLOW[winner.rank] ?? "transparent";
              const isFirst = winner.rank === 1;
              const rankEmoji = winner.rank === 1 ? "🥇" : winner.rank === 2 ? "🥈" : "🥉";
              return (
                <div
                  key={winner.rank}
                  className="flex-1 max-w-sm w-full lg:max-w-none text-center rounded-2xl p-4 lg:p-6 transition-all duration-500 mx-auto lg:mx-0"
                  style={{
                    background: `radial-gradient(ellipse at top, ${glow} 0%, rgba(0,0,0,0.4) 100%)`,
                    border: `1px solid ${color}33`,
                    transform: isFirst
                      ? "scale(1.06) translateY(-8px)"
                      : "scale(1) translateY(0)",
                    boxShadow: isFirst
                      ? `0 0 32px 4px ${glow}, 0 8px 32px rgba(0,0,0,0.4)`
                      : `0 4px 16px rgba(0,0,0,0.25)`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {/* Trophy emoji */}
                  <div className="text-3xl lg:text-4xl mb-2" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
                    {rankEmoji}
                  </div>

                  {/* Rank label */}
                  <div
                    className="text-xs lg:text-sm font-semibold tracking-widest uppercase mb-3"
                    style={{ color, fontFamily: "KMR Apparat1" }}
                  >
                    {RANK_LABELS[winner.rank]}
                  </div>

                  {/* Divider */}
                  <div
                    className="w-8 h-[1px] mx-auto mb-3"
                    style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }}
                  />

                  {/* Team name */}
                  <div
                    className={`font-bold break-words leading-tight ${isFirst ? "text-lg lg:text-2xl" : "text-base lg:text-xl"}`}
                    style={{ color, textShadow: `0 0 12px ${glow}` }}
                  >
                    {winner.name}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-2">
        <button
          onClick={() => { prev(); resetTimer(); }}
          aria-label="Previous game"
          className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "1px solid rgba(255,190,0,0.3)",
            background: "rgba(255,190,0,0.05)",
            color: "var(--primary)",
          }}
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {eventWinners.map((g, i) => (
            <button
              key={g.id}
              onClick={() => { goTo(i, i > active ? "right" : "left"); resetTimer(); }}
              aria-label={`Go to ${g.game}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                background: i === active ? "var(--primary)" : "rgba(255,190,0,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); resetTimer(); }}
          aria-label="Next game"
          className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            border: "1px solid rgba(255,190,0,0.3)",
            background: "rgba(255,190,0,0.05)",
            color: "var(--primary)",
          }}
        >
          ›
        </button>
      </div>

      {/* Game indicators strip */}
      <div className="flex flex-wrap justify-center gap-2 mt-1">
        {eventWinners.map((g, i) => (
          <button
            key={g.id}
            onClick={() => { goTo(i, i > active ? "right" : "left"); resetTimer(); }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300"
            style={{
              background: i === active ? "var(--primary)" : "transparent",
              color: i === active ? "#000" : "var(--primary)",
              border: "1px solid rgba(255,190,0,0.3)",
              opacity: i === active ? 1 : 0.5,
            }}
          >
            {GAME_ICONS[g.game]} {g.game}
          </button>
        ))}
      </div>
    </div>
  );
}