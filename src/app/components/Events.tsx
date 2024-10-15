import { Button } from "@/components/ui/button";
import Image from "next/image";
import ticket from "@/assets/icons/ticket-icon.png";
import noodles from "@/assets/icons/noodles.png";

interface EventsProps {
  paddingHorizontal?: string;
}

const Events: React.FC<EventsProps> = ({ paddingHorizontal = '20px' }) => {
  return (
    <div
      className="mt-20 mx-auto rounded-3xl flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
      style={{ 
        backgroundColor: 'rgba(59, 60, 60, 0.75)', 
        width: 'calc(80% - 40px)',
        padding: `20px ${paddingHorizontal}`,
        height: 'auto',
      }} 
    >
      <div className="flex items-center mb-4">
        <Image src={ticket} alt="ticket" width={35} />
        <h2 className="ml-2 font-bold text-4xl">Ongoing Events</h2>
      </div>
      <div className="flex flex-col font-bold justify-center items-center text-center font-['Bubbler_One'] mb-4">
        <Image src={noodles} alt="Noodles" width={120} />
        <h1 className="text-5xl tracking-widest mt-2">We are cooking something special for you!</h1>
        <h1 className="text-5xl tracking-widest">STAY TUNED</h1>
      </div>
      <div className="flex justify-end">
        <Button className="bg-yellow-300 font-extrabold text-black hover:bg-white hover:text-black border border-black text-[1.5rem] px-8 py-5">
          View All Events
        </Button>
      </div>
    </div>
  );
};

export default Events;
