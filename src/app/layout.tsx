import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navebar from "@/components/layout/Navebar";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEISCEEAOT",
  description:
    "The Offlicial Website for Students Chapter of Electrical Engineering of Academy of Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>
          <Navebar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
