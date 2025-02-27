"use client";

import React from "react";

export default function EventsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-[25rem] mx-auto py-[1.25rem] min-h-screen bg-black text-white font-apparat">
      {/* Ongoing Events Section */}
      <div className="flex flex-col items-center gap-[1rem] border border-white p-[1rem] w-[25rem]">
        {/* Marquee Container */}
        <div
          className="relative marquee border border-white w-[25rem] overflow-hidden"
          style={{ height: "3rem" }}
        >
          <span className="block w-full text-center text-[1.5rem] font-bold uppercase text-yellow-400 tracking-wide animate-marquee">
            ONGOING EVENTS
          </span>
        </div>

        <img
          src="/images/cooking-illustration.png" // Replace with your actual image path
          alt="Cooking Illustration"
          className="w-[10rem] h-auto"
        />

        <p className="text-[1rem] text-center">
          We are cooking something special for you!
        </p>
        <p className="text-[1rem] font-semibold text-center">STAY TUNED!</p>
      </div>

      {/* Past Events Section */}
      <div className="flex flex-col items-center gap-[1rem] border border-white p-[1rem] w-[25rem]">
        {/* Marquee Container */}
        <div
          className="relative marquee border border-white w-[25rem] overflow-hidden"
          style={{ height: "3rem" }}
        >
          <span className="block w-full text-center text-[1.5rem] font-bold uppercase text-yellow-400 tracking-wide animate-marquee">
            PAST EVENTS
          </span>
        </div>

        <img
          src="/images/cooking-illustration.png" // Replace with your actual image path
          alt="Cooking Illustration"
          className="w-[10rem] h-auto"
        />

        <p className="text-[1rem] text-center">
          We are cooking something special for you!
        </p>
        <p className="text-[1rem] font-semibold text-center">STAY TUNED!</p>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </main>
  );
}
