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
    <div className="mt-0 pt=0 mb-6 border border-white border-[#747474]/30 rounded-sm overflow-hidden bg-[#000000]">
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

        <div className="grid grid-cols-[1fr_2fr] border-b border-gray-700">
          {/* Date row */}
          <div className="p-3 border-r border-gray-700 font-semibold">Date</div>
          <div className="p-3 text-yellow-500">{date}</div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] border-b border-gray-700">
          {/* Mode + Registration Fees row */}
          <div className="p-3 border-r border-gray-700 font-semibold">Mode</div>
          <div className="p-3 border-r border-gray-700 text-yellow-500">
            {mode}
          </div>
          <div className="p-3 border-r border-gray-700 font-semibold">
            Registration Fees
          </div>
          <div className="p-3 text-yellow-500">{fees}</div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] border-b border-gray-700">
          {/* Team Size row */}
          <div className="p-3 border-r border-gray-700 font-semibold">
            Team Size
          </div>
          <div className="p-3 text-yellow-500">{teamSize}</div>
        </div>

        {/* Description row */}
        <p className="text-sm text-[#f6f6f4]">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
