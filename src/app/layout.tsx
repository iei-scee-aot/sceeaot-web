import LayoutWrapper from "@/components/LayoutWrapper";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "SCEE AOT - Students Chapter of Electrical Engineering | Academy of Technology",
    template: "%s | SCEE AOT",
  },
  description:
    "Join SCEE AOT - the premier Students Chapter of Electrical Engineering at Academy of Technology. Explore technical workshops, research projects, industry connections, and career opportunities in electrical engineering.",
  keywords: [
    "SCEE AOT",
    "Students Chapter Electrical Engineering",
    "Academy of Technology",
    "electrical engineering students",
    "technical workshops",
    "engineering projects",
    "student community",
    "electrical engineering careers",
    "AOT engineering",
    "student organization",
  ],
  authors: [{ name: "SCEE AOT" }],
  creator: "SCEE AOT",
  publisher:
    "Students Chapter of Electrical Engineering, Academy of Technology",
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
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   title: "SCEE AOT - Students Chapter of Electrical Engineering",
  //   description:
  //     "Join SCEE AOT - the premier Students Chapter of Electrical Engineering at Academy of Technology. Explore technical workshops, research projects, and career opportunities.",
  //   siteName: "SCEE AOT",
  //   url: "https://sceeaot.in", // Replace with your actual domain
  //   images: [
  //     {
  //       url: "image.jpg", // Add an Open Graph image
  //       width: 1200,
  //       height: 630,
  //       alt: "SCEE AOT - Students Chapter of Electrical Engineering",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "SCEE AOT - Students Chapter of Electrical Engineering",
  //   description:
  //     "Join SCEE AOT - the premier Students Chapter of Electrical Engineering at Academy of Technology.",
  //   images: ["/twitter-image.jpg"], // Add a Twitter card image
  //   creator: "@sceeaot", // Replace with your actual Twitter handle
  // },
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification
  // },
  alternates: {
    canonical: "https://sceeaot.in", // Replace with your actual domain
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
