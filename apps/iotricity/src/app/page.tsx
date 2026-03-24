import About from "@/components/home/About";
import Cinematics from "@/components/home/Cinematics";
import CountdownSection from "@/components/home/CountdownSection";
import HeroSection from "@/components/home/HeroSection";
import MentorSection from "@/components/home/MentorSection";
import Timeline from "@/components/home/Timeline";
import Accordion from "@/components/ui/Accordion";
import Headlines from "@/components/ui/Headlines";
import { eventMentors, faqData } from "../../constants";
import PrizeSection from "@/components/home/PrizeSection";
import TracSection from "@/components/home/TracSection";
import SponsorSection from "@/components/home/SponsorSection";

const HomePage = () => {
  const isMentorsVisible = eventMentors.length > 0 ? true : false;
  const hasTrackPrizes = false;
  const hasSponsors = true;

  return (
    <>
      {/* Main Content */}
      <div>
        {/* Modern Hero Section */}
        <HeroSection />

        {/* About IOTricity */}
        <About />

        {/* Post Event Cinematics Section */}
        <Cinematics />

        {/* Countdown Section */}
        <CountdownSection />

        {/* Event Timeline Section */}
        <Timeline />

        {/* Mentors Section */}
        {isMentorsVisible && <MentorSection mentors={eventMentors} />}

        {/* Event Tracks Section */}
        {hasTrackPrizes && <TracSection />}

        {/* Event Prizes Section */}
        <PrizeSection />

        {/* Sponsors Section */}
        {hasSponsors && <SponsorSection />}

        {/* FAQ Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="IOTricity FAQs" />
          </div>
            <Accordion items={faqData} allowMultipleOpen />
        </div>
      </div>
    </>
  );
};

export default HomePage;
