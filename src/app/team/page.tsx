"use client";
import React from "react"
import Card from "./_components/Card"
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Divider from "../_components/Divider";
import Divider2 from "../_components/Divider2";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Headlines from "../_components/Headlines";


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
            <Headlines headLine="The Previous Team" />
          </div>
          <div className="relative w-full h-[210px] flex flex-wrap justify-center">
            <Image alt="scee-old-team" src="/oldteam.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <Divider2 />
        {/*Core team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Core Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Tech Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Tech Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Design Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Design Team"/>
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Content Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Content Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="PR & Marketing Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Photography Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Videography Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch  py-12">
            <Card />
            <Card />
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