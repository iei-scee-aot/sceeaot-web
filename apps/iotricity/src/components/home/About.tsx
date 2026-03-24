import Link from "next/link"
import Headlines from "../ui/Headlines"
import Button from "../ui/Button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Divider from "../ui/Divider"


const About = () => {
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
                <Headlines headLine="About IOTricity" />
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
                IOTricity
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
            Welcome to IOTricity Season 2.0 - where innovation meets
            electricity! This flagship event represents the perfect fusion of
            Internet of Things (IoT) technology and electrical engineering
            excellence.
            <br />
            <br />
            IOTricity is more than just a competition; it&apos;s a comprehensive
            learning experience that spans multiple days of workshops, hands-on
            sessions, and collaborative projects. From embedded systems to
            machine learning, from cloud computing to networking protocols - we
            cover the entire IoT ecosystem.
            <br />
            <br />
            Whether you&apos;re a beginner curious about IoT or an experienced
            developer ready to push boundaries, IOTricity offers something for
            everyone. Join industry experts, connect with like-minded
            innovators, and transform your ideas into reality through
            cutting-edge technology.
            <br />
            <br />
            Get ready to electrify your imagination and create the future of
            connected devices. The revolution starts here, and it starts with
            you!
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 px-4 justify-center items-center">
              <Link href="rules" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  icon={<ExternalLink size={18} />}
                  iconPosition="right"
                >
                  Rules and Regulations
                </Button>
              </Link>
              <Link href="#"> {/* TODO: Add google form registration link */}
                <Button
                  variant="secondary"
                  className="group border-primary/20 hover:border-primary/50"
                >
                  <span className="flex items-center gap-2">
                    Registration
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover:scale-110"
                    />
                  </span>
                </Button>
              </Link>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 px-4 justify-center items-center">
              <Link href="problems" className="w-full sm:w-auto">
                <Button variant="primary">Problem Statements</Button>
              </Link>
            </div> */}
          </div>

          {/* Event Image */}
          <div className="relative w-full h-[200px] md:h-[480px] lg:h-[720px] mt-4 lg:mt-0">
            <Image
              src="https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rh1sbxjJ7QV5tB8ivhMZbY4dapLFmDuzfUgolI"
              alt="IOTricity Event"
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
                IOTricity 2025
              </h3>
              <p className="text-sm lg:text-lg">
                Innovation • Technology • Community
              </p>
            </div>
          </div>
        </div>
        <Divider />
    </>
  )
}

export default About