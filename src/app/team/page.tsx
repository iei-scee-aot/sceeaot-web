"use client";

import React from "react"
import Link from "next/link"
import Card from "./_components/Card"
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Navbar from "../_components/Navbar";
import Image from "next/image";

import { useEffect, useState } from "react";


const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="h-full w-screen mb-[29px] pb-[60px] font-pxg"> {/* Added padding-bottom */}
        <Divider />
        <Header />
        <Divider2 />
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-20"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >The Previous Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-20"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >The Previous Team</p>
            </div>
          </div>
          <div className="relative w-full h-[200px] flex flex-wrap justify-center">
            <Image alt="scee-old-team" src="/oldteam.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <Divider2 />
        {/*Core team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Core Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Core Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Tech Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Tech Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Tech Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Design Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Design Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Design Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Content Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Content Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Content Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >PR & Marketing Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >PR & Marketing Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Photography Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Photography Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <div className={`flex whitespace-nowrap ${isVisible ? "animate-marquee" : "opacity-0"}`}>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Videography Team</p>
              <p className="text-[3rem] font-bold text-transparent bg-clip-text mb-3 mt-[18px] mr-36"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px #fec20c",
                  lineHeight: "0",
                }}
              >Videography Team</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Footer*/}
        <Footer />
        <Divider2/>
      </div>

      <Navbar teamColor="#FEC20C" />
    </>
  );
};

export default Page;