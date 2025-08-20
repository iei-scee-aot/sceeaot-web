import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacker - IOTricity Season 2.0",
  description:
    "Hacker Guild for IOTricity Season 2.0 - The Ultimate IoT Hackathon",
};

export default function HackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
