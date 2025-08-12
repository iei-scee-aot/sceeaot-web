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
  openGraph: {
    title: "IOTricity Season 2.0 | IEI Students Chapter - SCEE",
    description:
      "Join the ultimate IoT and electrical engineering experience! Participate in workshops, hackathons, and competitions that bridge theory and innovation.",
    url: "/iotricity",
    siteName: "IEI Students Chapter - SCEE",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOTricity Season 2.0 | IEI Students Chapter - SCEE",
    description:
      "Join the ultimate IoT and electrical engineering experience! Participate in workshops, hackathons, and competitions.",
    creator: "@IEI_SCEE",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "/iotricity",
  },
};

export default function IOTricityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
