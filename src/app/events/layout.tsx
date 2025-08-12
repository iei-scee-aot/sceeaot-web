import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events & Activities",
  description:
    "Discover upcoming and past events organized by SCEE AOT - Students Chapter of Electrical Engineering at Academy of Technology. Join technical workshops, seminars, competitions, and networking sessions in electrical engineering.",
  keywords: [
    "SCEE AOT events",
    "electrical engineering events",
    "technical workshops",
    "engineering seminars",
    "student competitions",
    "Academy of Technology events",
    "engineering conferences",
    "student activities",
    "technical sessions",
    "industry talks",
    "research presentations",
    "networking events",
  ],
  authors: [{ name: "IEI Students Chapter - SCEE" }],
  creator: "IEI Students Chapter - SCEE",
  publisher: "IEI Students Chapter - SCEE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sceeaot.in/events",
  },
};

const EventsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default EventsLayout;
