"use client";

import Image from "next/image";

const IOTricityTracks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Tracks Title */}
      <div className="text-center mb-8">
        <h2
          className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-2"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            color: "transparent",
          }}
        >
          Special Awards
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Compete for specialized recognition in these categories
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Track 1: Best use of Machine Learning */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/best-ml.svg"
              alt="Best use of Machine Learning"
              width={42}
              height={42}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Best use of Machine Learning
          </h3>
          {/* Winner Information */}
          <div className="border-b border-primary/20 pb-4 mb-4">
            <p className="text-xs lg:text-sm text-primary font-medium mb-1">
              WINNER
            </p>
            <p className="text-2lg lg:text-3xl font-bold text-secondary">
              Infinite Loop
            </p>
          </div>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed mb-4">
            Recognition for the most innovative and effective implementation of
            machine learning algorithms and AI in IoT solutions.
          </p>
        </div>

        {/* Track 2: Best use of Cloud */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/best-cloud.svg"
              alt="Best use of Cloud"
              width={41}
              height={42}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Best use of Cloud
          </h3>
          {/* Winner Information */}
          <div className="border-b border-primary/20 pb-4 mb-4">
            <p className="text-xs lg:text-sm text-primary font-medium mb-1">
              WINNER
            </p>
            <p className="text-2lg lg:text-3xl font-bold text-secondary">
              Sorcerers
            </p>
          </div>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed mb-4">
            Award for outstanding cloud computing integration, scalability, and
            distributed architecture in IoT applications.
          </p>
        </div>

        {/* Track 3: Best implementation of Security */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/best-security.svg"
              alt="Best implementation of Security"
              width={42}
              height={42}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Best implementation of Security
          </h3>
          {/* Winner Information */}
          <div className="border-b border-primary/20 pb-4 mb-4">
            <p className="text-xs lg:text-sm text-primary font-medium mb-1">
              WINNER
            </p>
            <p className="text-2lg lg:text-3xl font-bold text-secondary">
              Thingdom
            </p>
          </div>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed mb-4">
            Celebrating excellence in cybersecurity, data protection, and secure
            communication protocols in IoT systems.
          </p>
        </div>

        {/* Track 4: Best all girls team */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/best-girls.svg"
              alt="Best all girls team"
              width={41}
              height={42}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Best all girls team
          </h3>
          {/* Winner Information */}
          <div className="border-b border-primary/20 pb-4 mb-4">
            <p className="text-xs lg:text-sm text-primary font-medium mb-1">
              WINNER
            </p>
            <p className="text-2lg lg:text-3xl font-bold text-secondary">
              Powerpuff Girls
            </p>
          </div>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed mb-4">
            Special recognition for the most outstanding project created by an
            all-female team, promoting diversity in tech.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-3xl mx-auto">
          These special awards recognize excellence in specific areas of IoT
          development. Teams can compete for multiple awards based on their
          project's features and implementation.
        </p>
      </div>
    </div>
  );
};

export default IOTricityTracks;
