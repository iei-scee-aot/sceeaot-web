"use client";
import React from "react";
import PastEventCard from "./_components/PastEventCard";
import Header from "../_components/Header";
import Divider from "../_components/Divider";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Divider2 from "../_components/Divider2";
import Headlines from "../_components/Headlines";

export default function EventsPage() {
  return (
    <>
      <div className="h-full border-gray-500 border-b-[0.5px] w-full mb-[29px] pb-[60px] lg:pb-0 font-pxg">
        <Divider />
        <Header />
        <Divider2 />
        <Navbar eventColor="#FEC20C" />
        <div className="w-full hidden lg:flex py-3 border-gray-500 border-b-[0.5px]"></div>

        <main className="relative flex flex-col mx-auto min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden">
          {/* Ongoing Events Section */}
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="Ongoing Events" />
            </div>
            <div className="flex flex-wrap gap-[0.4375rem] justify-center items-stretch py-[14.0625rem] text-sm lg:text-2xl font-pxg min-h-[23.5rem]">
              No ongoing events...
            </div>
          </div>
          <Divider2 />

          {/* Past Events Section */}
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="Past Events" />
            </div>

            {/* Updated container with proper centering */}
            <div className="grid grid-cols-1 gap-8 px-4 lg:px-8 py-8 lg:py-12 place-items-center">
              <PastEventCard
                key="hoverx"
                imageSrc="/utils/hoverx.png"
                title="HoverX"
                status="Closed"
                date="1st March 2025"
                mode="Offline"
                fees="Free"
                teamSize="Solo"
                description="From concept to flight! Our hands-on drone-making workshop, HOVERX was a soaring success. Participants explored the mechanics of drone making and witnessed live flight demos of two fully functional drones. The journey of learning & innovation continues."
              />
              <PastEventCard
                key="pujopixel"
                imageSrc="/utils/pujopixel.png"
                title="PUJO PIXEL"
                status="Closed"
                date="9th - 18th October, 2024"
                mode="Online"
                fees="Free"
                teamSize="Solo"
                description="A completely virtual photography event organized by IEI Students' Chapter EE to celebrate Durga Puja. It was based on three themes, and participants could take part in all or any one. The winner of each theme was awarded a cash prize of ₹200."
              />
              <PastEventCard
                key="iotricity"
                imageSrc="/utils/iotricity.png"
                title="IOTRICITY"
                status="Closed"
                date="14th, 15th & 17th August, 2024"
                mode="Offline"
                fees="₹50"
                teamSize="3-5 members"
                description="A hardware ideathon event, the first of its kind at AOT campus. The event focused on IoT (Internet of Things), a rapidly growing field. The event had a prize pool of ₹6000."
              />
              <PastEventCard
                key="electroforge"
                imageSrc="/utils/electroforge.png"
                title="ELECTROFORGE"
                status="Closed"
                date="23rd March, 2024"
                mode="Offline"
                fees="Free"
                teamSize="Solo"
                description="An invited talk and hands-on workshop on printed circuit boards, featuring Mr. Dipak Chakraborty. The event aimed to provide practical insights into the design, fabrication, and application of PCBs in modern electronics."
              />
            </div>
          </div>
          <Divider2 />

          {/* Footer */}
          <Footer />

          {/* Consistent bottom spacing */}
          <div className="py-10"></div>
        </main>
      </div>
    </>
  );
}
