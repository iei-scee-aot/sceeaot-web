import PrizePool from "@/components/iotricity/PrizePool";
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
    eventHighlight?: string;
    eventStart: string;
    eventEnd: string;
    eventWinnersDate: string
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Game = "Valorant" | "BGMI" | "Free Fire" | "E-Football";

export interface Prize {
  rank: string;
  amount: string;
}
export interface PrizePool {
  event: string;
  game: Game;
  gradientClass: string;
  totalPrizePool: string;
  prizes: Prize[];
}

export interface winner {
  rank: string;
  teamName: string;
}
export interface Winners {
  event: string;
  game: Game;
  championsName: string;
  gradientClass: string;
  prizes: winner[];
}