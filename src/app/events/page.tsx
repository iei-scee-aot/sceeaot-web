"use client";

import Headlines from "@/components/Headlines";
import Divider2 from "@/components/ui/Divider2";
import EventCard from "@/components/ui/EventCard";
import eventsData from "../../../public/events.json";

export default function EventsPage() {
  const { pastEvents } = eventsData;

  return (
    <>
      <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
        {/* Ongoing Events Section */}
        <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Ongoing Events" />
          </div>
          <div className="flex flex-wrap gap-[0.4375rem] justify-center items-stretch py-[14.0625rem] text-sm lg:text-2xl font-pxg min-h-[23.5rem]">
            No ongoing events...
          </div>
        </div>
        <Divider2 />

        {/* Past Events Section */}
        <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Past Events" />
          </div>

          {/* Updated container with proper centering */}
          <div className="grid grid-cols-1 gap-8 px-4 lg:px-8 py-8 lg:py-12 place-items-center">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                imageSrc={event.imageSrc}
                title={event.title}
                status={event.status}
                date={event.date}
                mode={event.mode}
                fees={event.fees}
                teamSize={event.teamSize}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
