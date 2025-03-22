import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto relative w-full h-[10.5625rem]">
      {/* Top Horizontal Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#747474]/30" />

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#747474]/30" />

      {/* Left Vertical Line (Responsive) */}
      <div className="absolute top-0 bottom-0 left-[0.9375rem] w-[1px] bg-[#747474]/30" />

      {/* Right Vertical Line (Responsive) */}
      <div className="absolute top-0 bottom-0 right-[0.9375rem] w-[1px] bg-[#747474]/30" />

      {/* Footer Content */}
      <div className="p-6 border-t border-[#747474]/30 h-full flex flex-col justify-center">
        <div className="flex justify-between items-center mb-[1.5625rem] flex-wrap gap-4">
          {/* Logo */}
          <div className="mt-[1.020625rem]">
            <Image
              src="/scee_logo.jpg"
              alt="SCEE Logo"
              width={101.53}
              height={40.15}
              className="object-contain h-[2.509375rem] w-[6.345625rem]"
            />
          </div>

          {/* Socials Section */}
          <div className="flex flex-col items-start mt-[1.628125rem]">
            <span className="text-xs text-[#747474] mb-[0.5px]">Follow us on our socials</span>
            <Link href="#" className="flex items-center gap-1">
              <img
                src="/linktree.jpg"
                alt="Linktree"
                className="w-[17px] h-[17px] object-contain"
              />
              <span className="text-[17px] font-semibold text-white">/sceeaot</span>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-start flex-col">
          <p className="text-[#747474] text-sm">Have something in mind?</p>
          <Link
            href="/contact"
            className="flex items-center gap-2 mt-2 text-[46px] font-bold group"
          >
            Contact us
            <ArrowUpRight
              size={52}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;