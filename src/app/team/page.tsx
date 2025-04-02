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
          <Card imagePath="/_pictures/Ritam_Dey.jpg" Name="Ritam Dey" Designation="Convenor"/>
          <Card imagePath="/_pictures/.jpg" Name="Sovan Mondal" Designation="Treasurer"/>
          </div>
        </div>
        <Divider2 />
        {/*The Tech Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Tech Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
          <Card imagePath="/_pictures/Debarshee_Chatterjee.jpg" Name="Debarshee Chatterjee" Designation="Lead"/>
          <Card imagePath="/_pictures/Arnab_Biswas.jpg" Name="Arnab Biswas" Designation="Co-Lead"/>
          <Card imagePath="/_pictures/Debpratim_Sharma.jpg" Name="Debpratim Sharma" Designation="Member"/>
          <Card imagePath="/_pictures/Indranil_Das.jpg" Name="Indranil Das" Designation="Member"/>
          <Card imagePath="/_pictures/Achinta_Siddhanta.jpg" Name="Achinta Siddhanta" Designation="Member"/>
          <Card imagePath="/_pictures/Aveek_Dey.jpg" Name="Aveek Dey" Designation="Member"/>
          <Card imagePath="/_pictures/Soumya_Shubra_Ghosh.jpg" Name="Soumya Shubra Ghosh" Designation="Member"/>
          <Card imagePath="/_pictures/Snehel_Basu.jpg" Name="Snehel Basu" Designation="Member"/>
          </div>
        </div>
        <Divider2 />
        {/*The Design Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Design Team"/>
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
          <Card imagePath="/_pictures/Rhritwika_Das.jpg" Name="Rhritwika Das" Designation="Lead"/>
          <Card imagePath="/_pictures/Abhinandan_Shadhukhan.jpg" Name="Abhinandan Shadhukhan" Designation="Co-Lead"/>
          <Card imagePath="/_pictures/Jayeeta_Das.jpg" Name="Jayeeta Das" Designation="Member"/>
          <Card imagePath="/_pictures/Arindam_Das.jpg" Name="Arindam Das" Designation="Member"/>
          <Card imagePath="/_pictures/Aditya_Kumar_Gupta.jpg" Name="Aditya Kumar Gupta" Designation="Member"/>
          <Card imagePath="/_pictures/Anindya_Sundar_Das.jpg" Name="Anindya Sundar Das" Designation="Member"/>
          <Card imagePath="/_pictures/Disha_Roy.jpg" Name="Disha Roy" Designation="Member"/>
          <Card imagePath="/_pictures/Mahasweta_Bhowmik.jpg" Name="Mahasweta Bhowmik" Designation="Member"/>
          </div>
        </div>
        <Divider2 />
        {/*Content Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Content Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
          <Card imagePath="/_pictures/Asmita_Mukherjee.jpg" Name="Asmita Mukherjee" Designation="Lead"/>
          <Card imagePath="/_pictures/Anisha_Singha.jpg" Name="Anisha Singha" Designation="Co-Lead"/>
          <Card imagePath="/_pictures/Niladri_Malakar.jpg" Name="Niladri Malakar" Designation="Member"/>
          <Card imagePath="/_pictures/Esha_Guha.jpg" Name="Esha Guha" Designation="Member"/>
          <Card imagePath="/_pictures/Surya_Sankar_Banerjee.jpg" Name="Surya Sankar Banerjee" Designation="Member"/>
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="PR & Marketing Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
          <Card imagePath="/_pictures/Swapnil_Dassharma.jpg" Name="Swapnil Dassharma" Designation="Lead"/>
          <Card imagePath="/_pictures/Aritrika_Chatterjee.jpg" Name="Aritrika Chatterjee" Designation="Co-Lead"/>
          <Card imagePath="/_pictures/Anurati_Bhaduri.jpg" Name="Anurati Bhaduri" Designation="Member"/>
          <Card imagePath="/_pictures/Aniket_Kumar_Mondal.jpg" Name="Aniket Kumar Mondal" Designation="Member"/>
          <Card imagePath="/_pictures/Amritesh_Singh.jpg" Name="Amritesh Singh" Designation="Member"/>
          <Card imagePath="/_pictures/Sudipta_Dolay.jpg" Name="Sudipta Dolay" Designation="Member"/>
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Photography Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch py-12">
          <Card imagePath="/_pictures/Dhrubajit_Ghosh.jpg" Name="Dhrubajit Ghosh" Designation="Lead"/>
          <Card imagePath="/_pictures/.jpg" Name="Asmit Putatunda" Designation="Co-Lead"/>
          <Card imagePath="/_pictures/Hrisikesh_Ghosh.jpg" Name="Hrisikesh Ghosh" Designation="Member"/>
          <Card imagePath="/_pictures/Ankan_Paul.jpg" Name="Ankan Paul" Designation="Member"/>
          <Card imagePath="/_pictures/Sayan_Debnath.jpg" Name="Sayan Debnath" Designation="Member"/>
          <Card imagePath="/_pictures/Swarnil_Biswas.jpg" Name="Swarnil Biswas" Designation="Member"/>
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Videography Team" />
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-stretch  py-12">
            <Card imagePath="/_pictures/Suvadeep_Roy.jpg" Name="Suvadeep Roy" Designation="Lead"/>
            <Card imagePath="/_pictures/Anish_Sasmal.jpg" Name="Anish Sasmal" Designation="Co-Lead"/>
            <Card imagePath="/_pictures/Souvik_Biswas.jpg" Name="Souvik Biswas" Designation="Member"/>
            <Card imagePath="/_pictures/.jpg" Name="Bikram Bhowmik" Designation="Member" />
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