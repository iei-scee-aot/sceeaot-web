import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp - SCEE AOT",
  description: "Get in touch via WhatsApp",
};

export default function WhatsAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
