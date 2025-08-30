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
    canonical: "https://sceeaot.vercel.app/team",
  },
};

const TeamsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default TeamsLayout;
