import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram - SCEE AOT",
  description: "Follow us for updates and behind-the-scenes content",
};

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
