import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] border-gray-500 border-l-[0.5px] border-r-[0.5px]">
          <div className="py-6 px-6 md:px-32 lg:px-6 lg:py-3 border-t border-[#747474]/30">
            <div className="flex justify-between items-center">
              <div className="relative h-12 w-16 md:w-24 md:h-16 lg:w-12 lg:h-10">
              <Image
                src="/scee_logo.jpg"
                alt="SCEE Logo"
                fill
                style={{ objectFit: "contain" }}
                className="object-contain"
              />
              </div>
              
              <div className="flex flex-col items-start">
                {/* This text goes above the icon + link */}
                <span className="text-[0.5rem] md:text-[1rem] lg:text-[1rem] mt-3 text-[#747474] ">
                  Follow us on our socials
                </span>

                {/* Linktree icon + /sceeaot in a row */}
                <Link
                 href="https://linktr.ee/sceeaot?fbclid=PAY2xjawJV8IdleHRuA2FlbQIxMQABpmwEJYsLFgEq1OaWdlXDp1uDruyZb1mJ8buyCqrcjtfVIrNUKddTQwfG_g_aem_-1VCGJMHI1fDe_dN92eGEw"
                 className="flex justify-center text-center items-center gap-1"
                >
                  <Image
                    src="/linktree.jpg"
                    alt="Linktree"
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 object-contain lg:w-4 lg:h-4"
                  />
                  <span className="text-xl md:text-3xl lg:text-xl text-[#747474]">/sceeaot</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-xl mx-auto">
              <p className="text-[#747474] text-sm md:text-lg lg:text-lg mb-2 lg:mb-3 text-center">
                Have something in mind?
              </p>
              <Link
                href="mailto:sceeaot@gmail.com"
                className="flex flex-col items-center justify-center text-center mx-auto text-[2rem] md:text-[2.2rem] lg:text-[2rem] xl:text-[2.2rem] font-semibold font-pxg group gap-2"
              >
                <span className="whitespace-nowrap">Contact us</span>
                <ArrowUpRight
                  size={26}
                  className="mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </div>
            
          </div>
        </footer>
         <div className="w-screen border-gray-500 border-b-[0.5px]"></div>
    </>
  )
}

export default Footer