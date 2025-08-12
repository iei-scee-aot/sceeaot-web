"use client";
import Countdown from "@/components/iotricity/Countdown";
import IOTricityPrizes from "@/components/iotricity/IOTricityPrizes";
import IOTricityTimeline from "@/components/iotricity/IOTricityTimeline";
import IOTricityTracks from "@/components/iotricity/IOTricityTracks";
import ComingSoon from "@/components/shared/ComingSoon";
import Divider2 from "@/components/ui/Divider2";
import Headlines from "@/components/ui/Headlines";
import { ArrowRight, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface Mentor {
  name: string;
  designation: string;
  imagePath: string;
  links: string[];
}

const IOTricityPage = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [mentorsData, setMentorsData] = useState<Mentor[]>([]);

  // Visibility controls for different sections
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isTracksVisible, setIsTracksVisible] = useState(false);
  const [isPrizesVisible, setIsPrizesVisible] = useState(false);

  useEffect(() => {
    const loadMentorsData = async () => {
      try {
        const response = await fetch("/mentors.json");
        const data = await response.json();
        setMentorsData(data);
      } catch (error) {
        console.error("Failed to load mentors data:", error);
      }
    };

    loadMentorsData();
  }, []);

  const iotricityFAQData: FAQ[] = [
    {
      question: "What is IOTricity?",
      answer:
        "IOTricity is our flagship event combining Internet of Things (IoT) innovation with electrical engineering excellence. It features workshops, hackathons, and competitions focused on IoT technologies.",
    },
    {
      question: "Who can participate in IOTricity?",
      answer:
        "IOTricity is open to all students interested in IoT, electrical engineering, and technology innovation. No prior experience required - we welcome beginners and experts alike.",
    },
    {
      question: "What does the event schedule include?",
      answer:
        "The event includes online workshops on embedded systems, machine learning, cloud computing for IoT, networking, a multi-day hackathon, judging sessions, and an offline finale with prize distribution.",
    },
    {
      question: "Is there a registration fee for IOTricity?",
      answer:
        "Yes, there is a nominal registration fee to cover event costs, materials, and refreshments. Early bird discounts are available for the first 100 registrations.",
    },
    {
      question: "What can I win at IOTricity?",
      answer:
        "Winners will receive cash prizes, certificates, IoT development kits, internship opportunities, and recognition from industry partners. All participants get participation certificates.",
    },
    {
      question: "Do I need to form a team?",
      answer:
        "Teams of 2-4 members are preferred for the hackathon portion. However, individual participants can join our team formation session or participate in workshops individually.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Bring your laptop, any IoT development boards you own (Arduino, Raspberry Pi, etc.), enthusiasm to learn, and creative ideas. We'll provide additional components during workshops.",
    },
    {
      question: "Will there be mentorship during the hackathon?",
      answer:
        "Yes! Industry experts and faculty mentors will be available throughout the hackathon to guide teams, provide technical support, and help with project development.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 min-h-[46.9375rem] lg:min-h-[37.1875rem]">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex-1 justify-center align-middle text-center lg:text-left">
            <h1
              className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              Welcome to <br />
              <span className="text-primary text-7xl">
                IOTricity Season 2.0
              </span>
              <br />
              <br />
            </h1>
            <h1
              className="text-[2rem] lg:text-[2.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              Where Innovation Meets Electricity
            </h1>
            <p className="mt-4 text-sm lg:text-lg font-light">
              Join us for the ultimate IoT and electrical engineering
              experience! Participate in workshops, hackathons, and competitions
              that bridge the gap between theoretical knowledge and real-world
              innovation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
              <Link href="#register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-black px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 justify-center">
                  <Users size={18} />
                  Register Now
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link
                href="https://discord.gg/your-server"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border border-primary text-primary px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 justify-center">
                  <ExternalLink size={18} />
                  Join Discord
                </button>
              </Link>
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
                src="/GIF.gif"
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
          Welcome to IOTricity Season 2.0 - where innovation meets electricity!
          This flagship event represents the perfect fusion of Internet of
          Things (IoT) technology and electrical engineering excellence.
          <br />
          <br />
          IOTricity is more than just a competition; it&apos;s a comprehensive
          learning experience that spans multiple days of workshops, hands-on
          sessions, and collaborative projects. From embedded systems to machine
          learning, from cloud computing to networking protocols - we cover the
          entire IoT ecosystem.
          <br />
          <br />
          Whether you&apos;re a beginner curious about IoT or an experienced
          developer ready to push boundaries, IOTricity offers something for
          everyone. Join industry experts, connect with like-minded innovators,
          and transform your ideas into reality through cutting-edge technology.
          <br />
          <br />
          Get ready to electrify your imagination and create the future of
          connected devices. The revolution starts here, and it starts with you!
        </div>

        {/* Event Image */}
        <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4 lg:mt-0">
          <Image
            src="/GIF.gif"
            alt="IOTricity Event"
            loading="lazy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
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
                src="/GIF.gif"
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
          <Countdown mode="multi-phase" showTimeline={false} />
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
            <TeamCard
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
        <div className="flex flex-col justify-center items-stretch py-8 lg:py-12 px-4 lg:px-8">
          {iotricityFAQData.map((faq, index: number) => (
            <div
              key={index}
              className="w-full border-b border-gray-700 last:border-b-0 py-4 lg:py-6"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className={`w-full flex justify-between items-center text-left focus:outline-none transition-colors duration-200 font-medium text-[13px] lg:text-[1.5rem] ${
                  activeQuestion === index ? "text-primary" : "text-secondary"
                }`}
              >
                <span>{faq.question}</span>
                <img
                  src="/arrow-down.svg"
                  alt="Toggle"
                  className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${
                    activeQuestion === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {activeQuestion === index && (
                <p className="text-[13px] lg:text-[1.5rem] text-gray-500 mt-3 lg:mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IOTricityPage;
