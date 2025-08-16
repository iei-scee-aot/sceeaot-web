"use client";

import Divider2 from "@/components/ui/Divider";
import EventCard from "@/components/ui/EventCard";
import Headlines from "@/components/ui/Headlines";
import { useEffect, useState } from "react";

export default function EventsPage() {
  type Event = {
    id: string;
    imageSrc: string;
    title: string;
    status: string;
    date: string;
    mode: string;
    fees: string;
    teamSize: string;
    description: string;
  };

  const [futureEvents, setFutureEvents] = useState<Event[]>([]);
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/data/events.json");
        const data = await res.json();
        setFutureEvents(data.futureEvents || []);
        setOngoingEvents(data.ongoingEvents || []);
        setPastEvents(data.pastEvents || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setFutureEvents([]);
        setOngoingEvents([]);
        setPastEvents([]);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
        {/* Future Events Section */}
        {futureEvents.length > 0 ? (
          <>
            <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
              <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
                <Headlines headLine="Future Events" />
              </div>
              <div className="grid grid-cols-1 gap-8 px-4 lg:px-8 py-8 lg:py-12 place-items-center">
                {futureEvents.map((event) => (
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
            <Divider2 />
          </>
        ) : (
          <></>
        )}

        {/* Ongoing Events Section */}
        {ongoingEvents.length > 0 ? (
          <>
            <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
              <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
                <Headlines headLine="Ongoing Events" />
              </div>
              <div className="grid grid-cols-1 gap-8 px-4 lg:px-8 py-8 lg:py-12 place-items-center">
                {ongoingEvents.map((event) => (
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
            <Divider2 />
          </>
        ) : (
          <></>
        )}

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
