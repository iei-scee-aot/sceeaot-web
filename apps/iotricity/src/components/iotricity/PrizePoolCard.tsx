import React from 'react'
import { Prize, PrizePool } from '../../../types'


const Prizes = ({ prizes }: { prizes: Prize }) => {
    const { rank, amount } = prizes;

    return (
        <div className="w-full flex justify-between items-center border-b border-white/10 py-1.5">
            <span className="text-primary text-sm font-bold tracking-widest">{rank}</span>
            <span className="text-white text-lg font-bold">{amount}</span>
        </div>
    )
}

const PrizePoolCard = ({ prizePool }: { prizePool: PrizePool }) => {
  const { event, game, totalPrizePool, gradientClass } = prizePool;

  return (
    <div className="prize-square font-mono relative h-64 border border-white/30 flex flex-col items-center justify-center p-6 text-center group cursor-default overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${gradientClass} transition-all duration-500 z-0`}></div>

        <div className="relative z-10 w-full flex flex-col items-center">
            <span className="text-primary/50 text-xs mb-2 tracking-widest uppercase transition-colors group-hover:text-primary">{event}</span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-2 group-hover:text-white transition-colors drop-shadow-md">{game}</h3>
            <div className="w-8 h-[1px] bg-white/30 mb-4 group-hover:bg-primary transition-all group-hover:w-16 duration-300"></div>

            <div className="relative w-full h-20 flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 group-hover:scale-90">
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-widest">Total Pool</p>
                    <p className="text-primary text-4xl sm:text-5xl font-bold drop-shadow-lg">{totalPrizePool}</p>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-6 opacity-0 scale-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 w-full px-4 sm:px-8">
                    
                    {prizePool.prizes.map(prize => (
                        <Prizes key={prize.rank} prizes={prize} />
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrizePoolCard