import Image from "next/image";
import React from "react";

import sceelogo from "@/assets/icons/sceelogo.png";
import { Button } from "../ui/button";
import Link from "next/link";

const Navebar = () => {
  return (
    <div className="h-20 w-full pl-10 z-50 bg-black fixed flex justify-between text-center items-center border border-r-0 border-l-0 border-t-0 border-b-2 border-gray-300 border-dashed">
      <div>
        <Image src={sceelogo} alt="logo" width={100} height={100} />
      </div>
      <div className="flex h-full">
        <div className="h-full flex justify-center items-center text-center pr-10">
          <Link href="/">
            <Button variant="scee">Home</Button>
          </Link>
          <Link href="/team">
            <Button variant="scee">Team</Button>
          </Link>
          <Link href="/events">
            <Button variant="scee">Events</Button>
          </Link>
        </div>
        <div className="h-full w-64 bg-yellow-400 flex justify-center text-center items-center">
          <Button
            variant="ghost"
            className="text-black rounded-none w-full h-full"
          >
            Comming Soon...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
