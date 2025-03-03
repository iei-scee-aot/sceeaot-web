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
    <div className="mt-0 mb-4 border border-white border-[#747474]/30  overflow-hidden bg-[#000000] w-[21.25rem] border-t-0 border-r-0 border-l-0">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${title} Event`}
          width={220}  // Reduced width
          height={220} // Reduced height
          className="w-[220] h-[220]"
        />
        <div className="absolute bottom-0 right-0 w-[35%] bg-[#fec20c] text-black py-1 px-3 flex flex-col items-start gap-0 text-sm font-semibold hover:bg-[#fec20c]/90 transition-all duration-300">

          <span>VIEW</span>
          <span>GALLERY</span>
          <ArrowRight size={14} className="animate-float" />
        </div>
      </div>

      <div className="p-3 border border-l-1 border-r-1 border-t-0 border-white">
        <div className="flex justify-between items-center mb-0 border border-t-0 border-white mx-[-16px] px-4">
          <h3 className="text-lg pb-2" style={{ fontFamily: "'KMR Apparat1', sans-serif" }}>{title}</h3>
          <div className="pb-3">
          <span>
            <Image src="/closed.png" alt="Status Icon" width={70} height={40} />
            {/*<span className="text-xs bg-[#f63538] px-2 py-1 rounded-full ">
            {status}
          </span>*/}
          </span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] border-b border-white text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-white flex items-center justify-center font-pxg">Date</div>
          <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{date}</div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-white text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-white flex items-center justify-center font-pxg">Mode</div>
          <div className="p-2 border-r border-white text-yellow-500 flex items-center justify-center font-pxg">{mode}</div>
          <div className="p-2 border-r border-white flex items-center justify-center font-pxg">Registration Fees</div>
          <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{fees}</div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] border-b border-white text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-white flex items-center justify-center font-pxg">Team Size</div>
          <div className="p-2 text-yellow-500 flex items-center justify-center font-pxg">{teamSize}</div>
        </div>

        <p className="text-xs text-[#f6f6f4] mt-2 font-pxg">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
