import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - SCEE AOT",
  description:
    "Connect with SCEE AOT across all platforms. Find our social media, blogs, and important links.",
  keywords: [
    "SCEE AOT links",
    "social media",
    "contact",
    "instagram",
    "facebook",
    "twitter",
    "linkedin",
    "discord",
    "youtube",
    "blogs",
    "medium",
    "linktree",
  ],
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
