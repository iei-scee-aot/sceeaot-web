"use client";
import React from "react"
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Navbar from "./_components/Navbar";

import Image from "next/image";
import { useEffect, useState } from "react";
import Headlines from "./_components/Headlines";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="h-full w-screen font-pxg"> {/* Added padding-bottom */}
        <Divider />
        <Header />
      </div>
      <Divider2 />

      {/*Hero Section*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
        </div>
      </div>
      <Divider2 />

      {/*About us*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Headlines headLine="About Us" />
        </div>
        <div className="min-h-[3.75rem] flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
        </div>
        <div className="flex flex-wrap gap-7 pl-[1.40625rem] pr-[1.40625rem] text-[10.5px] text-left justify-center items-stretch pt-[1.40625rem] font-pxg">
          Welcome to the IEI Students' Chapter of Electrical Engineering! We may be the newest community on the block, but we’re definitely the most energetic and driven one.<br/><br/>

          Our mission is to create a space where students can dive into both core and non-core topics, learn new skills, and push the limits of what they can achieve. We organize everything from hands-on workshops and ideathons to competitions and brainstorming sessions, all designed to spark creativity and innovation.<br/><br/>

          It’s not just about textbooks here - it’s about real-world experiences and connecting with others who share the same passion for engineering.<br/><br/>

          So, if you’re looking to learn, grow, and have a ton of fun, join us on this exciting journey! We can’t wait to see what we can achieve together.
        </div>
        <div className="relative w-full mt-4">
          <Image src="/oldteam.jpg" alt="About Us" width={500} height={248} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
        </div>
      </div>
      <Divider2 />

      {/*Live Events*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Headlines headLine="Live Events"/>
        </div>
        <div className="min-h-[3.75rem] flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
        
        </div>
      </div>
      <Divider2 />

      <div className="w-[calc(100%-20px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
  <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
    <Headlines headLine="From The HOD's Desk" />
  </div>
  <div className="flex gap-3 items-center py-[1.5rem] pl-[0.9rem] pr-[0.6rem] text-[10.5px] font-pxg tracking-tight leading-snug">
    <Image src="/HOD.jpeg" alt="HOD's PIC" width={133} height={133} className="rounded-sm" />
    <p className="flex-1">
      Our department has created a platform to deliver strong fundamentals-based technical education. 
      We strive to produce electrical engineers who are well suited for both 
      industry and society.<br/>
      As HOD of this department, I endeavor to transform them into 
      creators of technology with good human values and a 
      commitment towards our nation.<br/>
      <span className="font-bold text-yellow-500"> - Prof. Sandip Saha Chowdhury<br/>
      HOD, Department of Electrical Engineering</span>
    </p>
  </div>
</div>

<Divider2 />


      {/*FAQs*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Headlines headLine="FAQs" />
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-2">
          Q!<br/>
          Q2<br/>
          Q3<br/>
          Q4<br/>
          Q5<br/>
        </div>
      </div>
      <Divider2 />

      {/*Footer*/}
      <Footer />
      <Divider2/>
      <div className="py-11"></div>

      <Navbar homeColor="#FEC20C" />
      
    </>
  );
};

export default HomePage;