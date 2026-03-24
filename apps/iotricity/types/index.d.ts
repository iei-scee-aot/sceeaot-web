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
    registrationEnd: string;
    registrationLink: string;
    heroBackground: string;
    patternBackground: string;
    eventName: string;
    eventLogo: string;
    loadingGreetings: string;
    eventHeroSectionDescription: string;
    eventAboutDescription: string[];
    eventImage?: string;
    eventYear: string;
    eventAboutSubDescription?: string;
    eventCinematicDesctiption: string;
    trailer: string;
    eventStart: string;
    eventEnd: string;
    eventWinnersDate: string
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface winner {
  rank: 1 | 2 | 3;
  name: string;
}
export interface Winners {
  id: number;
  game: "Valorant" | "BGMI" | "Free Fire" | "E-Football";
  imageUrl: string;
  winners: winner[];
}