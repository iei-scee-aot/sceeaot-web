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
            <Card
              Name="Ritam Dey"
              Designation="Convener"
              imagePath="/_pictures/Ritam_Dey.jpg"
              links={[
                "https://www.facebook.com/share/1EpY3SMJVj/",
                "https://www.instagram.com/ritamdey68/",
              ]}
            />
            <Card
              Name="Sovan Mondal"
              Designation="Treasurer"
              imagePath="/_pictures/Sovan_Mondal.jpg"
              links={[
                "https://www.facebook.com/share/1McVJvidNu/",
                "https://www.instagram.com/sovanm_07/",
                "https://www.linkedin.com/in/sovan-mondal-99b440262/?originalSubdomain=in",
              ]}
            />
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
                "https://www.linkedin.com/in/debarshee-chakraborty-dc2004/",
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
                "https://www.linkedin.com/in/arnab-biswas-rk108/",
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
                "https://www.linkedin.com/in/debpratim-sharma-916203267/",
              ]}
            />
            <Card
              Name="Indranil Das"
              Designation="Member"
              imagePath="/_pictures/Indranil_Das.jpg"
              links={[
                "https://www.instagram.com/neel.sg_",
                "https://www.linkedin.com/in/indranil-das-586837284/",
              ]}
            />
            <Card
              Name="Achinta Siddhanta"
              Designation="Member"
              imagePath="/_pictures/Achinta_Siddhanta.jpg"
              links={[
                "https://www.facebook.com/sidd.a03",
                "https://www.instagram.com/sidd.a03/",
                "https://www.linkedin.com/in/achinta-siddhanta/",
              ]}
            />
            <Card
              Name="Aveek Dey"
              Designation="Member"
              imagePath="/_pictures/Aveek_Dey.jpg"
              links={[
                "https://www.facebook.com/share/1BBs1gXPDh/",
                "https://www.instagram.com/aveek_de_04/",
                "https://www.linkedin.com/in/aveek-dey-89b476330/",
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
                "https://www.linkedin.com/in/soumya-subhra-ghosh-78b30729b/",
              ]}
            />
            <Card
              Name="Snehel Basu"
              Designation="Member"
              imagePath="/_pictures/Snehel_Basu.jpg"
              links={["https://www.linkedin.com/in/snehel-basu-26601329a/"]}
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
                "https://www.linkedin.com/in/soham-banerjee-65078229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
              links={["https://www.linkedin.com/in/rhritwika-das-b1b74b262/"]}
            />
            <Card
              Name="Abhinandan Shadhukhan"
              Designation="Co-Lead"
              imagePath="/_pictures/Abhinandan_Shadhukhan.jpg"
              links={[]}
            />
            <Card
              Name="Jayeeta Das"
              Designation="Member"
              imagePath="/_pictures/Jayeeta_Das.jpg"
              links={[
                "https://www.facebook.com/share/1BBcYsWTeM/?mibextid=qi2Omg",
                "https://www.instagram.com/jayeeta908?igsh=MTNuYzI1OWNtcWw0dA==",
                "https://x.com/17Jayeeta?t=t5r_BBXj-0JYHxidTsrjVw&s=08",
                "https://www.linkedin.com/in/jayeeta-das-8014ba2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Anindya Sundar Das"
              Designation="Member"
              imagePath="/_pictures/Anindya_Sundar_Das.jpg"
              links={[
                "https://www.facebook.com/share/1Dasrb3pgu/",
                "https://www.instagram.com/_aninz?igsh=MTgzbzYwdzQwNGlsag==",
                "https://www.linkedin.com/in/anindya-sundar-das-798b942a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Disha Roy"
              Designation="Member"
              imagePath="/_pictures/Disha_Roy.jpg"
              links={[
                "https://www.instagram.com/disha_roy510?igsh=MXhpaWlnNXptcGtxNw==",
                "http://www.linkedin.com/in/disha--roy",
              ]}
            />
            <Card
              Name="Arindam Das"
              Designation="Member"
              imagePath="/_pictures/Arindam_Das.jpg"
              links={[
                "https://www.facebook.com/share/15kSKay3MS/",
                "https://www.instagram.com/i_am_devil_arii?igsh=d3h3aXF2MmxraHVm",
                "https://www.linkedin.com/in/arindam-das-4a465528a",
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
                "https://www.linkedin.com/in/aditya-kumar-gupta-5616a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />

            <Card
              Name="Dipshikha Pramanik"
              Designation="Member"
              imagePath="/_pictures/Dipshikha_Pramanik.jpg"
              links={[
                "https://www.linkedin.com/in/dipshikha-pramanik-205a34328",
              ]}
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
            <Card
              Name="Asmita Mukherjee"
              Designation="Lead"
              imagePath="/_pictures/Asmita_Mukherjee.jpg"
              links={[
                "https://www.linkedin.com/in/asmita-mukherjee-53b494242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Anisha Singha"
              Designation="Co-Lead"
              imagePath="/_pictures/Anisha_Singha.jpg"
              links={[
                "https://www.linkedin.com/in/anisha-singha-b6381931b/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION",
              ]}
            />
            <Card
              Name="Niladri Malakar"
              Designation="Member"
              imagePath="/_pictures/Niladri_Malakar.jpg"
              links={[
                "https://www.facebook.com/share/1TJ8aMfsuQ/",
                "https://www.instagram.com/_comrade.malakar_2004?igsh=MWVranUybDhsbTU2aQ==",
                "https://x.com/Niladri9082?t=NOJiQk0D_Q-LR4OeXlwj0w&s=09",
                "https://www.linkedin.com/in/niladri-malakar-18078b321",
              ]}
            />
            <Card
              Name="Surya Sankar Banerjee"
              Designation="Member"
              imagePath="/_pictures/Surya_Sankar_Banerjee.jpg"
              links={[
                "https://www.facebook.com/share/15prJibvqd/",
                "https://www.instagram.com/shanky_.banerjee?igsh=bjF1a2MzbWhxemc0",
                "https://www.linkedin.com/in/surya-sankar-banerjee-021753353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
          </div>
        </div>
        <Divider2 />
        {/*PR & Marketing Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="PR & Marketing Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card
              Name="Swapnil Dassharma"
              Designation="Lead"
              imagePath="/_pictures/Swapnil_Dassharma.jpg"
              links={[
                "https://www.facebook.com/share/1E9EQicMRM/",
                "https://www.instagram.com/swapnil_dassharma?igsh=MWxocG5wbG9vMWN1cw==",
                "https://www.linkedin.com/in/swapnil-dassharma-1b664b213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Aritrika chatterjee"
              Designation="Co-Lead"
              imagePath="/_pictures/Aritrika_Chatterjee.jpg"
              links={[
                "https://www.facebook.com/share/1B76dPjtYJ/",
                "https://www.instagram.com/_a_riiy?igsh=MTcyOWU2eHloYzlkOA==",
                "https://www.linkedin.com/in/aritrika-chatterjee-247104308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Sudipta Dolay"
              Designation="Member"
              imagePath="/_pictures/Sudipta_Dolay.jpg"
              links={[
                "https://www.facebook.com/share/1BA2KX2ttC/",
                "https://www.instagram.com/comred_2004?igsh=eDhyeDBhMmdjdHVl",
                "https://www.linkedin.com/in/sudipta-dolay-52b82a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Aniket Kumar Mondal"
              Designation="Member"
              imagePath="/_pictures/Aniket_Kumar_Mondal.jpg"
              links={[
                "https://www.facebook.com/profile.php?id=100017587274137&mibextid=wwXIfr&mibextid=wwXIfr",
                "https://www.instagram.com/viperrrrr___?igsh=NGRuZXVtNXdwZHE2&utm_source=qr",
                "https://x.com/aniketviper7?s=21&t=8Swb4ZYlZ55VvwcIIOk2Qw",
                "https://www.linkedin.com/in/aniket-kumar-mondal-212758353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
              ]}
            />

            <Card
              Name="Amritesh Singh"
              Designation="Member"
              imagePath="/_pictures/Amritesh_Singh.jpg"
              links={[
                "https://www.facebook.com/share/1D6e4YqY9J/",
                "https://www.instagram.com/justamrit__?igsh=MWJ6OGoxYzJrNTF3aw==",
                "https://www.linkedin.com/in/amritesh-singh-bb6b92346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Anurati Bhaduri"
              Designation="Member"
              imagePath="/_pictures/Anurati_Bhaduri.jpg"
              links={[
                "https://www.instagram.com/anurati__?igsh=azRua2Q4NjdmN3F5",
                "http://www.linkedin.com/in/anurati-bhaduri-807773353",
              ]}
            />
          </div>
        </div>
        <Divider2 />
        {/*Photography Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Photography Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            <Card
              Name="Dhrubajit ghosh"
              Designation="Lead"
              imagePath="/_pictures/Dhrubajit_Ghosh.jpg"
              links={[]}
            />
            <Card
              Name="Asmit Putatunda"
              Designation="Co-Lead"
              imagePath="/_pictures/Asmit_Putatunda.jpg"
              links={[
                "https://www.facebook.com/profile.php?id=100094195157462",
                "https://www.instagram.com/mostly_insane_0_0/?igsh=MTFvaWQyMGRlazg2Zw==",
                "https://x.com/AsmitWick2005?t=H0w0MkyBjhNwTl0mLYTmOA&s=09"

              ]}
            />
            <Card
              Name="Hrisikesh Ghosh"
              Designation="Member"
              imagePath="/_pictures/Hrisikesh_Ghosh.jpg"
              links={[
                "https://www.facebook.com/share/16HwyVvMdH/",
                "https://www.instagram.com/hrisi_onroads?igsh=MXg0aDhiMTlwYmdsYw==",
                "https://www.linkedin.com/in/hrisikesh-ghosh-771709353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Swarnil Biswas"
              Designation="Member"
              imagePath="/_pictures/Swarnil_Biswas.jpg"
              links={[
                "https://www.linkedin.com/in/swarnil-biswas-46420320a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Sayan Debnath"
              Designation="Member"
              imagePath="/_pictures/Sayan_Debnath.jpg"
              links={[
                "https://www.instagram.com/sayan_exe?igsh=MTFvaWQyMGRlazg2Zw==",
                "https://www.linkedin.com/in/sayan-debnath-6b7053296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />

            <Card
              Name="Ankan Paul"
              Designation="Member"
              imagePath="/_pictures/Ankan_Paul.jpg"
              links={[
                "https://www.facebook.com/share/1KNcEGtQ5G/?mibextid=wwXIfr",
                "https://www.instagram.com/trappped_in_mind?igsh=MXRybzM1NHNzd3d6Mg%3D%3D&utm_source=qr",
              ]}
            />
          </div>
        </div>
        <Divider2 />
        {/*Videography Team*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-200px)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 ">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden ">
            <Headlines headLine="Videography Team" />
          </div>
          <div className="flex flex-wrap gap-y-10 md:gap-y-16 justify-evenly md:gap-x-9 gap-x-3 md:px-9 px-3 items-stretch py-12">
            
             <Card
              Name="Suvadeep roy"
              Designation="Lead"
              imagePath="/_pictures/Suvadeep_Roy.jpg"
              links={[
                "https://www.facebook.com/share/15NwjnunzS/",
                "https://www.instagram.com/suvadeep_roy_777?igsh=b3h6djd5MDlqNTl1",
                "https://x.com/RoySuvadeep7?t=H0w0MkyBjhNwTl0mLYTmOA&s=09",
                "https://www.linkedin.com/in/suvadeep-roy-a6281b273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />

            <Card
              Name="Anish Sasmal"
              Designation="Co-Lead"
              imagePath="/_pictures/Anish_Sasmal.jpg"
              links={[
                "https://www.facebook.com/anish.sasmal.9",
                "https://www.instagram.com/iam_anish___?utm_source=ig_web_button_share_sheet&igsh=MW5sb2QxM2M3czczZA==",
                "https://x.com/AnishSasmal",
                "https://www.linkedin.com/in/anish-sasmal-9a8111291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              ]}
            />
           
            <Card
              Name="Ronish Chakraborty"
              Designation="Member"
              imagePath="/_pictures/Ronish_Chakraborty.jpg"
              links={[
                "https://www.facebook.com/share/1ECB2SRJxT/",
                "https://www.instagram.com/ronish_2004/profilecard/?igsh=MXFxMzN1NDVnNGxwMQ==",
                "https://x.com/Ronish_08?t=fWDXJeSiXRfflYY2abUYPg&s=09",
                "https://www.linkedin.com/in/ronish-chakraborty-846732353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
            <Card
              Name="Souvik Biswas"
              Designation="Member"
              imagePath="/_pictures/Souvik_Biswas.jpg"
              links={[
                "https://www.facebook.com/share/12EF5vr7SKJ/",
                "https://www.instagram.com/souvik_biswas13?igsh=N284N2xrYzJzYzc5",
                "https://www.linkedin.com/in/souvik-biswas-125855353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ]}
            />
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
