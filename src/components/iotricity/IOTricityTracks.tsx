"use client";

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
          Choose Your Track
        </h2>
        <p className="text-lg lg:text-xl text-primary font-medium">
          Multiple pathways to innovation and excellence
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Track 1: IoT Hardware */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl mb-4">🔧</div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            IoT Hardware
          </h3>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed">
            Design and build innovative IoT devices using microcontrollers,
            sensors, and actuators. Focus on hardware integration and embedded
            systems.
          </p>
        </div>

        {/* Track 2: Smart Software Solutions */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl mb-4">💻</div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Smart Software
          </h3>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed">
            Develop intelligent software applications with AI/ML integration,
            cloud computing, and data analytics for IoT ecosystems.
          </p>
        </div>

        {/* Track 3: Sustainability & Green Tech */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl mb-4">🌱</div>
          <h3
            className="text-xl lg:text-2xl font-bold text-primary mb-4"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            Green Tech
          </h3>
          <p className="text-sm lg:text-base text-secondary/80 leading-relaxed">
            Create sustainable IoT solutions for environmental monitoring,
            energy efficiency, and green technology innovations.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 px-4">
        <p className="text-base lg:text-lg text-secondary/70 max-w-3xl mx-auto">
          Choose the track that aligns with your interests and expertise. Each
          track offers unique challenges and learning opportunities in the
          exciting world of IoT.
        </p>
      </div>
    </div>
  );
};

export default IOTricityTracks;
