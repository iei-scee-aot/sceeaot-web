"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PastEventCard from "./_components/PastEventCard";

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/*
        1) Add overflow-x-hidden to prevent horizontal scrolling.
        2) Keep w-[25rem] if you like, or switch to max-w-sm for true responsiveness.
      */}
      <main className="relative flex flex-col w-[25rem] mx-auto min-h-screen bg-[#000000] text-white font-sans pb-32 overflow-x-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-[#747474]/30">
          {/* Left Section: Logo + Text */}
          <div className="flex items-center gap-2">
            <Image
              src="/scee_logo.jpg"
              alt="SCEE Logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <span className="text-xs text-[#747474]">
              Students' Chapter EE AOT
            </span>
          </div>

          {/* Right Section: Discord Icon + Other Social Icons */}
          <div className="flex items-center gap-4">
            {/* Discord Icon */}
            <a href="#" className="relative">
              <img
                src="/discord.jpg"
                alt="Discord"
                className="w-8 h-8 object-contain"
              />
              {/* Red notification dot (optional). Adjust size/position as needed */}
              {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span> */}
            </a>

            {/* Other Social Icons */}
            <div className="grid grid-cols-3 grid-rows-2 gap-1">
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img
                  src="/facebook.jpg"
                  alt="Facebook"
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img src="/x.jpg" alt="X" className="w-4 h-4 object-contain" />
              </a>
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img
                  src="/linkedin.jpg"
                  alt="Linkedin"
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img
                  src="/instagram.jpg"
                  alt="Instagram"
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img
                  src="/threads.jpg"
                  alt="Threads"
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="#"
                className="p-1 rounded-md border border-[#747474] text-[#747474]"
              >
                <img
                  src="/whatsapp.jpg"
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                />
              </a>
            </div>
          </div>
        </header>

        {/* Ongoing Events Section */}
        <div className="border-t border-b border-white pl-4 pr-4 pt-0 pb-0 mb-0">
          {/*
            2) Use .animate-marquee, starting at 100vw -> -100%.
            3) Add whitespace-nowrap so it doesn't wrap mid-animation.
          */}
          <div className="p-4 relative overflow-hidden"
          style={{
            border: "1px solid white", // 1px white border
            borderTop:"none",
            boxShadow: "0.5px 0 0 0 white, -0.5px 0 0 0 white", // Offsets left & right borders
          }}>
          <h2
            className={`text-[3rem] font-bold text-transparent bg-clip-text mb-2.5 mt-2 whitespace-nowrap ${
              isVisible ? "animate-marquee" : "opacity-0"
            }`}
            style={{
              fontFamily: "KMR Apparat1",
              WebkitTextStroke: "1px #fec20c",
              lineHeight: "0",
            }}
          >
            Ongoing Events!
          </h2>
          </div>
          <div className="h-[200px] flex items-center justify-center border border-l-1 border-r-1 border-b-0 border-white">
            {/* Empty state for ongoing events */}
            <p>No ongoing events</p>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="border-t border-b border-white pl-4 pr-4 pt-0 pb-0 mb-0 mt-5">
          <div
          className="p-4 relative overflow-hidden"
          style={{
            border: "1px solid white", // 1px white border
            borderTop:"none",
            boxShadow: "0.5px 0 0 0 white, -0.5px 0 0 0 white", // Offsets left & right borders
          }}>
          <h2
            className={`text-[3rem] font-bold text-transparent bg-clip-text mb-1 mt-2 whitespace-nowrap ${
              isVisible ? "animate-marquee" : "opacity-0"
            }`}
            style={{
              fontFamily: "KMR Apparat1",
              WebkitTextStroke: "1px #fec20c",
              lineHeight: "0",
            }}
          >
            Past Events
          </h2>
          </div>

          <div className="grid place-items-center h-full w-full border border-white border-b-0 border-t-0 pt-5">
          {/*HoverX Event Card*/}
          <PastEventCard
          imageSrc="/utils/hoverx.png"
          title="HoverX"
          status="Closed"
          date="1st March 2025"
          mode="Offline"
          fees="Free"
          teamSize="Solo"
          description="From concept to flight !!
          Our hands-on drone-making workshop, HOVERX was a soaring success. While all the participants explored the mechanics of drone making, they witnessed the live flight demos of two fully functional drones. 
          The journey of learning & innovation continues."
          />

          {/* PUJO PIXEL Event Card */}
          <PastEventCard
          imageSrc="/utils/pujopixel.png"
          title="PUJO PIXEL"
          status="Closed"
          date="9th - 18th October, 2024"
          mode="Online"
          fees="Free"
          teamSize="Solo"
          description="A completely virtual photography event organized by IEI Students’ Chapter EE to celebrate Durga Puja. It was based on three themes all participate can take part in all or any one. Winner of each theme was awarded with a cash prize of ₹200."
          />

          {/* IOTRICITY Event Card */}
          <PastEventCard
          imageSrc="/utils/iotricity.png"
          title="IOTRICITY"
          status="Closed"
          date="14th, 15th & 17th August, 2024"
          mode="Offline"
          fees="₹50"
          teamSize="3-5 members"
          description="A hardware ideathon event ,first of it’s kind to be held in the
                AOT campus. The event was based on applications of IoT (Internet
                of Things), a topic which is rising to significance quite
                rapidly but is relatively unexplored. The event had a prize pool
                of ₹6000."
          />

          {/* ELECTROFORGE Event Card */}

          <PastEventCard
          imageSrc="/utils/electroforge.png"
          title="ELECTROFORGE"
          status="Closed"
          date="23rd March, 2024"
          mode="Offline"
          fees="Free"
          teamSize="Solo"
          description="An invited talk and hands-on-workshop was organized on printed
                circuit boards and our esteemed speaker was Mr. Dipak
                Chakraborty. The aim was to provide practical insights into the
                design, fabrication and application of PCBs in modern
                electronics."
          />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto">
          <div className="p-6 border-t border-[#747474]/30">
            <div className="flex justify-between items-center mb-4">
              <Image
                src="/scee_logo.jpg"
                alt="SCEE Logo"
                width={80}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col items-start">
                {/* This text goes above the icon + link */}
                <span className="text-xs text-[#747474] mb-1">
                  Follow us on our socials
                </span>

                {/* Linktree icon + /sceeaot in a row */}
                <Link href="#" className="flex items-center gap-1">
                  <img
                    src="/linktree.jpg"
                    alt="Linktree"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs text-[#747474]">/sceeaot</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#747474] text-sm">Have something in mind?</p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 mt-2 text-3xl font-bold group"
            >
              Contact us
              <ArrowUpRight
                size={24}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </footer>
      </main>

      {/* Fixed Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] bg-[#0e0c0c] border-t border-[#747474]/30 z-50 p-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex flex-col items-center text-xs text-[#747474]"
        >
          <div className="p-1 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#747474"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          HOME
        </Link>
        <Link
          href="/teams"
          className="flex flex-col items-center text-xs text-[#747474]"
        >
          <div className="p-1 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                stroke="#747474"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          TEAMS
        </Link>
        <Link
          href="/events"
          className="flex flex-col items-center text-xs text-[#fec20c]"
        >
          <div className="p-1 rounded-md bg-[#fec20c]/10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#fec20c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
                stroke="#fec20c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          EVENTS
        </Link>
        <Link
          href="/about"
          className="flex flex-col items-center text-xs text-[#747474]"
        >
          <div className="p-1 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#747474"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16V12M12 8H12.01"
                stroke="#747474"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          ABOUT
        </Link>
      </nav>

      {/* Marquee Animations */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          /* Start at 100vw (screen width), move left until text is fully offscreen */
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-0.3rem);
          }
        }
      `}</style>
    </>
  );
}