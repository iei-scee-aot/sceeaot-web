import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-[calc(100%-30px)] border-[0.5px] border-t-0 border-b-0 border-gray-400 flex justify-between items-center mx-auto">
          <div className=" flex justify-end items-baseline">
            <div className="flex items-center gap-2">
            <Image
              src="/scee_logo.jpg"
              alt="SCEE Logo"
              width={100}
              height={50}
              className="object-contain pl-3"
            />
            <div className="flex mt-3 items-baseline"><span className="text-[8px] text-[#747474]">
              Student Chapter EE AOT
            </span></div>
            
          </div>
          </div>
          <div className=" flex items-center justify-center">
          <table className="border border-gray-300 border-collapse">
        <tbody>
          <tr>
            <td className="w-6 h-6 border flex items-center justify-center border-gray-400 text-xs font-semibold  text-center">
            <a
              href="#"
              className=" text-[#747474]"
            >
              <img
                src="/facebook.jpg"
                alt="Facebook"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border  border-gray-400 text-xs font-semibold  ">
            <a
              href="#"
              className=" text-[#747474] flex items-center justify-center"
            >
              <img src="/x.jpg" alt="X" className="w-4 h-4 object-fill" />
            </a>
            </td>
            <td className="w-6 h-6 border border-gray-400 text-xs font-semibold  ">
            <a
              href="#"
              className="flex items-center justify-center rounded-md  "
            >
              <img
                src="/linkedin.jpg"
                alt="Linkedin"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
          </tr>
          <tr>
            <td className="w-6 h-6 border border-gray-400 text-xs font-semibold  ">
            <a
              href="#"
              className="flex justify-center items-center rounded-md  "
            >
              <img
                src="/instagram.jpg"
                alt="Instagram"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border border-gray-400 text-xs font-semibold  ">
            <a
              href="#"
              className="flex justify-center items-center rounded-md  "
            >
              <img
                src="/threads.jpg"
                alt="Threads"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border border-gray-400 text-xs font-semibold  ">
            <a
              href="#"
              className="flex justify-center items-center rounded-md  "
            >
              <img
                src="/whatsapp.jpg"
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
          </tr>
        </tbody>
      </table>
          </div>





          {/* <div className="grid grid-cols-3 grid-rows-2 ">
            
            
            
            
            
            
          </div> */}
        </header>
  )
}

export default Header