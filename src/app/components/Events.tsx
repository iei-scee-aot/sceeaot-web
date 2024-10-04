import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import ticket from "@/assets/icons/ticket-icon.png";

const Events = () => {
  return (
    <div className="m-10 mr-20 ml-20 h-80 border border-gray-300 border-dashed rounded-lg flex flex-col justify-between p-5">
      <div className="flex h-5 items-center">
        <Image src={ticket} alt="ticket" width={30} />
        <h2 className="ml-2 font-bold text-lg">Ongoing Events</h2>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h2>We are currently cooking, let us cook...</h2>
      </div>
      <div className="flex justify-end">
        <Button>View All Events</Button>
      </div>
    </div>
  );
};

export default Events;
