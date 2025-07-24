"use client";

import { usePathname } from "next/navigation";
import Divider from "./Divider";
import Divider2 from "./Divider2";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Determine navbar color based on current route
  const getNavbarProps = () => {
    if (pathname === "/") {
      return { homeColor: "#FEC20C" };
    } else if (pathname === "/team") {
      return { teamColor: "#FEC20C" };
    } else if (pathname === "/events") {
      return { eventColor: "#FEC20C" };
    }
    return {};
  };

  return (
    <div className="h-full border-gray-500 border-b-[0.5px] w-full mb-[29px] pb-[60px] lg:pb-0 font-pxg">
      <Divider />
      <Header />
      <Divider2 />
      <Navbar {...getNavbarProps()} />
      <div className="w-full hidden lg:flex py-3 border-gray-500 border-b-[0.5px]"></div>

      {children}

      <Divider2 />
      <Footer />
    </div>
  );
}
