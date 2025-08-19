import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter - SCEE AOT",
  description: "Get real-time updates and announcements from SCEE AOT on Twitter.",
};

export default function TwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
