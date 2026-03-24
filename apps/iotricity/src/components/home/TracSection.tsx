import React from 'react'
import Headlines from '../ui/Headlines'
import IOTricityTracks from '../iotricity/IOTricityTracks';
import ComingSoon from '../shared/ComingSoon';
import Divider from '../ui/Divider';
import { trackPrizes } from '../../../constants';

const TracSection = () => {
  const isTracksVisible = trackPrizes.length > 0 ? true : false;
  return (
    <>
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Event Tracks" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {isTracksVisible ? (
              <IOTricityTracks tracks={trackPrizes} />
            ) : (
              <ComingSoon description="Exciting tracks and categories for the hackathon are being finalized. Stay tuned for detailed information about different competition tracks and specializations." />
            )}
          </div>
        </div>
        <Divider />
    </>
  )
}

export default TracSection