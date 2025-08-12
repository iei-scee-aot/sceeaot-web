import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IOTricity Season 2.0 | IEI Students Chapter - SCEE",
  description:
    "Join IOTricity Season 2.0, the flagship IoT and electrical engineering event by IEI Students Chapter. Participate in workshops, hackathons, and competitions focused on Internet of Things innovation and technology excellence.",
  keywords: [
    "IOTricity",
    "IoT hackathon",
    "Internet of Things",
    "electrical engineering",
    "technology competition",
    "innovation",
    "workshops",
    "IEI Students Chapter",
    "SCEE",
    "embedded systems",
    "machine learning",
    "cloud computing",
    "smart devices",
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
    canonical: "https://sceeaot.in/iotricity",
  },
};

export default function IOTricityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
