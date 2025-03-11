import React from "react";
import Image from "next/image";

const socialLinks = [
  { id: 1, url: "https://discord.gg/mqNcynTs", imgSrc: "/discord.jpg", alt: "Discord", size: "w-8 h-8" },
  { id: 2, url: "https://www.facebook.com/share/1RBFTrFVs3/", imgSrc: "/facebook.jpg", alt: "Facebook", size: "w-4 h-4" },
  { id: 3, url: "https://x.com/sceeaot?t=AEcVdqvd0iNtwQyNv0xRYQ&s=09", imgSrc: "/x.jpg", alt: "X", size: "w-4 h-4" },
  { id: 4, url: "https://www.linkedin.com/company/iei-students-chapter-of-ee-academy-of-technology/", imgSrc: "/linkedin.jpg", alt: "LinkedIn", size: "w-4 h-4" },
  { id: 5, url: "https://www.instagram.com/sceeaot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", imgSrc: "/instagram.jpg", alt: "Instagram", size: "w-4 h-4" },
  { id: 6, url: "https://www.threads.net/@sceeaot", imgSrc: "/threads.jpg", alt: "Threads", size: "w-4 h-4" },
  { id: 7, url: "https://whatsapp.com", imgSrc: "/whatsapp.jpg", alt: "WhatsApp", size: "w-4 h-4" },
];

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-[0.5rem] border-l-[0.03125rem] border-r-[0.03125rem] border-white">
      {/* Left Section: Logo + Text */}
      <div className="flex items-center gap-2">
        <Image src="/scee_logo.jpg" alt="SCEE Logo" width={80} height={40} className="object-contain" />
        <span className="text-xs text-[#747474]">Students' Chapter EE AOT</span>
      </div>

      {/* Right Section: Social Icons */}
      <div className="flex items-center gap-4">
        {socialLinks.slice(0, 1).map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="relative">
            <img src={item.imgSrc} alt={item.alt} className={`${item.size} object-contain`} />
          </a>
        ))}
        <div className="grid grid-cols-3 grid-rows-2 gap-1">
          {socialLinks.slice(1).map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-md border border-[#747474] text-[#747474]"
            >
              <img src={item.imgSrc} alt={item.alt} className={`${item.size} object-contain`} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
