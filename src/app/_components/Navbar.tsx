"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] bg-[#0e0c0c] border-t border-[#747474]/30 z-50 p-4 flex justify-between items-center">
      {/* Home Link */}
      <Link
        href="/"
        className={`flex flex-col items-center text-xs ${
          pathname === "/" ? "text-[#fec20c]" : "text-[#747474]"
        }`}
      >
        <div className={`p-1 rounded-md ${pathname === "/" ? "bg-[#fec20c]/10" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke={pathname === "/" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        HOME
      </Link>

      {/* Teams Link */}
      <Link
        href="/teams"
        className={`flex flex-col items-center text-xs ${
          pathname === "/teams" ? "text-[#fec20c]" : "text-[#747474]"
        }`}
      >
        <div className={`p-1 rounded-md ${pathname === "/teams" ? "bg-[#fec20c]/10" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
              stroke={pathname === "/teams" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        TEAMS
      </Link>

      {/* Events Link */}
      <Link
        href="/events"
        className={`flex flex-col items-center text-xs ${
          pathname === "/events" ? "text-[#fec20c]" : "text-[#747474]"
        }`}
      >
        <div className={`p-1 rounded-md ${pathname === "/events" ? "bg-[#fec20c]/10" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke={pathname === "/events" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
              stroke={pathname === "/events" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        EVENTS
      </Link>

      {/* About Link */}
      <Link
        href="/about"
        className={`flex flex-col items-center text-xs ${
          pathname === "/about" ? "text-[#fec20c]" : "text-[#747474]"
        }`}
      >
        <div className={`p-1 rounded-md ${pathname === "/about" ? "bg-[#fec20c]/10" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke={pathname === "/about" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12M12 8H12.01"
              stroke={pathname === "/about" ? "#fec20c" : "#747474"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        ABOUT
      </Link>
    </nav>
  );
};

export default Navbar;
