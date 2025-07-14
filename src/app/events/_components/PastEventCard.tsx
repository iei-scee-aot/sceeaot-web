import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PastEventCardProps {
  imageSrc: string;
  title: string;
  status: string;
  date: string;
  mode: string;
  fees: string;
  teamSize: string;
  description: string;
}

const PastEventCard: React.FC<PastEventCardProps> = ({
  imageSrc,
  title,
  // status,
  date,
  mode,
  fees,
  teamSize,
  description,
}) => {
  return (
    <div>
      {/* -------- Mobile Layout (up to lg) -------- */}
      <div className="xl:hidden mb-4 overflow-hidden bg-[#000000] w-[20rem]">
        <div className="relative">
          <Image
            src={imageSrc}
            alt={`${title} Event`}
            width={225}
            height={225}
            className="w-[225px] h-[225px] border-gray-500 border-[0.5px]"
          />
          <div className="absolute bottom-0 right-0 w-[88px] h-[50px] bg-[#fec20c] text-black py-[0.6rem] px-[0.5rem] flex flex-col items-start text-[12px] font-semibold hover:bg-[#fec20c]/90 transition-all duration-300 z-10">
            <span className="leading-none">VIEW</span>
            <span className="leading-none">GALLERY</span>
            <ArrowRight size={11} className="animate-float" />
          </div>
        </div>

        <div className="p-3 border border-gray-500 border-t-0.5">
          <div className="flex justify-between items-center border-gray-500 mx-[-16px] px-4 mb-2">
            <h3 className="text-lg " style={{ fontFamily: "'KMR Apparat1', sans-serif" }}>
              {title}
            </h3>
           
              <Image src="/closed.png" alt="Status Icon" width={70} height={40} />
            
          </div>

          <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
            <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Date</div>
            <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{date}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
            <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Mode</div>
            <div className="p-2 border-r border-gray-500 border-[0.5px] text-yellow-500 flex items-center justify-center font-pxg">{mode}</div>
            <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Registration Fees</div>
            <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{fees}</div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
            <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Team Size</div>
            <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{teamSize}</div>
          </div>

          <p className="text-xs text-[#f6f6f4] mt-2 font-pxg">{description}</p>
        </div>
      </div>

      {/* -------- XL and 2XL Layout -------- */}
      <div className="hidden xl:flex mb-2 w-full max-w-[26rem] 2xl:max-w-[34rem] mx-auto border border-gray-500 rounded-xl shadow-lg p-3 flex-col" style={{ background: "transparent" }}>
        {/* PNG at top center */}
        <div className="w-full flex justify-center items-center mb-2">
          <Image
            src="/closed.png"
            alt="Status Icon"
            width={64}
            height={32}
            sizes="100vw"
            className="w-[4rem] h-[2rem] 2xl:w-[5rem] 2xl:h-[2.5rem] object-contain"
          />
        </div>
        <div className="flex w-full flex-row gap-4">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-[9rem] h-[9rem] 2xl:w-[12rem] 2xl:h-[12rem] flex flex-col items-center">
            <Image
              src={imageSrc}
              alt={`${title} Event`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full border-gray-500 border-[0.5px] object-cover rounded-lg"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div
              className="
                mt-2
                w-full
                h-[2.2rem] 2xl:h-[2.8rem]  
                bg-[#fec20c] text-black
                py-[0.2rem] px-[0.15rem]
                2xl:py-[0.3rem] 2xl:px-[0.25rem]
                flex items-center justify-center
                text-[0.5rem] 2xl:text-[0.65rem]
                font-semibold hover:bg-[#fec20c]/90 transition-all duration-300 z-10 rounded-md
                gap-1 2xl:gap-2 text-center
              "
            >
              <span className="leading-none flex items-center gap-1">
                VIEW GALLERY
                <ArrowRight size={10} className="animate-float ml-1" />
              </span>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex-1 min-w-0 flex flex-col p-0 2xl:p-2 border-l border-gray-500 border-[0.5px] h-auto min-h-[8rem] 2xl:min-h-[10rem]">
            <div className="flex justify-center items-center mb-2 border-gray-500 px-2">
              <h3
                className="text-lg 2xl:text-2xl font-semibold pt-1 pb-1 text-center w-full"
                style={{ fontFamily: "'KMR Apparat1', sans-serif" }}
              >
                {title}
              </h3>
            </div>
            {/* Date */}
            <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs 2xl:text-sm">
              <div className="p-1 2xl:p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
                Date
              </div>
              <div className="p-1 2xl:p-2 text-yellow-500 flex items-center justify-center font-pxg">
                {date}
              </div>
            </div>

            {/* Mode + Fees */}
            <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-gray-500 border-[0.5px] text-xs 2xl:text-sm">
              <div className="p-1 2xl:p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
                Mode
              </div>
              <div className="p-1 2xl:p-2 border-r border-gray-500 border-[0.5px] text-yellow-500 flex items-center justify-center font-pxg">
                {mode}
              </div>
              <div className="p-1 2xl:p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
                Registration Fees
              </div>
              <div className="p-1 2xl:p-2 text-yellow-500 flex items-center justify-center font-pxg">
                {fees}
              </div>
            </div>

            {/* Team Size */}
            <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs 2xl:text-sm">
              <div className="p-1 2xl:p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
                Team Size
              </div>
              <div className="p-1 2xl:p-2 text-yellow-500 flex items-center justify-center font-pxg">
                {teamSize}
              </div>
            </div>
          </div>
        </div>
        {/* Description box below */}
        <div className="mt-4 2xl:mt-6 border border-gray-500 rounded-md p-2 2xl:p-4 w-full" style={{ background: "transparent" }}>
          <p className="text-xs 2xl:text-sm leading-normal 2xl:leading-relaxed text-[#f6f6f4] font-pxg break-words m-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
