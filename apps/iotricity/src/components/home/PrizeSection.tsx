import React from 'react'
import IOTricityPrizes from '../iotricity/IOTricityPrizes'
import ComingSoon from '../shared/ComingSoon'
import Divider from '../ui/Divider'
import Headlines from '../ui/Headlines'

const PrizeSection = () => {
  const isPrizesVisible = false;

  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Event Prizes" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {isPrizesVisible ? (
              <IOTricityPrizes />
            ) : (
              <ComingSoon description="Prize structure and rewards for the hackathon are being finalized. Stay tuned for exciting prizes and recognition opportunities." />
            )}
          </div>
        </div>
        <Divider />
    </>
  )
}

export default PrizeSection