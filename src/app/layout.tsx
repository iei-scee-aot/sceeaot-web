import { LoadingProvider } from "@/components/providers/LoadingProvider";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
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
  alternates: {
    canonical: "https://sceeaot.in",
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
        <LoadingProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
