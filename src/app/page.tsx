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
    <main className="pt-20 pl-0">
      <div className="flex justify-center items-start"> 
        <div className="flex flex-col pt-10 ml-10"> 
          <div className="p-5">
            <Reveal>
              <h1 className="text-[2.5rem] font-bold text-yellow-400 leading-tight">
                <p>Home to the</p>
                <p
                  className="text-[4rem] transition-opacity duration-1000 ease-in-out"
                  style={{
                    color: colors[wordIndex], 
                    transform: "skewX(-15deg)", 
                    display: "inline-block", 
                    fontWeight: "bold", 
                  }}
                >
                  {words[wordIndex]}
                </p>
                <p>Students&#x2019; Chapter of all Time</p>
              </h1>
            </Reveal>
            <Reveal>
              <div className="text-[1.2rem] mt-5">
                <p className="font-extrabold">Welcome to the IEI Students&#x2019; Chapter of EE AOT!</p>
                <p>We&#x2019;re all about innovation, tech vibes, and leveling up the skills.</p>
                <p>Join us for workshops, epic events, and a community that&#x2019;s as electric as you are!</p>
                <p>Let&#x2019;s make waves together! ⚡</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-5 px-5 flex space-x-5">
            <Button className="bg-yellow-400 hover:bg-purple-500 text-black transition duration-300">
              Join Us
            </Button>
            <Button className="border border-white bg-white text-black hover:bg-gray-400 transition duration-300">
              Connect
            </Button>
          </div>
        </div>

        <div className="ml-10">
          <ImageSlider slides={slides} />
        </div>
      </div>

      <AboutSection />

      <Events />

      <HeadOfTheDepartment />
      
      <FacultyAdvisors />

      <AccordianSection />
      
      <div className="mt-10">

      </div>

      <div className="flex justify-center mb-0"> 
        <GridButtons />
      </div>

      <footer className="bg-black-800 text-white p-20 text-center">
      </footer>
    </main>
  );
};

export default Apps;
