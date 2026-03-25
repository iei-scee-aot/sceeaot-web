import React from 'react'
import Divider from '../ui/Divider'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import { event } from '../../../constants'

const HeroSection = () => {

  const { registrationEnd, registrationLink, heroBackground, patternBackground, eventName, eventLogo, eventHeroSectionDescription } = event;
 
  const targetedDate = new Date(registrationEnd).getTime();
  const now = new Date().getTime();
  const hasTargetDatePassed = now >= targetedDate;

  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 relative overflow-hidden">
          {/* Hero Background SVG */}
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBackground})`,
            }}
          ></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${patternBackground})`,
              }}
            ></div>
          </div>

          {/* Main Hero Content */}
          <div className="relative px-4 lg:px-8 py-16 lg:py-24 z-10">
            <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
              {/* IoTricity Logo */}
              <div className="relative mb-8 group">
                <div className="flex w-80 h-24 lg:w-[32rem] lg:h-36 xl:w-[40rem] xl:h-44 justify-center items-center">
                  <Image
                    src={eventLogo}
                    alt={eventName}
                    width={970}
                    height={300}
                    className="object-contain transform filter drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Glowing effect around logo */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Main Text */}

              <div className="flex items-center justify-center gap-3 mt-6">
                {/* <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div> */}
                <span className="text-lg lg:text-xl font-medium text-[#F3F4F6] uppercase">
                  {eventHeroSectionDescription}
                </span>
                {/* <div className="h-1 w-16 bg-gradient-to-l from-primary to-transparent rounded-full"></div> */}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                {hasTargetDatePassed ? (
                  <div className="cursor-not-allowed w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="opacity-50 pointer-events-none w-full hover:translate-y-1 hover:scale-95 transititon-transform duration-300" 
                      disabled={true}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Registration Closed
                      </span>
                    </Button>
                  </div>
                ) : (
                  <Link href={registrationLink} target='_blank' className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="group relative overflow-hidden w-full hover:translate-y-1 hover:scale-95 transition-transform duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Register Now
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <Divider />
    </>
  )
}

export default HeroSection