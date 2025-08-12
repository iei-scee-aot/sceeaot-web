"use client";

import { Award, Medal, Trophy } from "lucide-react";

const IOTricityPrizes = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Prizes Title */}
      <div className="text-center mb-8">
        <h2
          className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-2"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            color: "transparent",
          }}
        >
          Prize Pool
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Compete for exciting prizes and recognition
        </p>
      </div>

      {/* Winners Podium */}
      <div className="flex flex-col lg:flex-row items-end justify-center gap-8 max-w-4xl mx-auto">
        {/* 2nd Place - Left */}
        <div className="order-2 lg:order-1 bg-secondary/10 border border-secondary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-secondary/20 transition-all duration-300 w-full lg:w-80">
          <div className="flex justify-center mb-4">
            <Medal className="w-12 h-12 lg:w-16 lg:h-16 text-secondary" />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-secondary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Runner Up
          </h3>
          <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            ₹3,000
          </div>
          <p className="text-sm lg:text-base text-secondary/80">
            Certificate + Cash Prize + IoT Kit
          </p>
        </div>

        {/* 1st Place - Center (Elevated) */}
        <div className="order-1 lg:order-2 bg-primary/10 border border-primary/30 rounded-lg p-8 lg:p-10 text-center hover:bg-primary/20 transition-all duration-300 w-full lg:w-96 lg:transform lg:scale-110">
          <div className="flex justify-center mb-6">
            <Trophy className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
          </div>
          <h3
            className="text-2xl lg:text-3xl font-bold text-primary mb-6"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Winner
          </h3>
          <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            ₹5,000
          </div>
          <p className="text-base lg:text-lg text-secondary/80">
            Certificate + Cash Prize + Premium IoT Kit + Internship Opportunity
          </p>
        </div>

        {/* 3rd Place - Right */}
        <div className="order-3 bg-secondary/10 border border-secondary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-secondary/20 transition-all duration-300 w-full lg:w-80">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 lg:w-16 lg:h-16 text-secondary" />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-secondary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            2nd Runner Up
          </h3>
          <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            ₹2,000
          </div>
          <p className="text-sm lg:text-base text-secondary/80">
            Certificate + Cash Prize + Basic IoT Kit
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-3xl mx-auto">
          All participants will receive certificates of participation and access
          to exclusive workshops and networking opportunities.
        </p>
      </div>
    </div>
  );
};

export default IOTricityPrizes;
