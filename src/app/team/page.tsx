import React from "react"
import Link from "next/link"
import Card from "./_components/Card"
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Navbar from "../_components/Navbar";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <div className="h-full w-screen mb-[90px]"> {/* Added padding-bottom */}
        <Divider />
        <Header />
        <Divider2 />
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-5xl font-bold border-gray-400 border-b-[0.5px] text-white h-fit leading-none whitespace-nowrap overflow-hidden ">
            <p>The previous team</p>
          </div>
          <div className="relative w-full h-[200px] flex flex-wrap justify-center">
            <Image alt="scee-old-team" src="/oldteam.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <Divider2 />
        {/*Core team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Core Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Tech Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Tech Team            
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Design Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Design Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Content Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Content Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            PR & Marketing Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Photography Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-400 border-t-0 border-b-0 ">
          <div className="flex items-center  text-white h-fit text-5xl font-bold leading-none whitespace-nowrap overflow-hidden border-gray-400 border-b-[0.5px]">
            Videography Team
          </div>
          <div className="flex flex-wrap justify-center items-center py-12">
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Footer*/}
        
      </div>

      <Navbar />
    </>
  );
};

export default Page;