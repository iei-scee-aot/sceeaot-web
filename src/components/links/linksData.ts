import {
  BookOpen,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MessageSquare,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";
import { LinkItem } from "./types";

export const linksData: LinkItem[] = [
  {
    title: "IoTricity",
    url: "/iotricity",
    lucideIcon: Zap,
    description: "Our flagship hackathon event",
  },
  {
    title: "Main Website",
    url: "/",
    lucideIcon: Globe,
    description: "Visit our main website",
  },
  {
    title: "Blogs",
    url: "https://medium.com/@scee-aot",
    lucideIcon: BookOpen,
    description: "Read our latest articles and insights",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/scee.aot",
    lucideIcon: Instagram,
    description: "Follow us for updates and behind-the-scenes content",
  },
  {
    title: "Facebook",
    url: "https://facebook.com/scee.aot",
    lucideIcon: Facebook,
    description: "Connect with our community on Facebook",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/scee_aot",
    lucideIcon: Twitter,
    description: "Get real-time updates and announcements",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/company/scee-aot",
    lucideIcon: Linkedin,
    description: "Professional networking and career opportunities",
  },
  {
    title: "Discord",
    url: "https://discord.gg/scee-aot",
    lucideIcon: MessageSquare,
    description: "Join our community discussions and events",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@scee-aot",
    lucideIcon: Youtube,
    description: "Watch our workshops, events, and tutorials",
  },
];
