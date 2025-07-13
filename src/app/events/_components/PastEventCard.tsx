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
    <div className="mb-4 overflow-hidden bg-[#000000] w-[20rem] lg:w-full lg:flex lg:h-[400px]">
      {/* Image Section */}
      <div className="relative lg:w-[500px] lg:flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${title} Event`}
          width={225}
          height={225}
          className="w-[225px] h-[225px] lg:w-[500px] lg:h-[400px] border-gray-500 border-[0.5px] object-cover"
        />
        {/* Yellow box */}
        <div className="absolute bottom-0 right-0 w-[88px] h-[50px] lg:w-[120px] lg:h-[60px] bg-[#fec20c] text-black py-[0.6rem] px-[0.5rem] lg:py-[0.8rem] lg:px-[0.7rem] flex flex-col items-start text-[12px] lg:text-[14px] font-semibold hover:bg-[#fec20c]/90 transition-all duration-300 z-10">
          <span className="leading-none">VIEW</span>
          <span className="leading-none">GALLERY</span>
          <ArrowRight size={11} className="lg:size-[14] animate-float" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 lg:p-6 lg:flex-1 border-gray-500 border-[0.5px] border-t-0.5 lg:border-t-[0.5px] lg:border-l-0 lg:flex lg:flex-col lg:justify-between">
        <div className="flex justify-between items-center mb-0 border border-t-0 lg:border-t border-gray-500 mx-[-16px] lg:mx-[-24px] px-4 lg:px-6">
          <h3 className="text-lg lg:text-3xl pb-2 lg:pb-4" style={{ fontFamily: "'KMR Apparat1', sans-serif" }}>
            {title}
          </h3>
          <div className="pb-3">
            <Image src="/closed.png" alt="Status Icon" width={70} height={40} className="lg:w-[100px] lg:h-[60px]" />
          </div>
        </div>

        <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
          <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs lg:text-base ml-[-16px] mr-[-16px] lg:ml-[-24px] lg:mr-[-24px]">
            <div className="p-2 lg:p-4 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Date</div>
            <div className="p-2 lg:p-4 text-yellow-500 flex items-center justify-center font-pxg">{date}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-gray-500 border-[0.5px] text-xs lg:text-base ml-[-16px] mr-[-16px] lg:ml-[-24px] lg:mr-[-24px]">
            <div className="p-2 lg:p-4 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Mode</div>
            <div className="p-2 lg:p-4 border-r border-gray-500 border-[0.5px] text-yellow-500 flex items-center justify-center font-pxg">{mode}</div>
            <div className="p-2 lg:p-4 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Registration Fees</div>
            <div className="p-2 lg:p-4 text-yellow-500 flex items-center justify-center font-pxg">{fees}</div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] text-xs lg:text-base ml-[-16px] mr-[-16px] lg:ml-[-24px] lg:mr-[-24px]">
            <div className="p-2 lg:p-4 border-r border-b border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">Team Size</div>
            <div className="p-2 lg:p-4 border-b border-gray-500 border-[0.5px] text-yellow-500 flex items-center justify-center font-pxg">{teamSize}</div>
          </div>

          <p className="text-xs lg:text-base text-[#f6f6f4] mt-2 lg:mt-4 font-pxg lg:leading-relaxed lg:px-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
