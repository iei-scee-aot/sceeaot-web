import React from 'react'
import IOTricityPrizes from '../iotricity/IOTricityPrizes'
import ComingSoon from '../shared/ComingSoon'
import Divider from '../ui/Divider'
import Headlines from '../ui/Headlines'
import Prize from '../iotricity/Prize'
import { eventWinners } from '../../../constants'

const PrizeSection = () => {

  const isPrizesVisible = eventWinners.length > 0; 

  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Event Prizes" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {isPrizesVisible ? (
              <Prize />
            ) : (
              <ComingSoon description="🏆 Rewards incoming! Stay tuned for prizes worth the grind 🎮🔥" />
            )}
          </div>
        </div>
        <Divider />
    </>
  )
}

export default PrizeSection