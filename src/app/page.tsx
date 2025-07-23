"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Headlines from "./_components/Headlines";
import Navbar from "./_components/Navbar";

// Define the type for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

const HomePage = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null); // Track which question is active

  // FAQ data with questions and answers
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
      question: "Do I need to be an engineering student to join?",
      answer:
        "No, the chapter is open to all students, regardless of their branch. If you're passionate about learning and innovating, you're welcome to join us!",
    },
    {
      question: "Can I contribute to organizing events?",
      answer:
        "Absolutely! We encourage students to take active roles in organizing and managing events. You can volunteer or propose new event ideas to get involved.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index); // Toggle visibility of answers
  };

  return (
    <>
      <div className="h-full border-gray-500 border-b-[0.5px] w-full mb-[29px] pb-[60px] lg:pb-0 font-pxg">
        <Divider />
        <Header />
        <Divider2 />
        <Navbar homeColor="#FEC20C" />
        <div className="w-full hidden lg:flex py-3 border-gray-500 border-b-[0.5px]"></div>

        {/*Hero Section*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 min-h-[46.9375rem] lg:min-h-[37.1875rem] ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden "></div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12"></div>
        </div>
        <Divider2 />

        {/*About us*/}
        <div
          id="About-Us"
          className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
        >
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="About Us" />
            </div>
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Link href="/team">
                <div className="h-[3.75rem] w-[6rem] bg-[#fec20c] text-black py-1 px-3 flex flex-col items-start gap-0 text-sm hover:bg-[#fec20c]/90 transition-all duration-300">
                  <span>TEAM</span>
                  <ArrowRight size={14} className="animate-float" />
                </div>
              </Link>
              <img
                src="/GIF.gif"
                alt="Campus GIF"
                className="w-full h-[3.75rem] object-cover"
              />
            </div>
            <div className="flex font-light flex-wrap gap-7 pl-[1.40625rem] pr-[1.40625rem] text-[10.5px] text-left justify-center items-stretch pt-[1.40625rem] font-pxg">
              Welcome to the IEI Students&apos; Chapter of Electrical
              Engineering! We may be the newest community on the block, but
              we&apos;re definitely the most energetic and driven one.
              <br />
              <br />
              Our mission is to create a space where students can dive into both
              core and non-core topics, learn new skills, and push the limits of
              what they can achieve. We organize everything from hands-on
              workshops and ideathons to competitions and brainstorming
              sessions, all designed to spark creativity and innovation.
              <br />
              <br />
              It&apos;s not just about textbooks here - it&apos;s about
              real-world experiences and connecting with others who share the
              same passion for engineering.
              <br />
              <br />
              So, if you&apos;re looking to learn, grow, and have a ton of fun,
              join us on this exciting journey! We can&apos;t wait to see what
              we can achieve together.
            </div>
            <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4">
              <Image
                src="/oldteam.jpg"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex h-[10rem]">
              {/* Left Section - About Us Heading */}
              <div className="w-1/2 border-r-[0.8px] border-gray-500 border-b-[0.8px] flex pl-[1.6rem] items-center relative">
                <h1
                  className="text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                  style={{
                    fontFamily: "KMR Apparat1",
                    WebkitTextStroke: "1px #fec20c",
                    color: "transparent",
                  }}
                >
                  About
                  <br />
                  us
                </h1>
              </div>

              {/* Right Section - GIF Background with Button */}
              <div
                className="w-1/2 border-b-[0.8px] border-gray-500 relative overflow-hidden"
                style={{
                  backgroundImage: "url(/GIF.gif)",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Button positioned at bottom left */}
                <div className="absolute bottom-0 left-0 w-[116px] h-[81px] bg-black/80">
                  <Link href="/team">
                    <div className="w-full h-full bg-[#fec20c] text-black flex flex-col items-center justify-center text-sm font-medium hover:bg-[#fec20c]/90 transition-all duration-300 cursor-pointer">
                      <span>TEAM</span>
                      <ArrowRight size={19} className="mt-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Text Content Below - Desktop */}
            <div className="px-8 py-8 lg:text-[1.2rem] font-light leading-relaxed font-pxg text-center">
              Welcome to the IEI Students&apos; Chapter of Electrical
              Engineering! We may be the newest community on the block, but
              we&apos;re definitely the most energetic and driven one.
              <br />
              <br />
              Our mission is to create a space where students can dive into both
              core and non-core topics, learn new skills, and push the limits of
              what they can achieve. We organize everything from hands-on
              workshops and ideathons to competitions and brainstorming
              sessions, all designed to spark creativity and innovation.
              <br />
              <br />
              It&apos;s not just about textbooks here - it&apos;s about
              real-world experiences and connecting with others who share the
              same passion for engineering.
              <br />
              <br />
              So, if you&apos;re looking to learn, grow, and have a ton of fun,
              join us on this exciting journey! We can&apos;t wait to see what
              we can achieve together.
            </div>

            {/* Team Image - Desktop */}
            <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px]">
              <Image
                src="/oldteam.jpg"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
            </div>
          </div>
        </div>
        <Divider2 />

        {/*Live Events*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="Live Events" />
            </div>
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Link href="/events">
                <div className="bg-[#fec20c] w-[6rem] h-[3.75rem] text-black py-1 px-3 flex flex-col items-start gap-0 text-sm hover:bg-[#fec20c]/90 transition-all duration-300 cursor-pointer">
                  <span>VIEW ALL</span>
                  <span>EVENTS</span>
                  <ArrowRight size={14} className="animate-float" />
                </div>
              </Link>
              <img
                src="/GIF.gif"
                alt="Campus GIF"
                className="w-full h-[3.75rem] object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-7 justify-center items-stretch py-12 text-sm font-pxg">
              No ongoing events
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block lg:min-h-[23.5rem]">
            <div className="flex h-[10rem]">
              {/* Left Section - Live Events Heading */}
              <div className="w-1/2 border-r-[0.8px] border-gray-500 border-b-[0.8px] flex pl-[1.6rem] items-center relative">
                <h1
                  className="text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                  style={{
                    fontFamily: "KMR Apparat1",
                    WebkitTextStroke: "1px #fec20c",
                    color: "transparent",
                  }}
                >
                  Live
                  <br />
                  Events
                </h1>
              </div>

              {/* Right Section - GIF Background with Button */}
              <div
                className="w-1/2 border-b-[0.8px] border-gray-500 relative overflow-hidden"
                style={{
                  backgroundImage: "url(/GIF.gif)",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Button positioned at bottom left */}
                <div className="absolute bottom-0 left-0 w-[116px] h-[81px] bg-black/80">
                  <Link href="/events">
                    <div className="w-full h-full bg-[#fec20c] text-black flex flex-col items-center justify-center text-sm font-medium hover:bg-[#fec20c]/90 transition-all duration-300 cursor-pointer">
                      <span>VIEW ALL</span>
                      <span>EVENTS</span>
                      <ArrowRight size={19} className="mt-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Below - Desktop */}
            <div className="px-8 py-8 font-light leading-relaxed font-pxg flex justify-center items-center min-h-[23.5rem]">
              <p className="text-center text-[2rem]">No ongoing events...</p>
            </div>
          </div>
        </div>
        <Divider2 />

        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="From The HOD's Desk" />
          </div>
          <div className="lg:hidden flex gap-2 items-center py-[1.9375rem] pl-[0.5rem] pr-[0.5rem] text-[9px] font-pxg tracking-tight leading-snug">
            <Image
              src="/HOD.jpeg"
              alt="HOD's PIC"
              width={135}
              height={135}
              className="border-2 rounded-md"
            />
            <p className="flex-1 font-light">
              <span className="font-bolder text-left text-yellow">&quot; </span>
              Our department has created a platform to deliver strong
              fundamentals-based technical education. We strive to produce
              electrical engineers who are well suited for both industry and
              society.
              <br />
              As HOD of this department, I endeavor to transform them into
              creators of technology with good human values and a commitment
              towards our nation.
              <span className="font-bolder text-left text-yellow"> &quot;</span>
              <br />
              <span className="font-bolder text-left text-yellow">
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
          {/* for desktop */}
          <div className="hidden lg:flex gap-10 items-center lg:py-[1.5rem] pl-[2rem] pr-[1rem] text-[9px] font-pxg tracking-tight  leading-snug">
            <Image
              src="/HOD.jpeg"
              alt="HOD's PIC"
              width={400}
              height={400}
              className="border-2 rounded-md"
            />
            <p className="flex-1 text-[1rem] font-light">
              <span className="font-bolder text-left text-yellow">&quot; </span>
              Our department has created a platform to deliver strong
              fundamentals-based technical education. We strive to produce
              electrical engineers who are well suited for both industry and
              society.
              <br />
              <br />
              As HOD of this department, I endeavor to transform them into
              creators of technology with good human values and a commitment
              towards our nation.
              <span className="font-bolder text-left text-yellow"> &quot;</span>
              <br />
              <br />
              <span className="font-bolder text-left text-yellow">
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
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="FAQs" />
          </div>
          <div className="flex flex-col lg:flex-col justify-center items-stretch py-8 lg:py-12 px-4 lg:px-8">
            {faqData.map((faq, index: number) => (
              <div
                key={index}
                className="w-full border-b border-gray-700 last:border-b-0 py-4 lg:py-6"
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className={`w-full flex justify-between items-center text-left focus:outline-none transition-colors duration-200 font-medium text-[13px] lg:text-[1.5rem] ${
                    activeQuestion === index ? "text-[#fec20c]" : "text-white "
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
        <Divider2 />

        {/*Footer*/}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
