"use client";

import Countdown from "@/components/iotricity/Countdown";
import IOTricityPrizes from "@/components/iotricity/IOTricityPrizes";
import IOTricityTimeline from "@/components/iotricity/IOTricityTimeline";
import IOTricityTracks from "@/components/iotricity/IOTricityTracks";
import ComingSoon from "@/components/shared/ComingSoon";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  faqs: FAQ[];
  metadata: {
    lastUpdated: string;
    eventName: string;
    organization: string;
    contact: string;
  };
}

interface Mentor {
  name: string;
  designation: string;
  imagePath: string;
  links: string[];
}

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [mentorsData, setMentorsData] = useState<Mentor[]>([]);
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [faqLoading, setFaqLoading] = useState(true);
  const [faqError, setFaqError] = useState<string | null>(null);

  // Visibility controls for different sections
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isTracksVisible, setIsTracksVisible] = useState(false);
  const [isPrizesVisible, setIsPrizesVisible] = useState(false);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    const loadMentorsData = async () => {
      try {
        const response = await fetch("/data/mentors.json");
        const data = await response.json();
        setMentorsData(data);
      } catch (error) {
        console.error("Failed to load mentors data:", error);
      }
    };

    loadMentorsData();
  }, []);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setFaqLoading(true);
        const response = await fetch("/data/iotricitys2-faq.json");

        if (!response.ok) {
          console.error(
            "Response not OK:",
            response.status,
            response.statusText
          );
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("Invalid content type:", contentType);
          const text = await response.text();
          console.error("Response body:", text.substring(0, 200));
          throw new Error(`Expected JSON but received: ${contentType}`);
        }

        const data: FAQData = await response.json();
        setFaqData(data.faqs);
        setFaqError(null);
      } catch (err) {
        console.error("Failed to fetch IOTricity FAQs:", err);
        setFaqError(err instanceof Error ? err.message : "Failed to load FAQs");
      } finally {
        setFaqLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Date checks
  const isAfterAugust27 = currentDate
    ? currentDate >= new Date("2025-08-27T00:00:00")
    : false;
  const isAfterAugust30 = currentDate
    ? currentDate >= new Date("2025-08-30T00:00:00")
    : false;

  return (
    <>
      {/* Main Content */}
      <div>
        {/* Modern Hero Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFBE00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                    src="/iotricity.svg"
                    alt="IoTricity Logo"
                    width={800}
                    height={200}
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Glowing effect around logo */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Main Text */}

              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                <span className="text-lg lg:text-xl font-medium text-primary">
                  The Ultimate IoT Hackathon
                </span>
                <div className="h-1 w-16 bg-gradient-to-l from-primary to-transparent rounded-full"></div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  variant="primary"
                  className="group relative overflow-hidden"
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

                {/* <Button
                  variant="secondary"
                  className="group border-primary/20 hover:border-primary/50"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover:scale-110"
                    />
                  </span>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <Divider2 />

        {/* About IOTricity */}
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
        <Divider2 />

        {/* Countdown Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="Event Countdown" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                Event
                <br />
                Countdown
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Countdown GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center lg:min-h-[23.5rem]">
            <Countdown />
          </div>
        </div>
        <Divider2 />

        {/* Event Timeline Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Event Timeline" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {isTimelineVisible ? (
              <IOTricityTimeline />
            ) : (
              <ComingSoon description="Detailed schedule and timeline for the hackathon is being finalized. Stay tuned for complete event schedule and important dates." />
            )}
          </div>
        </div>
        <Divider2 />

        {/* Event Tracks Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Event Tracks" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
            {isTracksVisible ? (
              <IOTricityTracks />
            ) : (
              <ComingSoon description="Exciting tracks and categories for the hackathon are being finalized. Stay tuned for detailed information about different competition tracks and specializations." />
            )}
          </div>
        </div>
        <Divider2 />

        {/* Event Prizes Section */}
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
        <Divider2 />

        {/* Mentors Section */}
        {/* <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Mentors" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 md:gap-y-[4.5rem] mx-5 py-12 pb-5 md:pb-20 place-items-center">
            {mentorsData.map((mentor, index) => (
              <MentorsCard
                key={index}
                Name={mentor.name}
                Designation={mentor.designation}
                imagePath={mentor.imagePath}
                links={mentor.links}
              />
            ))}
          </div>
        </div>
        <Divider2 /> */}

        {/* FAQ Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="IOTricity FAQs" />
          </div>
          {faqLoading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-lg">Loading FAQs...</p>
            </div>
          ) : faqError ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-lg text-red-400 mb-2">Failed to load FAQs</p>
                <p className="text-sm text-gray-400">{faqError}</p>
              </div>
            </div>
          ) : (
            <Accordion items={faqData} allowMultipleOpen />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
