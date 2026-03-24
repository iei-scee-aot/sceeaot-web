import React from 'react'
import Headlines from '../ui/Headlines'
import IOTricityTimeline from '../iotricity/IOTricityTimeline'
import ComingSoon from '../shared/ComingSoon'
import Divider from '../ui/Divider'

const Timeline = () => {
  const timelineVisible = true;
  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Event Timeline" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {timelineVisible ? (
              <IOTricityTimeline />
            ) : (
              <ComingSoon description="Detailed schedule and timeline for the hackathon is being finalized. Stay tuned for complete event schedule and important dates." />
            )}
          </div>
        </div>
        <Divider />
    </>
  )
}

export default Timeline