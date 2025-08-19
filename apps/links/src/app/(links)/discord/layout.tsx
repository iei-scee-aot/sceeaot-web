import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord - SCEE AOT",
  description: "Join the SCEE AOT Discord community",
};

export default function DiscordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
