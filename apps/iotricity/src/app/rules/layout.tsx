import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IOTricity Rules and Regulations",
  description:
    "Read the complete rules and guidelines for IOTricity Season 2.0. Understand eligibility criteria, submission guidelines, judging criteria, and competition protocols for the IoT hackathon.",
  keywords: [
    "IOTricity rules",
    "hackathon guidelines",
    "competition rules",
    "eligibility criteria",
    "submission guidelines",
    "judging criteria",
    "IoT hackathon",
    "IEI Students Chapter",
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
    canonical: "https://sceeaot.in/iotricity/rules",
  },
};

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
