"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import sceelogo from "@/assets/icons/sceelogo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { div } from "framer-motion/client";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Image src={sceelogo} alt="SCEE Logo" width={80} height={80} className="object-contain" />
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose className="text-4xl text-gray-400" />

                  ) : (
                    <FiMenu className="text-4xl text-gray-400" />

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen space-y-5 md:space-y-0 md:h-auto items-center justify-center md:flex ">
                <li className=" text-center border-b-2 md:border-b-0 ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  <Button
                variant="scee"
                className="md:px-6 text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg pb-6 px-4 py-2"
              >
                Home
              </Button>
                  </Link>
                </li>
                <li className=" text-center border-b-2 md:border-b-0 ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  <Button
                variant="scee"
                className="md:px-6 text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg pb-6 px-4 py-2"
              >
                Team
              </Button>
                  </Link>
                </li>
                <li className=" text-center border-b-2 md:border-b-0 ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  <Button
                variant="scee"
                className="md:px-6 text-yellow-400 font-black hover:bg-white hover:text-black border border-black text-lg pb-6 px-4 py-2"
              >
                Events
              </Button>
                  </Link>
                </li>
                <li className="mt-20 md:mt-0 md:ml-10 text-center rounded-lg bg-yellow-400 border-b-2 md:border-b-0 ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  <Button
                variant="scee"
                className="md:px-6 text-black hover:text-black font-bold border-black text-lg pb-6 px-4 py-2"
              >
                Coming soon...
              </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;