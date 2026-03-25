"use client";

import Countdown from "@/components/iotricity/Countdown";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import SlideShow from "@/components/ui/SlideShow";
import {
  ArrowRight,
  Award,
  BookOpen,
  ExternalLink,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  faqs: FAQ[];
  metadata: {
    lastUpdated: string;
    organization: string;
    contact: string;
  };
}

interface Event {
  id: string;
  title: string;
  status: string;
  date: string;
  registrationStartDate: string;
  registrationEndDate: string;
  eventStartDate: string;
  eventEndDate: string;
  registrationDeadline: string;
  mode: string;
  fees: string;
  teamSize: string;
  description: string;
  gallery: string;
  imageSrc: string;
  registrationLink?: string;
  detailsLink?: string;
}

interface EventsData {
  futureEvents: Event[];
  ongoingEvents: Event[];
  pastEvents: Event[];
}

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [faqLoading, setFaqLoading] = useState(true);
  const [faqError, setFaqError] = useState<string | null>(null);
  const [eventsData, setEventsData] = useState<EventsData | null>(null);
  const [visibleEvent, setVisibleEvent] = useState<Event | null>(null);

  // Helper function to check if event is within visibility window (10 days before, during, and 10 days after)
  const isEventVisible = (event: Event, checkDate: Date): boolean => {
    const regStartMs = new Date(event.registrationStartDate).getTime();
    const eventEndMs = new Date(event.eventEndDate).getTime();
    const checkDateMs = checkDate.getTime();

    const visibilityWindowMs = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds

    // Calculate visibility boundaries - start from 5 days before registration (for teaser)
    const visibilityStartMs = regStartMs - 5 * 24 * 60 * 60 * 1000; // 5 days before registration for teaser
    const visibilityEndMs = eventEndMs + visibilityWindowMs; // 10 days after event ends

    return checkDateMs >= visibilityStartMs && checkDateMs <= visibilityEndMs;
  };

  // Get the most relevant visible event
  const getVisibleEvent = (
    allEvents: EventsData,
    checkDate: Date,
  ): Event | null => {
    const allEventsArray = [
      ...allEvents.futureEvents,
      ...allEvents.ongoingEvents,
    ];

    // Find event where current date falls within visibility window
    const visible = allEventsArray.find((event) =>
      isEventVisible(event, checkDate),
    );
    return visible || null;
  };

  // Check if there are consecutive events in same month
  const hasConsecutiveEventsInMonth = (
    allEvents: EventsData,
    checkDate: Date,
  ): boolean => {
    const currentMonth = checkDate.getMonth();
    const currentYear = checkDate.getFullYear();

    const eventsInMonth = [
      ...allEvents.futureEvents,
      ...allEvents.ongoingEvents,
    ].filter((event) => {
      const eventDate = new Date(event.eventStartDate);
      return (
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });

    return eventsInMonth.length > 1;
  };

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json");
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data: EventsData = await response.json();
        setEventsData(data);

        // Set visible event based on current date
        if (currentDate) {
          const visible = getVisibleEvent(data, currentDate);
          setVisibleEvent(visible);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    if (currentDate) {
      fetchEvents();
    }
  }, [currentDate]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setFaqLoading(true);
        const response = await fetch("/data/faq.json");

        if (!response.ok) {
          console.error(
            "Response not OK:",
            response.status,
            response.statusText,
          );
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("Invalid content type:", contentType);
          const text = await response.text();
          console.error("Response body:", text.substring(0, 200));
          throw new Error(`Expected JSON but received: ${contentType}`);
        }

        const data: FAQData = await response.json();
        setFaqData(data.faqs);
        setFaqError(null);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        setFaqError(err instanceof Error ? err.message : "Failed to load FAQs");
      } finally {
        setFaqLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Date checks based on visible event (using milliseconds for timezone safety)
  const isRegistrationComing =
    visibleEvent && currentDate
      ? (() => {
          const regStartMs = new Date(
            visibleEvent.registrationStartDate,
          ).getTime();
          const fiveDaysBeforeMs = regStartMs - 5 * 24 * 60 * 60 * 1000;
          const currentMs = currentDate.getTime();
          return currentMs >= fiveDaysBeforeMs && currentMs < regStartMs;
        })()
      : false;

  const isRegistrationActive =
    visibleEvent && currentDate
      ? currentDate.getTime() >=
          new Date(visibleEvent.registrationStartDate).getTime() &&
        currentDate.getTime() <=
          new Date(visibleEvent.registrationEndDate).getTime()
      : false;

  const isRegistrationClosed =
    visibleEvent && currentDate
      ? currentDate.getTime() >
          new Date(visibleEvent.registrationEndDate).getTime() &&
        currentDate.getTime() < new Date(visibleEvent.eventStartDate).getTime()
      : false;

  const isEventOngoing =
    visibleEvent && currentDate
      ? currentDate.getTime() >=
          new Date(visibleEvent.eventStartDate).getTime() &&
        currentDate.getTime() <= new Date(visibleEvent.eventEndDate).getTime()
      : false;

  const isEventConcluded =
    visibleEvent && currentDate
      ? currentDate.getTime() > new Date(visibleEvent.eventEndDate).getTime()
      : false;

  const hasConsecutiveEvents =
    eventsData && currentDate
      ? hasConsecutiveEventsInMonth(eventsData, currentDate)
      : false;

  return (
    <>
      {/* Main Content */}
      <div>
        {/* Modern Hero Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFBE00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Main Hero Content */}
          <div className="relative px-4 lg:px-8 py-16 lg:py-24">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Zap size={16} className="text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    Innovation • Engineering • Excellence
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    <span className="block text-secondary">Welcome to the</span>
                    <span className="block bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                      IEI Students' Chapter
                    </span>
                    <span className="block text-secondary text-3xl lg:text-4xl xl:text-5xl mt-2 font-light">
                      of Electrical Engineering
                    </span>
                  </h1>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    <span className="text-lg lg:text-xl font-medium text-primary">
                      Academy of Technology
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Join us in exploring the world of electrical engineering
                  through
                  <span className="text-primary font-medium">
                    {" "}
                    hands-on workshops
                  </span>
                  ,
                  <span className="text-primary font-medium">
                    {" "}
                    competitions
                  </span>
                  , and
                  <span className="text-primary font-medium">
                    {" "}
                    networking opportunities
                  </span>
                  .
                </p>
              </div>

              {/* Right Content - Visual Element */}
              <div className="relative lg:h-[600px] flex items-center justify-center">
                {/* Main Visual Container */}
                <div className="relative w-full max-w-md lg:max-w-lg">
                  {/* Floating Cards */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Card 1 - Top Left */}
                    <div className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl backdrop-blur-sm transform -rotate-12 animate-float">
                      <div className="flex items-center justify-center h-full">
                        <Zap size={32} className="text-primary" />
                      </div>
                    </div>

                    {/* Card 2 - Top Right */}
                    <div
                      className="absolute top-16 right-0 w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/30 rounded-xl backdrop-blur-sm transform rotate-12 animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Award size={24} className="text-yellow-400" />
                      </div>
                    </div>

                    {/* Card 3 - Bottom Left */}
                    <div
                      className="absolute bottom-16 left-8 w-28 h-20 lg:w-36 lg:h-24 bg-gradient-to-br from-blue-400/20 to-transparent border border-blue-400/30 rounded-xl backdrop-blur-sm transform rotate-6 animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <BookOpen size={24} className="text-blue-400" />
                      </div>
                    </div>

                    {/* Card 4 - Bottom Right */}
                    <div
                      className="absolute bottom-0 right-8 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-green-400/20 to-transparent border border-green-400/30 rounded-xl backdrop-blur-sm transform -rotate-6 animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Users size={28} className="text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Central Logo/Image */}
                  <div className="relative z-10 mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-yellow-400/10 border border-primary/20 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                      <Image
                        src="/scee_logo.png"
                        alt="SCEE Logo"
                        fill
                        className="object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider2 />

        {/*Live Events*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="Live Events" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                Live
                <br />
                Events
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <Link href="/events">
                <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300 cursor-pointer">
                  <span className="lg:block">EVENTS</span>
                  <ArrowRight
                    size={14}
                    className="animate-float lg:mt-1 lg:size-[19px]"
                  />
                </div>
              </Link>
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Campus GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed">
            {!visibleEvent ? (
              /* No Active Event */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
                <div className="mb-8">
                  <h3
                    className="text-2xl lg:text-4xl font-bold text-primary mb-4"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    Stay Tuned!
                  </h3>
                  <p className="text-base lg:text-xl text-secondary/80">
                    Exciting events are coming soon! Check back for updates on
                    upcoming events.
                  </p>
                </div>
              </div>
            ) : isRegistrationComing ? (
              /* Registration Coming - 5 days before registration opens */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
                <div className="mb-8 space-y-6">
                  <h3
                    className="text-4xl lg:text-6xl font-bold text-primary"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    {visibleEvent.title}
                  </h3>
                  <p className="text-base lg:text-xl text-secondary/80 max-w-2xl mx-auto">
                    Something amazing is coming. Registration opens soon!
                  </p>
                </div>
              </div>
            ) : isRegistrationActive ? (
              /* Registration Active */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem]">
                <div className="mb-8 text-center">
                  <h2 className="text-xl lg:text-2xl font-bold text-primary mb-2">
                    Registration Open for {visibleEvent.title}
                  </h2>
                  <p className="text-sm lg:text-lg text-secondary">
                    Don't miss out! Register now before slots are filled.
                  </p>
                </div>

                <div className="w-full flex justify-center mb-8">
                  <Countdown
                    targetDate={new Date(visibleEvent.registrationEndDate)}
                    eventName={`Registration for ${visibleEvent.title}`}
                    eventEndDate={new Date(visibleEvent.registrationEndDate)}
                    scheduleDataPath="/data/hackathon-schedule.json"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
                  {visibleEvent.registrationLink && (
                    <Link
                      href={visibleEvent.registrationLink}
                      className="w-full sm:w-auto"
                    >
                      <Button variant="primary" icon={<Users size={18} />}>
                        Register Now
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  )}
                  {visibleEvent.detailsLink && (
                    <Link
                      href={visibleEvent.detailsLink}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="secondary"
                        icon={<ExternalLink size={18} />}
                      >
                        View Details
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ) : isRegistrationClosed ? (
              /* Registration Closed - Countdown to Event */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem]">
                <div className="mb-8 text-center">
                  <h2 className="text-xl lg:text-2xl font-bold text-red-500 mb-2">
                    🔒 Registration Closed
                  </h2>
                  <p className="text-sm lg:text-lg text-secondary">
                    {visibleEvent.title} event is coming up! Get ready for the
                    action.
                  </p>
                </div>

                <div className="w-full flex justify-center mb-8">
                  <Countdown
                    targetDate={new Date(visibleEvent.eventStartDate)}
                    eventName={`${visibleEvent.title} Event Starts In`}
                    eventEndDate={new Date(visibleEvent.eventEndDate)}
                    scheduleDataPath="/data/hackathon-schedule.json"
                  />
                </div>

                {/* Details Button */}
                <div className="flex justify-center">
                  {visibleEvent.detailsLink && (
                    <Link
                      href={visibleEvent.detailsLink}
                      className="w-full sm:w-auto max-w-xs"
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        icon={<ExternalLink size={20} />}
                        className="justify-center"
                      >
                        View Event Details
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ) : isEventOngoing ? (
              /* Event is Happening Now */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
                <div className="mb-8">
                  <h3
                    className="text-2xl lg:text-4xl font-bold text-primary mb-4"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    🎪 Event is Live!
                  </h3>
                  <p className="text-base lg:text-xl text-secondary/80">
                    {visibleEvent.title} is happening right now! Join the
                    action.
                  </p>
                </div>

                {/* Details Button */}
                <div className="flex justify-center">
                  {visibleEvent.detailsLink && (
                    <Link
                      href={visibleEvent.detailsLink}
                      className="w-full sm:w-auto max-w-xs"
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        icon={<ExternalLink size={20} />}
                        className="justify-center"
                      >
                        Join Event
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ) : isEventConcluded ? (
              /* Event Concluded */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
                <div className="mb-8">
                  <h3
                    className="text-2xl lg:text-4xl font-bold text-primary mb-4"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    🎉 {visibleEvent.title} Concluded! 🎉
                  </h3>
                  <p className="text-base lg:text-xl text-secondary/80">
                    Thank you for participating! See you at the next event.
                    {hasConsecutiveEvents && <br />}
                    {hasConsecutiveEvents &&
                      "Check out our upcoming events this month!"}
                  </p>
                </div>

                {/* Details Button */}
                <div className="flex justify-center">
                  <Link
                    href={visibleEvent.detailsLink || "#"}
                    className="w-full sm:w-auto max-w-xs"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<ExternalLink size={20} />}
                      className="justify-center"
                    >
                      View Event Details
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Divider2 />

        {/*About us*/}
        <div
          id="About-Us"
          className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
        >
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="About Us" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                About
                <br />
                us
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <Link href="/team">
                <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300">
                  <span className="lg:text-center">TEAM</span>
                  <span className="hidden lg:block"></span>
                  <ArrowRight
                    size={14}
                    className="animate-float lg:mt-1 lg:size-[19px]"
                  />
                </div>
              </Link>
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Campus GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="px-[1.40625rem] lg:px-8 py-[1.40625rem] lg:py-8 text-[10.5px] lg:text-[1.2rem] font-light leading-relaxed font-pxg text-left lg:text-center">
            Welcome to the IEI Students&apos; Chapter of Electrical Engineering!
            We may be the newest community on the block, but we&apos;re
            definitely the most energetic and driven one.
            <br />
            <br />
            Our mission is to create a space where students can dive into both
            core and non-core topics, learn new skills, and push the limits of
            what they can achieve. We organize everything from hands-on
            workshops and ideathons to competitions and brainstorming sessions,
            all designed to spark creativity and innovation.
            <br />
            <br />
            It&apos;s not just about textbooks here - it&apos;s about real-world
            experiences and connecting with others who share the same passion
            for engineering.
            <br />
            <br />
            So, if you&apos;re looking to learn, grow, and have a ton of fun,
            join us on this exciting journey! We can&apos;t wait to see what we
            can achieve together.
          </div>

          {/* Team Image */}
          <SlideShow
            images={[
              "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rhlcdh5oLMNJOCXnKiHD7Ua35Ww8EVepuQtP4Z",
              "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rh7D2j2poSLNVmr9d45kJMsPpqcKHlEyWRwIO2"
            ]}
          />
          {/* <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4 lg:mt-0">
            <Image
              src={
                "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rhlcdh5oLMNJOCXnKiHD7Ua35Ww8EVepuQtP4Z"
              }
              alt="About Us"
              loading="lazy"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute inset-0 bg-gradient-to-b to-black/65 from-transparent"></div>
          </div> */}
        </div>
        <Divider2 />

        {/* HOD's Desk */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="From The HOD's Desk" />
          </div>
          <div className="flex gap-2 lg:gap-10 items-center py-[1.9375rem] lg:py-[1.5rem] pl-[0.5rem] lg:pl-[2rem] pr-[0.5rem] lg:pr-[1rem] text-[9px] lg:text-[1rem] font-pxg tracking-tight leading-snug">
            <Image
              src={
                "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rh9cttxvAeQlUgIYx42MXEpDAwvuC5fqiKakHh"
              }
              loading="lazy"
              alt="HOD's PIC"
              width={135}
              height={135}
              className="border-2 rounded-md lg:w-[400px] lg:h-[400px]"
            />
            <p className="flex-1 font-light">
              <span className="font-bolder text-left text-primary">
                &quot;{" "}
              </span>
              Our department has created a platform to deliver strong
              fundamentals-based technical education. We strive to produce
              electrical engineers who are well suited for both industry and
              society.
              <br />
              <br className="hidden lg:block" />
              As HOD of this department, I endeavor to transform them into
              creators of technology with good human values and a commitment
              towards our nation.
              <span className="font-bolder text-left text-primary">
                {" "}
                &quot;
              </span>
              <br />
              <br className="hidden lg:block" />
              <span className="font-bolder text-left text-primary">
                {" "}
                - Prof. Sandip Saha Chowdhury
              </span>
              <br />
              <span className="font-bolder text-left text-grey italic">
                {" "}
                HOD, Department of Electrical Engineering
              </span>
            </p>
          </div>
        </div>

        <Divider2 />

        {/*FAQs*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="FAQs" />
          </div>
          {faqLoading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-lg">Loading FAQs...</p>
            </div>
          ) : faqError ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-lg text-red-400 mb-2">Failed to load FAQs</p>
                <p className="text-sm text-gray-400">{faqError}</p>
              </div>
            </div>
          ) : (
            <Accordion items={faqData} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
