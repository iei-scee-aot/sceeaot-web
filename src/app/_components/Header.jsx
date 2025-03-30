import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-[calc(100%-30px)] border-[0.5px] border-t-0 border-b-0 border-gray-500 flex justify-between items-center mx-auto">
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
            <a href="#">
            <Image
              src="/discord.jpg" width={23.5} height={23.5} alt="d"
              className="mr-3"/>
            </a>
           
          <table className="border-gray-500 border-l-[0.5px] ">
        <tbody>
          <tr>
            <td className="w-6 h-6  flex items-center justify-center text-xs font-semibold  text-center">
            <a
              href="https://www.facebook.com/share/1FEuhXyYT1/"
              className=" text-[#747474]"
            >
              <img
                src="/facebook.jpg"
                alt="Facebook"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border-l-[0.5px] border-b-[0.5px]  border-gray-500 text-xs font-semibold  ">
            <a
              href="https://x.com/sceeaot"
              className=" text-[#747474] flex items-center justify-center"
            >
              <img src="/x.jpg" alt="X" className="w-4 h-4 object-fill" />
            </a>
            </td>
            <td className="w-6 h-6 border-l-[0.5px] border-gray-500 text-xs font-semibold  ">
            <a
              href="https://www.linkedin.com/in/scee-aot-127a31294/?originalSubdomain=in"
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
            <td className="w-6 h-6  border-gray-500 border-t-[0.5px] text-xs font-semibold  ">
            <a
              href="https://www.instagram.com/sceeaot?igsh=YnVqYTV1dWFwZGlv"
              className="flex justify-center items-center rounded-md  "
            >
              <img
                src="/instagram.jpg"
                alt="Instagram"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border-l-[0.5px] border-gray-500 text-xs font-semibold  ">
            <a
              href="https://www.threads.net/@sceeaot"
              className="flex justify-center items-center rounded-md  "
            >
              <img
                src="/threads.jpg"
                alt="Threads"
                className="w-4 h-4 object-contain"
              />
            </a>
            </td>
            <td className="w-6 h-6 border-l-[0.5px] border-t-[0.5px] border-gray-500 text-xs font-semibold  ">
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