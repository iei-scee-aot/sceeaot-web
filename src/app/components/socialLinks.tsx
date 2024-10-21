"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo1 from "@/assets/icons/fb logo illumination.png";
import logo2 from "@/assets/icons/insta logo illumination.png";
import logo3 from "@/assets/icons/threads.png";
import logo4 from "@/assets/icons/x logo illumination.png";
import logo5 from "@/assets/icons/linkedin logo illumination.png";
import logo6 from "@/assets/icons/wp logo illumination.png";

const GridButtons = () => {
  const buttons = [
    { logo: logo1, link: "https://www.facebook.com/people/IEI-Students-Chapter-EE-of-AOT/61557651982100/", alt: "Facebook" },
    { logo: logo2, link: "https://www.instagram.com/sceeaot/", alt: "Instagram" },
    { logo: logo3, link: "https://www.threads.net/@sceeaot", alt: "Threads" },
    { logo: logo4, link: "https://x.com/sceeaot", alt: "X" },
    { logo: logo5, link: "https://www.linkedin.com/company/iei-students-chapter-of-ee-academy-of-technology/", alt: "LinkedIn" },
    { logo: logo6, link: "https://chat.whatsapp.com/Hywww0Ly1Pv9clzHXJekIv", alt: "WhatsApp" },
  ];

  return (
    <div className="relative md:scale-150">
      <h2 className="text-yellow-400 md:text-2xl text-xl mb-4 tracking-wide text-center font-bold">Connect with us</h2>
      <div className="flex justify-center">
        <div className="bg-black  rounded-lg shadow-">
          <div className="flex  md:grid md:grid-cols-3 gap-4">
            {buttons.map((button, index) => (
              <Link 
                key={index} 
                href={button.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className=" relative flex justify-center items-center bg-black hover:scale-105 transition-transform duration-300 rounded-lg p-2">
                  <Image className="scale-75  " src={button.logo} alt={button.alt} width={20} height={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridButtons;
