import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook - SCEE AOT",
  description: "Connect with the SCEE AOT Facebook page",
};

export default function FacebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
