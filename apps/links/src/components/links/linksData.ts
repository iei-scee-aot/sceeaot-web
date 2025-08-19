import { LinkItem } from "@/types/types";

export const websiteLinks: LinkItem[] = [
  {
    title: "Main App",
    url: "/",
    description: "Visit our main website",
  },
  {
    title: "IoTricity",
    url: "/iotricity",
    description: "Our flagship hackathon event",
  },
];

export const socialMediaLinks: LinkItem[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/sceeaot",
    iconImage: "/icons/instagram.svg",
    description: "Follow us for updates and behind-the-scenes content",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61552070552351",
    iconImage: "/icons/facebook.svg",
    description: "Connect with our community on Facebook",
  },
  {
    title: "Twitter",
    url: "https://x.com/sceeaot",
    iconImage: "/icons/twitter.svg",
    description: "Get real-time updates and announcements",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/iei-students-chapter-of-ee-academy-of-technology",
    iconImage: "/icons/linkedin.svg",
    description: "Professional networking and career opportunities",
  },
  {
    title: "Discord",
    url: "https://discord.gg/K6GfRPAS",
    iconImage: "/icons/discord.svg",
    description: "Join our community discussions and events",
  },
  {
    title: "WhatsApp",
    url: "https://chat.whatsapp.com/DuI1NQ4y1hpGp33mL0lWp8?mode=ac_t",
    iconImage: "/icons/whatsapp.svg",
    description: "Get in touch via WhatsApp",
  },
];

// Backward compatibility - keeping the original export for existing imports
export const linksData: LinkItem[] = [...websiteLinks, ...socialMediaLinks];
