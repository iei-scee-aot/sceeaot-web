import React from 'react'
import Headlines from '../ui/Headlines'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import { ExternalLink } from 'lucide-react'
import Divider from '../ui/Divider'

const SponsorSection = () => {
  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="Our Sponsors" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                Our
                <br />
                Sponsors
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Sponsors GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sponsors Content */}
          <div className="px-[1.40625rem] lg:px-8 py-[1.40625rem] lg:py-8">
            {/* Description Text */}
            <div className="text-[10.5px] lg:text-[1.2rem] font-light leading-relaxed font-pxg text-left lg:text-center mb-12">
              We are grateful to our sponsors who make IOTricity Season 2.0
              possible. Their support enables us to create an exceptional
              learning and innovation experience for all participants.
            </div>

            {/* Sponsor Logos */}
            <div className="flex flex-col items-center space-y-8">
              {/* Main Sponsor - Unstop */}
              <div className="flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="w-48 h-24 lg:w-64 lg:h-32 flex items-center justify-center">
                    <Image
                      src="/icons/unstop.svg"
                      alt="Unstop Logo"
                      width={200}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Sponsor Title */}
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-medium text-primary mb-2">
                  Powered By Partner
                </h3>
                <p className="text-sm lg:text-base text-secondary/70 max-w-md mx-auto">
                  Unstop is powering the registration experience for IOTricity
                  Season 2.0
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-8">
                <Link href="https://www.unstop.com">
                  <Button
                    variant="secondary"
                    className="group border-primary/20 hover:border-primary/50"
                  >
                    <span className="flex items-center gap-2">
                      Checkout Unstop
                      <ExternalLink
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Divider />
    </>
  )
}

export default SponsorSection