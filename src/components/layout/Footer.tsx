import Image from "next/image";
import React from "react";

import sceelogo from "@/assets/icons/sceelogo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen mx-auto pl-16 pr-16 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={sceelogo} alt="SCEEAOT" width={100} className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Students Chapter of Electrical Engineering
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 border-dashed sm:mx-auto lg:my-8" />
        <span className="block text-sm text-yellow-300 sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            IEISCEEAOT
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
