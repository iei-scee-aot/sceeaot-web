import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] border-gray-500 border-l-[0.5px] border-r-[0.5px]">
        <div className="py-6 px-6 md:px-32 border-t border-[#747474]/30">
          <div className="flex justify-between items-center ">
            <div className="relative h-20 w-28 md:w-44 md:h-32">
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
              <span className="text-[0.5rem] md:text-[1rem] mt-3 text-[#747474] ">
                Follow us on our socials
              </span>

              {/* Linktree icon + /sceeaot in a row */}
              <Link
                href="https://linktr.ee/sceeaot"
                className="flex justify-center text-center items-center gap-1"
              >
                <Image
                  src="/linktree.jpg"
                  alt="Linktree"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xl md:text-3xl text-[#747474]">
                  /sceeaot
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[#747474] md:text-lg text-sm mb-2 lg:mb-4">
              Have something in mind?
            </p>
            <Link
              href="mailto:sceeaot@gmail.com"
              className="flex flex-row items-center justify-center text-center mx-auto lg:mx-0 text-[2.9rem] md:text-[3rem] xl:text-[4rem] lg:text-[3.5rem] font-semibold font-pxg group gap-3"
            >
              <span className="whitespace-nowrap">Contact us</span>
              <ArrowUpRight
                size={50}
                className="ml-4 mt-2 md:ml-7 md:scale-[230%] lg:scale-[250%] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </footer>
      <div className="w-screen border-gray-500 border-b-[0.5px]"></div>
    </>
  );
};

export default Footer;
