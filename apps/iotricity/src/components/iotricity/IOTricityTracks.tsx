"use client";

import Image from "next/image";
import { trackPrizes } from "../../../constants";
import { TrackPrize } from "../../../types";
import { track } from "@vercel/analytics";
import TrackPrizeCard from "../track-prizes/TrackPrizeCard";

const IOTricityTracks = ({ tracks }: {tracks: TrackPrize[] }) => {

  const tracksVisible = trackPrizes.length > 0 ? true : false;
  // const tracks = true;

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
      {tracksVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track: TrackPrize) => (
            <TrackPrizeCard key={track.id} track={track} />
          ))}
        </div>
      )}

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
