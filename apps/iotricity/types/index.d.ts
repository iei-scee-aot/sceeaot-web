import { ReactNode } from "react";

export interface Mentor {
  name: string;
  designation: string;
  imagePath: string;
  links: string[];
}

export interface TrackPrize {
  id: number;
  title: string;
  winner: string;
  description: string;
  icon: string;
}

export interface EventInfo {
    targetDate: string;
    registrationLink: string;
    heroBackground: string;
    patternBackground: string;
    eventName: string;
    eventLogo: string;
    eventHeroSectionDescription: string;
    eventAboutDescription: string[];
    eventImage: string;
    eventYear: string;
    eventAboutSubDescription?: string;
    eventCinematicDesctiption: string;
    trailer: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}