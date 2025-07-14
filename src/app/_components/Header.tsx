import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] border-[0.5px] border-t-0 border-b-0 border-gray-500 flex justify-between items-center mx-auto">
          <div className=" flex justify-end items-baseline">
            <div className="flex items-center gap-2">
            <Image
              src="/scee_logo.jpg"
              alt="SCEE Logo"
              width={100}
              height={50}
              className="object-contain pl-3 w-[85px] h-[40px] md:w-[100px] md:h-[45px] lg:w-[120px] lg:h-[50px] xl:w-[110px] xl:h-[55px] 2xl:w-[120px] 2xl:h-[60px]"
            />
            <div className="flex mt-3 items-baseline">
              <span className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] text-[#747474]">
                Student Chapter EE AOT
              </span>
            </div>
          
          </div>
          </div>
          <div className=" flex items-center justify-center">
            <a href="https://discord.gg/mqNcynTs" target="_blank" rel="noopener noreferrer">
            <Image

              src="/discord.jpg" 
              width={25} 
              height={25} 
              alt="discord icon"
              className="mr-3 w-[28px] h-[28px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px]"/>

            </a>
          
          <table className="border-gray-500 border-l-[0.5px]">
        <tbody>
          <tr>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] flex items-center justify-center text-xs font-semibold text-center">
            <a
              href="https://www.facebook.com/share/1RBFTrFVs3/"
              className=" text-[#747474]" target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/facebook.jpg"
                alt="Facebook"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-contain"
              />
            </a>
            </td>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border-l-[0.5px] border-b-[0.5px] border-gray-500 text-xs font-semibold">
            <a
              href="https://x.com/sceeaot?t=AEcVdqvd0iNtwQyNv0xRYQ&s=09"
              className=" text-[#747474] flex items-center justify-center" target="_blank" rel="noopener noreferrer"
            >
              <img 
                src="/x.jpg" 
                alt="X" 
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-fill" 
              />
            </a>
            </td>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border-l-[0.5px] border-gray-500 text-xs font-semibold">
            <a
              href="https://www.linkedin.com/company/iei-students-chapter-of-ee-academy-of-technology/"
              className="flex items-center justify-center rounded-md" target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/linkedin.jpg"
                alt="Linkedin"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-contain"
              />
            </a>
            </td>
          </tr>
          <tr>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border-gray-500 border-t-[0.5px] text-xs font-semibold">
            <a
              href="https://www.instagram.com/sceeaot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="flex justify-center items-center rounded-md" target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/instagram.jpg"
                alt="Instagram"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-contain"
              />
            </a>
            </td>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border-l-[0.5px] border-gray-500 text-xs font-semibold">
            <a
              href="https://www.threads.net/@sceeaot"
              className="flex justify-center items-center rounded-md" target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/threads.jpg"
                alt="Threads"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-contain"
              />
            </a>
            </td>
            <td className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border-l-[0.5px] border-t-[0.5px] border-gray-500 text-xs font-semibold">
            <a
              href="https://whatsapp.com"
              className="flex justify-center items-center rounded-md" target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/whatsapp.jpg"
                alt="WhatsApp"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] object-contain"
              />
            </a>
            </td>
          </tr>
        </tbody>
      </table>
          </div>
        </header>
  )
}

export default Header;
