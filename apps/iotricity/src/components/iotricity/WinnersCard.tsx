import React from 'react'
import { winner, Winners } from '../../../types'

const Prizes = ({ prize }: { prize: winner }) => {
    const { rank, teamName } = prize;
    return (
        <div className="w-full flex justify-between items-center border-b border-white/10 py-1.5">
            <span className="text-primary text-sm font-bold tracking-widest">{rank}</span>
            <span className="text-white text-base sm:text-lg font-bold uppercase truncate max-w-[70%] text-right">{teamName}</span>
        </div>
    )
}

const WinnersCard = ({ winners }: { winners: Winners }) => {

  const { event, game, championsName, gradientClass, prizes } = winners;  
  return (
    <div className="prize-square font-mono relative aspect-square sm:aspect-[4/3] md:aspect-square border border-white/30 flex flex-col items-center justify-center p-6 text-center group cursor-default overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-yellow-500/0 transition-all duration-500 z-0 ${gradientClass}`}></div>

        <div className="relative z-10 w-full flex flex-col items-center">
            <span className="text-primary/50 text-sm mb-4 tracking-widest uppercase transition-colors group-hover:text-primary">{event}</span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-2 group-hover:text-white transition-colors drop-shadow-md">{game}</h3>
            <div className="w-8 h-[1px] bg-white/30 mb-6 group-hover:bg-primary transition-all group-hover:w-16 duration-300"></div>

            <div className="relative w-full h-24 flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 group-hover:scale-90 w-full px-2">
                    <p className="text-primary text-xs mb-1 uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-2V2h-1v2H8V2H7v2H5c-1.103 0-2 .897-2 2v4c0 2.802 2.016 5.158 4.675 5.823A4.985 4.985 0 0 0 11 18v2H8v2h8v-2h-3v-2c1.884 0 3.535-1.123 4.325-2.823C20.984 14.502 23 11.802 23 9V6c0-1.103-.897-2-2-2zm-2 9H7c-1.654 0-3-1.346-3-3V6h16v4c0 1.654-1.346 3-3 3z"/></svg>
                        Champion
                    </p>
                    <p className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg uppercase tracking-wider truncate w-full">{championsName}</p>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-6 opacity-0 scale-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 w-full px-4 sm:px-8">
                    {prizes.map(winner => (
                        <Prizes key={winner.rank} prize={winner} />
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnersCard