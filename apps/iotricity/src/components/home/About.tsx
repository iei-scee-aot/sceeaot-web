import Link from "next/link"
import Headlines from "../ui/Headlines"
import Button from "../ui/Button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Divider from "../ui/Divider"
import { event } from "../../../constants"


const About = () => {

  const targetedDate = new Date(event.registrationEnd).getTime();
  const now = new Date().getTime();
  const hasTargetDatePassed = now >= targetedDate;

  return (
    <>
        <div
          id="About-IOTricity"
          className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
        >
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine={`About ${event.eventName}`} />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                About
                <br />
                {event.eventName}
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="IOTricity GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="px-[1.40625rem] lg:px-8 py-[1.40625rem] lg:py-8 text-[10.5px] lg:text-[1.2rem] font-light leading-relaxed font-pxg text-left lg:text-center">
            {event.eventAboutDescription.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
                {index < event.eventAboutDescription.length - 1 && <br />}
                {index < event.eventAboutDescription.length - 1 && <br />}
              </p>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 px-4 justify-center items-center">
              <Link href="rules" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  icon={<ExternalLink size={18} />}
                  iconPosition="right"
                  className="hover:translate-y-1 hover:scale-95 transititon-transform duration-300"
                >
                  Rules and Regulations
                </Button>
              </Link>
              {!hasTargetDatePassed ? (
                <Link href={event.registrationLink} target="_blank">
                <Button
                    variant="secondary"
                    className="group border-primary/20 hover:border-primary/50 hover:translate-y-1 hover:scale-95 transititon-transform duration-300"
                >
                    <span className="flex items-center gap-2">
                    Register Now
                    <ExternalLink
                        size={16}
                        className="transition-transform group-hover:scale-110"
                    />
                    </span>
                </Button>
            </Link>
            ) : (
                <div className="cursor-not-allowed w-full sm:w-auto">
                    <Button
                        variant="secondary"
                        className="opacity-50 pointer-events-none w-full" 
                        disabled={true}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                        Registration Closed
                        </span>
                    </Button>
                </div>
            )}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 px-4 justify-center items-center">
              <Link href="problems" className="w-full sm:w-auto">
                <Button variant="primary">Problem Statements</Button>
              </Link>
            </div> */}
          </div>

          {/* Event Image */}
          {event.eventImage && (
            <div className="relative w-full h-[200px] md:h-[480px] lg:h-[720px] mt-4 lg:mt-0">
              <Image
                src={event.eventImage}
                alt={`${event.eventName} Event`}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-b to-black/85 from-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3
                  className="text-2xl lg:text-4xl font-bold mb-2"
                  style={{ fontFamily: "KMR Apparat1" }}
                >
                  {event.eventName} {event.eventYear}
                </h3>
                {event.eventAboutSubDescription && (
                  <p className="text-sm lg:text-lg">
                    {event.eventAboutSubDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <Divider />
    </>
  )
}

export default About