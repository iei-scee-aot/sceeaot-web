import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration - IOTricity Season 2.0",
  description: "Register for IOTricity Season 2.0 - The Ultimate IoT Hackathon",
};

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
