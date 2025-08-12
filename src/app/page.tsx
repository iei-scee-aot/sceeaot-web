"use client";

import Countdown from "@/components/iotricity/Countdown";
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

const HomePage = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Date checks
  const isAfterAugust27 = currentDate
    ? currentDate >= new Date("2025-08-27T00:00:00")
    : false;
  const isAfterAugust30 = currentDate
    ? currentDate >= new Date("2025-08-30T00:00:00")
    : false;

  const faqData: FAQ[] = [
    {
      question: "What is the IEI Students' Chapter?",
      answer:
        "The IEI Students' Chapter is a student community that aims to provide a platform for students to explore engineering topics through workshops, competitions, and networking opportunities.",
    },
    {
      question: "How can I join the IEI Students' Chapter?",
      answer:
        "You can join by signing up at any of our events or by contacting one of our members. Visit the 'Contact Us' section for more information.",
    },
    {
      question: "What type of events does the chapter organize?",
      answer:
        "We organize a range of events including hands-on workshops, ideathons, competitions, and brainstorming sessions focused on both core and non-core topics.",
    },
    {
      question: "How many events does the SCEE conduct in a year?",
      answer:
        "The SCEE conducts approximately 3-4 events each year, including workshops, seminars, and competitions.",
    },
    {
      question: "Do events have any registration fee?",
      answer:
        "Yes, there is a registration fee for participating in the events. Please check the specific event details for more information.",
    },
    {
      question: "Is there any criteria for participating in an event?",
      answer:
        "No, there are no specific criteria for participating in the events. All students are welcome to join and participate.",
    },
    {
      question: "Are certificates provided for the events?",
      answer:
        "Yes, participants will receive certificates for attending and completing the events.",
    },
    {
      question: "Are the certificates eligible for acquiring mar points?",
      answer:
        "Yes, the certificates provided by the SCEE are eligible for acquiring mar points.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      {/*Hero Section*/}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 min-h-[46.9375rem] lg:min-h-[37.1875rem]">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex-1 justify-center align-middle text-center lg:text-left">
            <h1
              className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              Welcome to <br /> the IEI Students&apos; Chapter of <br />
              Electrical Engineering <br /> <br />
            </h1>
            <h1
              className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              Academy of Technology
            </h1>
            <p className="mt-4 text-sm lg:text-lg font-light">
              Join us in exploring the world of electrical engineering through
              hands-on workshops, competitions, and networking opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-12"></div>
      </div>
      <Divider2 />

      {/*Live Events*/}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        {/* Unified Header Section */}
        <div className="lg:flex lg:h-[10rem]">
          {/* Headline Section */}
          <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
            <div className="block lg:hidden w-full">
              <Headlines headLine="Live Events" />
            </div>
            <h1
              className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
              style={{
                fontFamily: "KMR Apparat1",
                WebkitTextStroke: "1px var(--primary)",
                color: "transparent",
              }}
            >
              Live
              <br />
              Events
            </h1>
          </div>

          {/* Button and GIF Section */}
          <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
            <Link href="/events">
              <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300 cursor-pointer">
                <span className="lg:block">EVENTS</span>
                <ArrowRight
                  size={14}
                  className="animate-float lg:mt-1 lg:size-[19px]"
                />
              </div>
            </Link>
            <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
              <img
                src="/GIF.gif"
                alt="Campus GIF"
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
        <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed">
          {isAfterAugust30 ? (
            /* Event Started Message */
            <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
              <div className="mb-8">
                <h3
                  className="text-2xl lg:text-4xl font-bold text-primary mb-4"
                  style={{ fontFamily: "KMR Apparat1" }}
                >
                  🎉 Event Has Started! 🎉
                </h3>
                <p className="text-base lg:text-xl text-secondary/80">
                  IOTricity Season 2.0 is now live!
                  <br />
                  Check out the dedicated page for more details and updates.
                </p>
              </div>

              {/* Checkout Button */}
              <div className="flex justify-center">
                <Link href="/iotricity" className="w-full sm:w-auto max-w-xs">
                  <button className="w-full bg-primary text-black px-8 py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 justify-center">
                    <ExternalLink size={20} />
                    Checkout IOTricity
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            /* Countdown and Buttons */
            <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem]">
              <div className="w-full flex justify-center mb-8">
                <Countdown />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
                {!isAfterAugust27 && (
                  <Link href="/iotricity#register" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-primary text-black px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 justify-center">
                      <Users size={18} />
                      Register Now
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                )}
                <Link href="/iotricity" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-primary text-primary px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 justify-center">
                    <ExternalLink size={18} />
                    Checkout IOTricity
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Divider2 />

      {/*About us*/}
      <div
        id="About-Us"
        className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
      >
        {/* Unified Header Section */}
        <div className="lg:flex lg:h-[10rem]">
          {/* Headline Section */}
          <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
            <div className="block lg:hidden w-full">
              <Headlines headLine="About Us" />
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
              us
            </h1>
          </div>

          {/* Button and GIF Section */}
          <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
            <Link href="/team">
              <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300">
                <span className="lg:text-center">TEAM</span>
                <span className="hidden lg:block"></span>
                <ArrowRight
                  size={14}
                  className="animate-float lg:mt-1 lg:size-[19px]"
                />
              </div>
            </Link>
            <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
              <img
                src="/GIF.gif"
                alt="Campus GIF"
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
          Welcome to the IEI Students&apos; Chapter of Electrical Engineering!
          We may be the newest community on the block, but we&apos;re definitely
          the most energetic and driven one.
          <br />
          <br />
          Our mission is to create a space where students can dive into both
          core and non-core topics, learn new skills, and push the limits of
          what they can achieve. We organize everything from hands-on workshops
          and ideathons to competitions and brainstorming sessions, all designed
          to spark creativity and innovation.
          <br />
          <br />
          It&apos;s not just about textbooks here - it&apos;s about real-world
          experiences and connecting with others who share the same passion for
          engineering.
          <br />
          <br />
          So, if you&apos;re looking to learn, grow, and have a ton of fun, join
          us on this exciting journey! We can&apos;t wait to see what we can
          achieve together.
        </div>

        {/* Team Image */}
        <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4 lg:mt-0">
          <Image
            src={
              "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rhlcdh5oLMNJOCXnKiHD7Ua35Ww8EVepuQtP4Z"
            }
            alt="About Us"
            loading="lazy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
        </div>
      </div>
      <Divider2 />

      {/* HOD's Desk */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="From The HOD's Desk" />
        </div>
        <div className="flex gap-2 lg:gap-10 items-center py-[1.9375rem] lg:py-[1.5rem] pl-[0.5rem] lg:pl-[2rem] pr-[0.5rem] lg:pr-[1rem] text-[9px] lg:text-[1rem] font-pxg tracking-tight leading-snug">
          <Image
            src={
              "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9RhLv4BBIDz7N63BHlPeJLcnjgKxb4RGhXAq8D9"
            }
            loading="lazy"
            alt="HOD's PIC"
            width={135}
            height={135}
            className="border-2 rounded-md lg:w-[400px] lg:h-[400px]"
          />
          <p className="flex-1 font-light">
            <span className="font-bolder text-left text-primary">&quot; </span>
            Our department has created a platform to deliver strong
            fundamentals-based technical education. We strive to produce
            electrical engineers who are well suited for both industry and
            society.
            <br />
            <br className="hidden lg:block" />
            As HOD of this department, I endeavor to transform them into
            creators of technology with good human values and a commitment
            towards our nation.
            <span className="font-bolder text-left text-primary"> &quot;</span>
            <br />
            <br className="hidden lg:block" />
            <span className="font-bolder text-left text-primary">
              {" "}
              - Prof. Sandip Saha Chowdhury
            </span>
            <br />
            <span className="font-bolder text-left text-grey italic">
              {" "}
              HOD, Department of Electrical Engineering
            </span>
          </p>
        </div>
      </div>

      <Divider2 />

      {/*FAQs*/}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="FAQs" />
        </div>
        <div className="flex flex-col justify-center items-stretch py-8 lg:py-12 px-4 lg:px-8">
          {faqData.map((faq, index: number) => (
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

export default HomePage;
