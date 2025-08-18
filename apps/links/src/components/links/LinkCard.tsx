"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LinkItem } from "../../types/types";

interface LinkCardProps {
  link: LinkItem;
}

export const LinkCard = ({ link }: LinkCardProps) => {
  const isExternal = link.url.startsWith("http");
  const isInternal = link.url.startsWith("/");

  const CardContent = () => (
    <div className="group relative overflow-hidden rounded-sm border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 mt-4">
      <div className="flex items-center p-4 lg:p-6">
        {/* Icon */}
        {link.iconImage ? (
          <Image
            src={link.iconImage}
            alt={`${link.title} icon`}
            width={40}
            height={40}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg object-cover mr-4"
          />
        ) : null}

        {/* Content */}
        <div className="flex-grow min-w-0">
          <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-sm lg:text-base text-gray-400 mt-1 truncate">
              {link.description}
            </p>
          )}
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0 ml-4">
          <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-primary transition-all group-hover:translate-x-1" />
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  if (isInternal) {
    return (
      <Link href={link.url}>
        <CardContent />
      </Link>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <CardContent />
    </a>
  );
};
