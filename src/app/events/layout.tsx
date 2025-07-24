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
  //   openGraph: {
  //     title: "Events & Activities - SCEE AOT",
  //     description:
  //       "Discover upcoming and past events organized by SCEE AOT - Students Chapter of Electrical Engineering at Academy of Technology.",
  //     url: "https://sceeaot.in/events", // Replace with your actual domain
  //     images: [
  //       {
  //         url: "/events-og-image.jpg",
  //         width: 1200,
  //         height: 630,
  //         alt: "SCEE AOT Events - Students Chapter of Electrical Engineering",
  //       },
  //     ],
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: "Events & Activities - SCEE AOT",
  //     description:
  //       "Discover upcoming and past events organized by SCEE AOT - Students Chapter of Electrical Engineering.",
  //     images: ["/events-twitter-image.jpg"],
  //   },
  alternates: {
    canonical: "https://sceeaot.in/events", // Replace with your actual domain
  },
};

const EventsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default EventsLayout;
