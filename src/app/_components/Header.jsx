import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-screen flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/scee_logo.jpg"
              alt="SCEE Logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <span className="text-xs text-[#747474]">
              Student Chapter EE AOT
            </span>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-1">
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img
                src="/facebook.jpg"
                alt="Facebook"
                className="w-4 h-4 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img src="/x.jpg" alt="X" className="w-4 h-4 object-contain" />
            </a>
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img
                src="/linkedin.jpg"
                alt="Linkedin"
                className="w-4 h-4 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img
                src="/instagram.jpg"
                alt="Instagram"
                className="w-4 h-4 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img
                src="/threads.jpg"
                alt="Threads"
                className="w-4 h-4 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img
                src="/whatsapp.jpg"
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
            </a>
          </div>
        </header>
  )
}

export default Header