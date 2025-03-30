"use client";
import React from "react"; // Import React to resolve the TS(2686) error
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PastEventCard from "./_components/PastEventCard";
import Header from "../_components/Header";
import Divider from "..//_components/Divider";
import Footer from "..//_components/Footer";
import Navbar from "..//_components/Navbar";
import Divider2 from "..//_components/Divider2";

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <main className="relative flex flex-col w-[25rem] mx-auto min-h-screen bg-[#000000] text-white font-sans pb-32 overflow-x-hidden">
        <div className="top-[0.9375rem] w-full z-50 bg-black">
          <Divider />
          <div className="w-full flex justify-between items-center border-b-2">
            <div className="px-[0.9375rem] h-12"></div>
            <Header />
            <div className="px-[0.9375rem] h-12"></div>
          </div>
          <Divider />
        </div>

        {/* Ongoing Events Section */}
        <div className="border-t border-b border-white pl-4 pr-4 pt-0 pb-0 mb-0">
          <div
            className="p-4 relative overflow-hidden"
            style={{
              border: "1px solid white",
              borderTop: "none",
              boxShadow: "0.5px 0 0 0 white, -0.5px 0 0 0 white",
            }}
          >
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
            <p>No ongoing events</p>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="border-t border-b border-white pl-4 pr-4 pt-0 pb-0 mb-0 mt-5">
          <div
            className="p-4 relative overflow-hidden"
            style={{
              border: "1px solid white",
              borderTop: "none",
              boxShadow: "0.5px 0 0 0 white, -0.5px 0 0 0 white",
            }}
          >
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
            {/* HoverX Event Card */}
            <PastEventCard
              imageSrc="/utils/hoverx.png"
              title="HoverX"
              status="Closed"
              date="1st March 2025"
              mode="Offline"
              fees="Free"
              teamSize="Solo"
              description="From concept to flight !! Our hands-on drone-making workshop, HOVERX was a soaring success. While all the participants explored the mechanics of drone making, they witnessed the live flight demos of two fully functional drones. The journey of learning & innovation continues."
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
              description="A completely virtual photography event organized by IEI Students’ Chapter EE to celebrate Durga Puja. It was based on three themes all participants could take part in all or any one. The winner of each theme was awarded a cash prize of ₹200."
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
              description="A hardware ideathon event, first of its kind to be held in the AOT campus. The event was based on applications of IoT (Internet of Things), a topic which is rising to significance quite rapidly but is relatively unexplored. The event had a prize pool of ₹6000."
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
              description="An invited talk and hands-on workshop was organized on printed circuit boards and our esteemed speaker was Mr. Dipak Chakraborty. The aim was to provide practical insights into the design, fabrication, and application of PCBs in modern electronics."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="w-screen py-3 border-gray-500 border-b-[0.5px] "></div>
        <Footer />
        <div className="w-screen border-gray-500 border-b-[0.5px] "></div>
        
      </main>

      {/* Fixed Bottom Nav */}
      <Navbar eventColor="#FEC20C" />

      {/* Marquee Animations */}
      <style jsx global={true}>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
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