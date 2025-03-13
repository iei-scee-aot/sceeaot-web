
import React from "react"
import Link from "next/link"
import Card from "./_components/Card"
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Divider from "../_components/Divider";
import Navbar from "../_components/Navbar";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <Divider />
      {/* <Header /> */}
      <div className="w-screen flex justify-between align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-12"></div>
        <Header/>
        <div className="px-3 border-l-[0.5px] h-12"></div>
      </div>
      <Divider />
      {/*prev team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">THE PREVIOUS TEAM</h1>
          </div>
          <div className=" h-fit ">
            <img src="/oldteam.jpg" alt="old team" />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*core team*/}
      {/*prev team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">CORE TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*tech team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">TECH TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*design team*/} 
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">DESIGN TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*content team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">CONTENT TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider/>
      {/*pr and marketing team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">PR AND MARKETING TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*Photography team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">PHOTOGRAPHY TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*Videography team*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-10 border-b-[0.5px] overflow-y-hidden">
          <h1 className="text-2xl font-bold whitespace-nowrap text-ellipsis">VIDEOGRAPHY TEAM</h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
      {/*Footer*/}
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className=" flex flex-wrap justify-evenly ">
          <Footer />
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />


        {/* Footer (No extra margins) */}
      
      <Navbar />
    </>
  );
};

export default Page;