import Image from "next/image";
import React from "react";

import sceelogo from "@/assets/icons/sceelogo.png";
import { Button } from "../ui/button";
import Link from "next/link";

const Navebar = () => {
  return (
    <nav className="h-20 w-full px-10 z-50 bg-black fixed border-b-4 border-gray-300 flex items-center">
      <div className="flex-shrink-0 mr-5">
        <Image src={sceelogo} alt="SCEE Logo" width={80} height={80} className="object-contain" />
      </div>
      <div className="flex-grow flex justify-end items-center h-full"> 
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Button
              variant="scee"
              className="text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg px-4 py-2"
            >
              Home
            </Button>
          </Link>
          <Link href="/team">
            <Button
              variant="scee"
              className="text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg px-4 py-2"
            >
              Team
            </Button>
          </Link>
          <Link href="/events">
            <Button
              variant="scee"
              className="text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg px-4 py-2"
            >
              Events
            </Button>
          </Link>
        </div>
        <div className="h-full w-auto flex items-center justify-center bg-yellow-400 ml-5">
          <Button variant="ghost" className="text-black rounded-none w-full h-full text-lg px-4 py-2">
            Coming Soon...
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
