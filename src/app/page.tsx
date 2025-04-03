"use client";
import React, { useState, useEffect } from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Navbar from "./_components/Navbar";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import Headlines from "./_components/Headlines";

// Define the type for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);  // Track which question is active

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FAQ data with questions and answers
  const faqData: FAQ[] = [
    {
      question: "What is the IEI Students' Chapter?",
      answer: "The IEI Students' Chapter is a student community that aims to provide a platform for students to explore engineering topics through workshops, competitions, and networking opportunities.",
    },
    {
      question: "How can I join the IEI Students' Chapter?",
      answer: "You can join by signing up at any of our events or by contacting one of our members. Visit the 'Contact Us' section for more information.",
    },
    {
      question: "What type of events does the chapter organize?",
      answer: "We organize a range of events including hands-on workshops, ideathons, competitions, and brainstorming sessions focused on both core and non-core topics.",
    },
    {
      question: "Do I need to be an engineering student to join?",
      answer: "No, the chapter is open to all students, regardless of their branch. If you're passionate about learning and innovating, you're welcome to join us!",
    },
    {
      question: "Can I contribute to organizing events?",
      answer: "Absolutely! We encourage students to take active roles in organizing and managing events. You can volunteer or propose new event ideas to get involved.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);  // Toggle visibility of answers
  };

  return (
    <>
      <div className="h-full w-screen font-pxg">
        <Divider />
        <Header />
      </div>
      <Divider2 />

      {/*Hero Section*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden "></div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-12"></div>
      </div>
      <Divider2 />

      {/*About us*/}
      <div id="About-Us" className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Headlines headLine="About Us" />
        </div>
        <div className=" flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Link href="/team">
            <div className=" h-[3.75rem] w-[6rem] bg-[#fec20c] text-black py-1 px-3 flex flex-col items-start gap-0 text-sm hover:bg-[#fec20c]/90 transition-all duration-300">
              <span>MEET THE</span>
              <span>TEAM</span>
              <ArrowRight size={14} className="animate-float" />
            </div>
          </Link>
          <img
            src="/GIF.gif"
            className="w-full h-[3.75rem] object-cover"></img>
        </div>
        <div className="flex font-light flex-wrap gap-7 pl-[1.40625rem] pr-[1.40625rem] text-[10.5px] text-left justify-center items-stretch pt-[1.40625rem] font-pxg">
          Welcome to the IEI Students' Chapter of Electrical Engineering! We may be the newest community on the block, but we’re definitely the most energetic and driven one.<br /><br />
          Our mission is to create a space where students can dive into both core and non-core topics, learn new skills, and push the limits of what they can achieve. We organize everything from hands-on workshops and ideathons to competitions and brainstorming sessions, all designed to spark creativity and innovation.<br /><br />
          It’s not just about textbooks here - it’s about real-world experiences and connecting with others who share the same passion for engineering.<br /><br />
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
          <Headlines headLine="Live Events" />
        </div>
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Link href="/events">
            <div className="bg-[#fec20c] w-[6rem] h-[3.75rem] text-black py-1 px-3 flex flex-col items-start gap-0 text-sm hover:bg-[#fec20c]/90 transition-all duration-300 cursor-pointer">
              <span>VIEW ALL</span>
              <span>EVENTS</span>
              <ArrowRight size={14} className="animate-float" />
            </div>
          </Link>
          <img
            src="/GIF.gif"
            className="w-full h-[3.75rem] object-cover"></img>
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-stretch py-12"> No ongoing events </div>
      </div>
      <Divider2 />

      <div className="w-[calc(100%-20px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="From The HOD's Desk" />
        </div>
        <div className="flex gap-5 items-center py-[1.9375rem] pl-[1rem] pr-[1rem] text-[9px] font-pxg tracking-tight leading-snug">
          <Image src="/HOD.jpeg" alt="HOD's PIC" width={135} height={135} className="rounded-sm" />
          <p className="flex-1 font-light">
            Our department has created a platform to deliver strong fundamentals-based technical education. 
            We strive to produce electrical engineers who are well suited for both 
            industry and society.<br /><br />
            As HOD of this department, I endeavor to transform them into 
            creators of technology with good human values and a 
            commitment towards our nation.
            <br /><br />
            <span className="font-bolder text-left text-yellow-500"> - Prof. Sandip Saha Chowdhury</span><br />
            <span className="font-bolder text-left text-yellow-500">   HOD, Department of Electrical Engineering</span>
          </p>
        </div>
      </div>

      <Divider2 />

      {/*FAQs*/}
      <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
          <Headlines headLine="FAQs" />
        </div>
        <div className="flex flex-wrap justify-center items-stretch py-2">
          {faqData.map((faq, index: number) => (
            <div key={index} className="w-full max-w-lg p-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-[13px] text-white focus:outline-none"
              >
                {faq.question}
              </button>
              {activeQuestion === index && (
                <p className="text-[13px] text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Divider2 />

      {/*Footer*/}
      <Footer />
      <Divider2 />
      <div className="py-11"></div>

      <Navbar homeColor="#FEC20C" />
    </>
  );
};

export default HomePage;
