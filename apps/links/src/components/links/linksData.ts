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
    url: "https://instagram.com/scee.aot",
    iconImage: "/icons/instagram.jpg",
    description: "Follow us for updates and behind-the-scenes content",
  },
  {
    title: "Facebook",
    url: "https://facebook.com/scee.aot",
    iconImage: "/icons/facebook.jpg",
    description: "Connect with our community on Facebook",
  },
  {
    title: "X (Twitter)",
    url: "https://twitter.com/scee_aot",
    iconImage: "/icons/x.jpg",
    description: "Get real-time updates and announcements",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/company/scee-aot",
    iconImage: "/icons/linkedin.jpg",
    description: "Professional networking and career opportunities",
  },
  {
    title: "Discord",
    url: "https://discord.gg/scee-aot",
    iconImage: "/icons/discord.jpg",
    description: "Join our community discussions and events",
  },
  {
    title: "Threads",
    url: "https://threads.net/@scee.aot",
    iconImage: "/icons/threads.jpg",
    description: "Connect with us on Threads",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/your-number",
    iconImage: "/icons/whatsapp.jpg",
    description: "Get in touch via WhatsApp",
  },
];

// Backward compatibility - keeping the original export for existing imports
export const linksData: LinkItem[] = [...websiteLinks, ...socialMediaLinks];
