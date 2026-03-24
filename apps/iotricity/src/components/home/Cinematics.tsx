import { event } from "../../../constants"
import Divider from "../ui/Divider"
import Headlines from "../ui/Headlines"

const Cinematics = () => {
  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="Post Event Cinematics" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                Cinematics
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Post Event Cinematics GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="px-[1.40625rem] lg:px-8 py-[1.40625rem] lg:py-8">
            {/* Description Text */}
            <div className="text-[10.5px] lg:text-[1rem] font-light leading-relaxed font-pxg text-left lg:text-center mb-8">
              {event.eventCinematicDesctiption}
            </div>

            {/* YouTube Video Embed */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full h-0 pb-[56.25%]">
                  {" "}
                  {/* 16:9 aspect ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg border border-primary/20"
                    src={event.trailer}
                    title="IOTricity Post Event Cinematics"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8">
              <p className="text-[10.5px] lg:text-base text-secondary/70 max-w-2xl mx-auto">
                Feel free to reach out to us through our social media channels
                or join our Discord server.
              </p>
            </div>
          </div>
        </div>
        <Divider />
    </>
  )
}

export default Cinematics