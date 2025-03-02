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
    <div className="mb-6 border border-white border-[#747474]/30 rounded-sm overflow-hidden bg-[#000000]">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${title} Event`}
          width={340}
          height={445}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 right-0 bg-[#fec20c] text-black py-2 px-4 flex flex-col items-start gap-1 font-semibold hover:bg-[#fec20c]/90 transition-all duration-300">
        <span>VIEW</span>
        <span>GALLERY</span>
        <ArrowRight size={16} className="animate-float" />
        </div>

      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-xs bg-[#f63538] px-2 py-1 rounded-full">
            {status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex justify-between border-b border-[#747474] py-1">
            <span className="text-[#747474]">Date</span>
            <span className="text-[#fec20c]">{date}</span>
          </div>
          <div className="flex justify-between border-b border-[#747474] py-1">
            <span className="text-[#747474]">Mode</span>
            <span className="text-[#fec20c]">{mode}</span>
          </div>
          <div className="flex justify-between border-b border-[#747474] py-1">
            <span className="text-[#747474]">Registration Fees</span>
            <span className="text-[#fec20c]">{fees}</span>
          </div>
          <div className="flex justify-between border-b border-[#747474] py-1">
            <span className="text-[#747474]">Team Size</span>
            <span className="text-[#fec20c]">{teamSize}</span>
          </div>
        </div>

        <p className="text-sm text-[#f6f6f4]">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
