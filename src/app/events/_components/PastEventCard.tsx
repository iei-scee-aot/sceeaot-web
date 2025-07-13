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
  status,
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
      <div className="hidden xl:flex mb-4 w-full bg-[#181818] border border-gray-500 rounded-xl shadow-lg p-6 2xl:p-8 xl:min-h-[480px] flex-col">
        <div className="flex w-full flex-row">
          {/* Image Section */}
          <div className="relative xl:w-[220px] xl:h-[320px] 2xl:w-[500px] 2xl:h-[400px] flex-shrink-0">
            <Image
              src={imageSrc}
              alt={`${title} Event`}
              width={500}
              height={400}
              className="w-full h-full border-gray-500 border-[0.5px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 right-0 w-[70px] h-[40px] 2xl:w-[120px] 2xl:h-[60px] bg-[#fec20c] text-black py-[0.4rem] px-[0.3rem] 2xl:py-[0.8rem] 2xl:px-[0.7rem] flex flex-col items-start text-[10px] 2xl:text-[14px] font-semibold hover:bg-[#fec20c]/90 transition-all duration-300 z-10 rounded-md">
              <span className="leading-none">VIEW</span>
              <span className="leading-none">GALLERY</span>
              <ArrowRight size={14} className="animate-float" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col p-4 2xl:p-6 border-l border-gray-500 border-[0.5px]">
  <div className="flex justify-between items-center mb-2 border border-t-1 border-gray-500 mx-[-8px] px-3">
    <h3 className="text-xl 2xl:text-3xl font-semibold pb-2" style={{ fontFamily: "'KMR Apparat1', sans-serif" }}>
      {title}
    </h3>
    <Image
      src="/closed.png"
      alt="Status Icon"
      width={100}
      height={60}
      className="w-[60px] h-[36px] 2xl:w-[100px] 2xl:h-[60px]"
    />
  </div>

          {/* Date */}
          <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-sm 2xl:text-base ml-[-8px] mr-[-8px]">
            <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
              Date
            </div>
            <div className=" text-yellow-500 flex items-center justify-center font-pxg">
              {date}
            </div>
          </div>

          {/* Mode + Fees */}
          <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-gray-500 border-[0.5px] text-sm 2xl:text-base ml-[-8px] mr-[-8px]">
            <div className="p-3 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
              Mode
            </div>
            <div className="p-3 border-r border-gray-500 border-[0.5px] text-yellow-500 flex items-center justify-center font-pxg">
              {mode}
            </div>
            <div className="p-3 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
              Registration Fees
            </div>
            <div className="p-3 text-yellow-500 flex items-center justify-center font-pxg">
              {fees}
            </div>
          </div>

          {/* Team Size */}
          <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-sm 2xl:text-base ml-[-8px] mr-[-8px]">
            <div className="p-3 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
              Team Size
            </div>
            <div className="p-3 text-yellow-500 flex items-center justify-center font-pxg">
              {teamSize}
            </div>
          </div>
        </div>

          
        </div>
        {/* Description box below */}
        <div className="mt-4 2xl:mt-6 bg-[#232323] border border-gray-500 rounded-md p-4 2xl:p-6 w-full">
          <p className="text-[12px] 2xl:text-base leading-normal 2xl:leading-relaxed text-[#f6f6f4] font-pxg break-words m-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
