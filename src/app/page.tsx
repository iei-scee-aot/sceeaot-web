"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import ImageSlider from "@/app/components/ImageSlider";
import AboutSection from "@/app/components/About";
import Events from "@/app/components/Events";
import HeadOfTheDepartment from "@/app/components/HeadOfTheDepartment";
import FacultyAdvisors from "@/app/components/FacultyAdvisors";
import AccordianSection from "@/app/components/AccordianSection";
import Reveal from "@/components/layout/Reveal";
import GridButtons from "./components/socialLinks";
import Footer from "@/components/layout/Footer";

const Apps = () => {
  const slides = [
    {
      url: "https://utfs.io/f/kQP3nlH8TqeSpHFgKicRM3Egt9wzXbuhLHZOkBT5iFU4r6DP",
      title: "Test",
    },
    {
      url: "https://utfs.io/f/kQP3nlH8TqeS3DUgzv2rPkapnMo4e8jVXyDIZK2rqwxCH1mW",
      title: "Test",
    },
    {
      url: "https://utfs.io/f/kQP3nlH8TqeSyTRxB9nokeRMbzdKJwA1aWGhcCPmIOt7jTgi",
      title: "Test",
    },
  ];

  const words = ["COOLEST", "BOLDEST", "GREATEST"];
  const colors = ["#34E0CE", "#A86F4A", "#D94F70"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className="w-screen pt-20 flex flex-col">
      <div className="mx-5 mb-5 md:mb-24 md:mx-20 max-w-screen sm:flex-row flex-col flex  justify-center items-start"> 
        <div className="max-w-full flex flex-col justify-center items-center md:items-start "> 
          <div className="p-5">
            <Reveal>
              <h1 className="text-[1.5rem] md:text-[2.5] mx-auto text-center md:text-left font-bold text-yellow-400 leading-tight">
                <p>Home to the</p>
                <p
                  className="text-[4rem] tracking-wide transition-opacity duration-1000 ease-in-out"
                  style={{
                    color: colors[wordIndex],
                    display: "inline-block", 
                    fontWeight: "bolder", 
                  }}
                >
                  {words[wordIndex]}
                </p>
                <p>Students&#x2019; Chapter of</p>
                <p> All Time</p>
              </h1>
            </Reveal>
            <Reveal>
              <div className="hidden md:flex md:flex-col text-[1.2rem] mt-5">
                <p className=" font-extrabold">Welcome to the IEI Students&#x2019; Chapter of EE AOT!</p>
                <p>We&#x2019;re all about innovation, tech vibes, and leveling up the skills.</p>
                <p>Join us for workshops, epic events, and a community that&#x2019;s as electric as you are!</p>
                <p>Let&#x2019;s make waves together! ⚡</p>
              </div>
            </Reveal>
          </div>

          <div className="hidden mt-5 px-5 md:flex space-x-5">
            <Button className="bg-yellow-400 hover:bg-purple-500 text-black transition duration-300">
              Join Us
            </Button>
            <Button className="border border-white bg-white text-black hover:bg-gray-400 transition duration-300">
              Connect
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ImageSlider slides={slides} />
        </div>
      </div>

      <div className="mobileText mx-5 mb-20 flex flex-col items-center justify-center md:hidden ">
        <Reveal>
              <div className=" flex flex-col text-center text-[1.2rem] mt-5">
                <p className=" font-extrabold">Welcome to the IEI Students&#x2019; Chapter of EE AOT!</p>
                <p>We&#x2019;re all about innovation, tech vibes, and leveling up the skills.</p>
                <p>Join us for workshops, epic events, and a community that&#x2019;s as electric as you are!</p>
                <p>Let&#x2019;s make waves together! ⚡</p>
              </div>
        </Reveal>
        <div className=" mt-5 px-5 flex items-center justify-center space-x-5">
            <Button className="bg-yellow-400 hover:bg-purple-500 text-black transition duration-300">
              Join Us
            </Button>
            <Button className="border border-white bg-white text-black hover:bg-gray-400 transition duration-300">
              Connect
            </Button>
          </div>
      </div>

      <AboutSection />

      <Events />

      <HeadOfTheDepartment />
      
      <FacultyAdvisors />

      <AccordianSection />

      <div className="flex justify-center mt-0"> 
        <GridButtons />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Apps;
