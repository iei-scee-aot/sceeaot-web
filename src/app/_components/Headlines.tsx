"use client";

import React from "react"


import { useEffect, useState } from "react";
const Headlines = ({headLine="Headline"}) => {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        setIsVisible(true);
      }, []);
  return (
    <div><div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
    <p className="text-[3rem] lg:text-[5rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] lg:mb-5 lg:mt-[28px] mr-36"
      style={{
        fontFamily: "KMR Apparat1",
        WebkitTextStroke: "1px #fec20c",
        lineHeight: "0",
      }}
    >{headLine}</p>
    <p className="text-[3rem] lg:text-[5rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] lg:mb-5 lg:mt-[28px] mr-36"
      style={{
        fontFamily: "KMR Apparat1",
        WebkitTextStroke: "1px #fec20c",
        lineHeight: "0",
      }}
    >{headLine}</p>
    <p className="text-[3rem] lg:text-[5rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] lg:mb-5 lg:mt-[28px] mr-36"
      style={{
        fontFamily: "KMR Apparat1",
        WebkitTextStroke: "1px #fec20c",
        lineHeight: "0",
      }}
    >{headLine}</p>
    <p className="text-[3rem] lg:text-[5rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] lg:mb-5 lg:mt-[28px] mr-36"
      style={{
        fontFamily: "KMR Apparat1",
        WebkitTextStroke: "1px #fec20c",
        lineHeight: "0",
      }}
    >{headLine}</p>
  </div></div>
  )
}

export default Headlines