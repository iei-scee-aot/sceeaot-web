"use client";

import { LinkItem } from "../../types/types";
import { LinkCard } from "./LinkCard";

interface LinksGridProps {
  links: LinkItem[];
}

export const LinksGrid = ({ links }: LinksGridProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4 lg:space-y-6">
      {links.map((link, index) => (
        <LinkCard key={index} link={link} />
      ))}
    </div>
  );
};
