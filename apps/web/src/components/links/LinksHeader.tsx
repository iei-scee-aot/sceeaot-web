"use client";

import Image from "next/image";

export const LinksHeader = () => {
  return (
    <div className="text-center mb-8 lg:mb-12">
      <div className="mb-6">
        <Image
          src="/scee_logo.png"
          alt="SCEE AOT Logo"
          width={120}
          height={120}
          className="mx-auto w-20 h-20 lg:w-32 lg:h-32 object-contain"
        />
      </div>
      <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
        Students Chapter of Electrical Engineering
      </p>
    </div>
  );
};
