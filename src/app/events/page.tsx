"use client";

import eventsData from "../../../public/events.json";
import Divider from "../_components/Divider";
import Divider2 from "../_components/Divider2";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Headlines from "../_components/Headlines";
import Navbar from "../_components/Navbar";
import PastEventCard from "./_components/PastEventCard";

export default function EventsPage() {
  const { pastEvents } = eventsData;

  return (
    <>
      <div className="h-full border-gray-500 border-b-[0.5px] w-full mb-[29px] pb-[60px] lg:pb-0 font-pxg">
        <Divider />
        <Header />
        <Divider2 />
        <Navbar eventColor="#FEC20C" />
        <div className="w-full hidden lg:flex py-3 border-gray-500 border-b-[0.5px]"></div>

        <main className="relative flex flex-col mx-auto min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden">
          {/* Ongoing Events Section */}
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="Ongoing Events" />
            </div>
            <div className="flex flex-wrap gap-[0.4375rem] justify-center items-stretch py-[14.0625rem] text-sm lg:text-2xl font-pxg min-h-[23.5rem]">
              No ongoing events...
            </div>
          </div>
          <Divider2 />

          {/* Past Events Section */}
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine="Past Events" />
            </div>

            {/* Updated container with proper centering */}
            <div className="grid grid-cols-1 gap-8 px-4 lg:px-8 py-8 lg:py-12 place-items-center">
              {pastEvents.map((event) => (
                <PastEventCard
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

          {/* Footer */}
          <Footer />

          {/* Consistent bottom spacing */}
          <div className="py-10"></div>
        </main>
      </div>
    </>
  );
}
