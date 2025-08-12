import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <div className=" mb-4 overflow-hidden bg-background  flex  flex-col md:flex-row w-full">
      <div className="wrapper p-5 py-8 flex border-gray-500 border-[0.5px] md:w-2/5">
        <Image
          src={imageSrc}
          alt="Event Image"
          width={200}
          height={200}
          className="object-cover w-3/4 h-full"
        />
        <div className="w-1/4 z-10 flex flex-col justify-end items-start ">
          <svg
            className="scale-75"
            width="67"
            height="117"
            viewBox="0 0 67 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64 115.5C70.5001 95.5 57.1854 29.748 20.5229 47.653C-4.50805 59.8775 14.6244 86.813 41.4919 72.3775C68.3594 57.942 60.4699 6.3225 0.999947 11.3175M0.999947 11.3175L8.98344 20.3665M0.999947 11.3175L13.3359 1"
              stroke="#F6F6F4"
              strokeLinecap="square"
              strokeDasharray="4 4"
            />
          </svg>
          <div className=" bg-primary w-[100%] text-black py-[0.6rem] px-[0.5rem] flex flex-col items-start text-[12px] font-semibold hover:bg-primary/90 transition-all duration-300 z-10">
            <span className="leading-none">VIEW</span>
            <span className="leading-none">GALLERY</span>
            <ArrowRight size={11} className="mt-2 animate-float" />
          </div>
        </div>
      </div>

      <div className="p-3 border-gray-500 border-[0.5px] border-t-0.5 md:w-3/5">
        <div className="flex justify-between items-center mb-0 border-t-0 border-gray-500 border-[0.5px] mx-[-16px] px-4">
          <h3
            className="text-lg pb-2"
            style={{ fontFamily: "'KMR Apparat1', sans-serif" }}
          >
            {title}
          </h3>
          <div className="pb-3">
            <Image
              src="/images/closed.png"
              alt="Status Icon"
              width={70}
              height={40}
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
            Date
          </div>
          <div className="p-2 text-primary flex items-center justify-center font-pxg">
            {date}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
            Mode
          </div>
          <div className="p-2 border-r border-gray-500 border-[0.5px] text-primary flex items-center justify-center font-pxg">
            {mode}
          </div>
          <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
            Registration Fees
          </div>
          <div className="p-2 text-primary flex items-center justify-center font-pxg">
            {fees}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] border-b border-gray-500 border-[0.5px] text-xs ml-[-16px] mr-[-16px]">
          <div className="p-2 border-r border-gray-500 border-[0.5px] flex items-center justify-center font-pxg">
            Team Size
          </div>
          <div className="p-2 text-primary flex items-center justify-center font-pxg">
            {teamSize}
          </div>
        </div>

        <p className="text-xs text-secondary mt-2 font-pxg">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
