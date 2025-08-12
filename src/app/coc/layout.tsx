import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct | IEI Students Chapter - SCEE",
  description:
    "Community guidelines and code of conduct for IEI Students Chapter - SCEE. Learn about our values, expectations, and commitment to creating an inclusive, respectful, and collaborative environment for all members.",
  keywords: [
    "code of conduct",
    "community guidelines",
    "IEI Students Chapter",
    "SCEE",
    "community standards",
    "inclusive environment",
    "respect",
    "collaboration",
    "professional conduct",
    "engineering community",
    "student chapter policies",
  ],
  authors: [{ name: "IEI Students Chapter - SCEE" }],
  creator: "IEI Students Chapter - SCEE",
  publisher: "IEI Students Chapter - SCEE",
  openGraph: {
    title: "Code of Conduct | IEI Students Chapter - SCEE",
    description:
      "Community guidelines and standards that define our commitment to creating an inclusive, respectful, and collaborative environment for all members.",
    url: "/coc",
    siteName: "IEI Students Chapter - SCEE",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Code of Conduct | IEI Students Chapter - SCEE",
    description:
      "Community guidelines that define our commitment to creating an inclusive and respectful environment.",
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
  alternates: {
    canonical: "/coc",
  },
};

export default function CocLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
