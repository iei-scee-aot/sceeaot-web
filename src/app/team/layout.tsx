import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team members of SCEE AOT - Students Chapter of Electrical Engineering at Academy of Technology. Get to know our executive committee, faculty advisors, and student leaders driving innovation in electrical engineering.",
  keywords: [
    "SCEE AOT team",
    "electrical engineering team",
    "student leadership",
    "executive committee",
    "faculty advisors",
    "Academy of Technology team",
    "engineering students",
    "student chapter members",
    "AOT electrical department",
    "student organization leadership",
  ],
  //   openGraph: {
  //     title: "Our Team - SCEE AOT",
  //     description:
  //       "Meet the dedicated team members of SCEE AOT - Students Chapter of Electrical Engineering at Academy of Technology.",
  //     url: "https://sceeaot.in/team", // Replace with your actual domain
  //     images: [
  //       {
  //         url: "/team-og-image.jpg",
  //         width: 1200,
  //         height: 630,
  //         alt: "SCEE AOT Team - Students Chapter of Electrical Engineering",
  //       },
  //     ],
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: "Our Team - SCEE AOT",
  //     description:
  //       "Meet the dedicated team members of SCEE AOT - Students Chapter of Electrical Engineering at Academy of Technology.",
  //     images: ["/team-twitter-image.jpg"],
  //   },
  alternates: {
    canonical: "https://sceeaot.in/team", // Replace with your actual domain
  },
};

const TeamsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default TeamsLayout;
