import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IOTricity Problems Statements",
  description:
    "Explore IoT problem statements for IOTricity Season 2.0. Find challenging problems categorized by academic year and engineering discipline - CSE and EE tracks with real-world IoT applications.",
  keywords: [
    "IOTricity problems",
    "IoT problem statements",
    "hackathon challenges",
    "electrical engineering problems",
    "computer science problems",
    "IoT projects",
    "smart systems",
    "innovation challenges",
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
    canonical: "https://sceeaot.vercel.app/iotricity/problems",
  },
};

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
