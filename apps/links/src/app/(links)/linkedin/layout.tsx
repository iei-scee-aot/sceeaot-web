import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn - SCEE AOT",
  description: "Professional networking and career opportunities",
};

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
