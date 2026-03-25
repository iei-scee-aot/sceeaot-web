import Image from 'next/image'
import React from 'react'
import { TrackPrize } from '../../../types'

const TrackPrizeCard = ({ track }: { track: TrackPrize }) => {
  return (
    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 lg:p-8 text-center hover:bg-primary/20 transition-all duration-300">
        <div className="flex justify-center mb-4">
        <Image
            src={track.icon}
            alt={track.title}
            width={42}
            height={42}
            className="w-10 h-10 lg:w-12 lg:h-12"
        />
        </div>
        <h3
        className="text-xl lg:text-2xl font-bold text-primary mb-4"
        style={{ fontFamily: "KMR Apparat1" }}
        >
        {track.title}
        </h3>
        <div className="border-b border-primary/20 pb-4 mb-4">
        <p className="text-xs lg:text-sm text-primary font-medium mb-1">
            WINNER
        </p>
        <p className="text-2lg lg:text-3xl font-bold text-secondary">
            {track.winner}
        </p>
        </div>
        <p className="text-sm lg:text-base text-secondary/80 leading-relaxed mb-4">
            {track.description}
        </p>
    </div>
  )
}

export default TrackPrizeCard