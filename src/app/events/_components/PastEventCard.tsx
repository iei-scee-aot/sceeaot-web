import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  imageSrc: string;
  title: string;
  status: string;
  date: string;
  mode: string;
  fees: string;
  teamSize: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
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
    <div className=" mb-4 border border-gray-500 border-[0.5px] overflow-hidden bg-[#000000] w-[18rem] border-t-0 border-r-0 border-l-0">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${title} Event`}
          width={200}
          height={200}
          className="w-[200px] h-[200px]"
        />
        {/* Yellow box reduced to touch image boundaries */}
        <div className="absolute bottom-0 right-0 w-[88px] h-[50px] bg-[#fec20c] text-black py-[0.6rem] px-[0.5rem] flex flex-col items-start text-[12px] font-semibold hover:bg-[#fec20c]/90 transition-all duration-300 z-10">
          <span className="leading-none">VIEW</span>
          <span className="leading-none">GALLERY</span>
          <ArrowRight size={12} className=" animate-float" />
        </div>
      </div>

      <div className="p-3 border border-gray-500 border-[0.5px] border-t-0">
        <div className="flex justify-between items-center mb-0 border border-t-0 border-gray-500 border-[0.5px] mx-[-16px] px-4">
          <h3 className="text-lg pb-2" style={{ fontFamily: "'KMR Apparat1', sans-serif" }}>
            {title}
          </h3>
          <div className="pb-3">
            <Image src="/closed.png" alt="Status Icon" width={70} height={40} />
          </div>
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
  );
};

export default EventCard;
