"use client";
import React from "react";
import Card from "./_components/Card";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Divider from "./_components/Divider";
import Divider2 from "./_components/Divider2";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Headlines from "../_components/Headlines";
import { Car } from "lucide-react";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="h-full border-gray-500 border-b-[0.5px] w-full mb-[29px] pb-[60px] lg:pb-0 font-pxg">
        {" "}
        {/* Added padding-bottom */}
        <Divider />
        <Header />
        <Divider2 />
        <Navbar teamColor="#FEC20C" />
        <div className="w-full hidden lg:flex py-3 border-gray-500 border-b-[0.5px] "></div>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="The Previous Team" />
          </div>
          <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] flex flex-wrap justify-center">
            <Image
              alt="scee-old-team"
              src="/oldteam.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <Divider2 />
        {/*Core team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Core Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*The Tech Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Tech Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card
              Name="Debarshee Chakraborty"
              Designation="Lead"
              imagePath="/_pictures/Debarshee_Chatterjee.jpg"
              links={[
                "https://www.facebook.com/share/1FLHrYDQ18/",
                "https://www.instagram.com/dino04.ai/",
                "https://x.com/dinocodes69",
                "https://www.linkedin.com/in/debarshee-chakraborty-dc2004/"
              ]}
             />
            <Card
              imagePath="/_pictures/Arnab_Biswas.jpg"
              Name="Arnab Biswas"
              Designation="Co-Lead"
              links={[
                "https://www.facebook.com/share/1VQAZ6ggo8/",
                "https://www.instagram.com/arnab.biswas.1512/",
                "https://x.com/_Arnab_Biswas/",
                "https://www.linkedin.com/in/arnab-biswas-rk108/"
                
              ]}
            />
            <Card
              Name="Debpratim Sharma"
              Designation="Member"
              imagePath="/_pictures/Debpratim_Sharma.jpg"
              links={[
                "https://www.facebook.com/share/18eYsdYadd/",
                "https://www.instagram.com/me_ur_deb/",
                "https://x.com/DebpratimSharm1/",
                "https://www.linkedin.com/in/debpratim-sharma-916203267/"
              ]}
             />
            <Card
              Name="Indranil Das"
              Designation="Member"
              imagePath="/_pictures/Indranil_Das.jpg"
              links={[
                "https://www.instagram.com/neel.sg_",
                "https://www.linkedin.com/in/indranil-das-586837284/"
              ]}
            />
            <Card
              Name="Achinta Siddhanta"
              Designation="Member"
              imagePath="/_pictures/Achinta_Siddhanta.jpg"
              links={[
                "https://www.facebook.com/sidd.a03",
                "https://www.instagram.com/sidd.a03/",
                "https://www.linkedin.com/in/achinta-siddhanta/"
              ]}
            />
            <Card 
              Name="Aveek Dey"
              Designation="Member"
              imagePath="/_pictures/Aveek_Dey.jpg"
              links={[
                "https://www.facebook.com/share/1BBs1gXPDh/",
                "https://www.instagram.com/aveek_de_04/",
                "https://www.linkedin.com/in/aveek-dey-89b476330/"
              ]}
            />
            <Card 
              Name="Soumya Subhra Ghosh"
              Designation="Member"
              imagePath="/_pictures/Soumya.jpg"
              links={[
                "https://www.facebook.com/soumyashubra.ghosh/",
                "https://www.instagram.com/soumya_subhra_05?igsh=Z2Zhem5vZHU5cWI2",
                "https://x.com/SoumyaSubh13172?t=Nc9ZpDnnNSEhmsy5roVKlw&s=09",
                "https://www.linkedin.com/in/soumya-subhra-ghosh-78b30729b/"
              ]}
            />
            <Card 
              Name="Snehel Basu"
              Designation="Member"
              imagePath="/_pictures/Snehel_Basu.jpg"
              links={[
                "https://www.linkedin.com/in/snehel-basu-26601329a/"
              ]}
            />
            <Card 
             Name="Sounak Banerjee"
              Designation="Member"
              imagePath="/_pictures/Sounak_Banerjee.jpg"
              links={[
                "https://www.instagram.com/sounak___007/",
                "https://x.com/Sounak__007/",
                "https://www.linkedin.com/in/sounak-banerjee-innovation/",
              ]}
            />
            <Card 
              Name="Soham Banerjee"
              Designation="Member"
              imagePath="/_pictures/Soham_Banerjee.jpg"
              links={[
                "https://www.instagram.com/__sohambanerjee__?igsh=MXc4MXd3a2cwZjVqOA==",
                "https://www.linkedin.com/in/soham-banerjee-65078229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              ]}
            />
          </div>
        </div>
        <Divider2 />
        {/*The Design Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Design Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card
              Name="Rhritwika Das"
              Designation="Lead"
              imagePath="/_pictures/Rhritwika_Das.jpg"
              links={[
                "https://www.linkedin.com/in/rhritwika-das-b1b74b262/"
              ]}
            />
            <Card 
            Name="Abhinandan Shadhukhan"
            Designation="Co-Lead"
            imagePath="/_pictures/Abhinandan_Shadhukhan.jpg"
            links={[]}
            />
            <Card 
              Name="Anindya Sundar Das"
              Designation="Member"
              imagePath="/_pictures/Anindya_Sundar_Das.jpg"
              links={[
                "https://www.facebook.com/share/1Dasrb3pgu/",
                "https://www.instagram.com/_aninz?igsh=MTgzbzYwdzQwNGlsag==",
                "https://www.linkedin.com/in/anindya-sundar-das-798b942a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              ]}
            />
            <Card
              Name="Disha Roy"
              Designation="Member"
              imagePath="/_pictures/Disha_Roy.jpg"
              links={[
                "https://www.instagram.com/disha_roy510?igsh=MXhpaWlnNXptcGtxNw==",
                "http://www.linkedin.com/in/disha--roy"
              ]}
            />
            <Card 
              Name="Arindam Das"
              Designation="Member"
              imagePath="/_pictures/Arindam_Das.jpg"
              links={[
                "https://www.facebook.com/share/15kSKay3MS/",
                "https://www.instagram.com/i_am_devil_arii?igsh=d3h3aXF2MmxraHVm",
                "https://www.linkedin.com/in/arindam-das-4a465528a"
              ]}
            />
            <Card
            Name="Aditya Kumar Gupta"
            Designation="Member"
            imagePath="/_pictures/Aditya_Kumar_Gupta.jpg"
            links={[
              "https://www.facebook.com/share/12GmE4ownR1/?mibextid=qi2Omg",
              "https://www.instagram.com/_adiiiiiii._.04?igsh=NmxjdmNxNTIxMDB2",
              "https://x.com/EddY___04?t=8Swb4ZYlZ55VvwcIIOk2Qw&s=09",
              "https://www.linkedin.com/in/aditya-kumar-gupta-5616a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

            ]}
            />

            <Card
              Name="Dipshikha Pramanik"
              Designation="Member"
              imagePath="/_pictures/Dipshikha_Pramanik.jpg"
              links={["https://www.linkedin.com/in/dipshikha-pramanik-205a34328"]}
            />
            <Card
              Name="Mahasweta Bhowmik"
              Designation="Member"
              imagePath="/_pictures/Mahasweta_Bhowmik.jpg"
              links={["https://www.linkedin.com/in/mahasweta-bhowmik"]}
            />

          </div>
        </div>
        <Divider2 />
        {/*Content Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Content Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="PR & Marketing Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Photography Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Videography Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Divider2 />
        {/*Footer*/}
        <Footer />
      </div>
    </>
  );
};

export default Page;
