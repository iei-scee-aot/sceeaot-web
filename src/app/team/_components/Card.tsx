import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
  Name?: string;
  Designation?: string;
  imagePath?: string;
  links?: string[];
}

const Card = ({
  Name = "Member Name",
  Designation = "Designation",
  imagePath = "",
  links = [
    "https://facebook.com",
    "https://instagram.com",
    "https://x.com/",
    "https://threads.net",
    "https://linkedin.com",
  ],
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  // Map known domains to their corresponding icon file names
  const domainToIconMap: { [key: string]: string } = {
    "facebook.com": "facebook.jpg",
    "instagram.com": "instagram.jpg",
    "x.com": "x.jpg",
    "threads.net": "threads.jpg",
    "linkedin.com": "linkedin.jpg",
  };

  // Function to extract the domain from a URL
  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain;
    } catch (error) {
      console.error("Invalid URL:", url);
      return null;
    }
  };

  return (
    <div className="h-[180px] md:h-[280px] lg:h-[320px] xl:h-[380px] 2xl:h-[420px] m-1 md:m-2 lg:m-3 xl:m-4 2xl:m-5 mb-6 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12">
      <div
        className={`relative cursor-pointer w-[6.5rem] md:w-[9rem] lg:w-[10.5rem] xl:w-[12.5rem] 2xl:w-[12rem] flex flex-col items-center justify-start transition-all duration-0 overflow-hidden ${
          isExpanded
            ? "h-[12rem] md:h-[16.5rem] lg:h-[18.5rem] xl:h-[22rem] 2xl:h-[23rem]"
            : "h-[10rem] md:h-[14.5rem] lg:h-[16rem] xl:h-[19rem] 2xl:h-[20rem]"
        }`}
        onClick={toggleCard}
      >
        <svg
          className="absolute top-0 right-[0.6rem] md:right-[0.9rem] lg:right-[1rem] xl:right-[1.2rem] 2xl:right-[1.5rem] z-10 scale-75 md:scale-100 lg:scale-110 xl:scale-125 2xl:scale-150 origin-top-right"
          width="20"
          height="26"
          viewBox="0 0 28 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4141 32.9229C20.9366 35.2353 17.5013 36.6703 13.7146 36.6703C6.14131 36.6703 6.10352e-05 30.9385 6.10352e-05 23.87V-0.000347137H4.14694V22.6646C4.14694 27.5928 8.4344 31.5945 13.7146 31.5945C16.3592 31.5945 18.7489 30.594 20.4797 28.9786C22.2105 27.3632 23.2824 25.1328 23.2824 22.6646V-0.000347137H27.4292V23.87C27.4292 27.4042 25.9005 30.6022 23.4141 32.9229Z"
            fill="#FEC20C"
          />
          <path
            d="M13.7146 27.0024C10.6044 27.0024 8.09167 24.649 8.09167 21.7543V-0.000391006H11.6938V20.8769C11.6938 21.9183 12.5988 22.7712 13.7234 22.7712C14.2856 22.7712 14.7864 22.558 15.1554 22.2136C15.5244 21.8691 15.7529 21.4017 15.7529 20.8769V-0.000391006H19.355V21.7543C19.355 23.2058 18.7225 24.5178 17.7033 25.469C16.6754 26.412 15.2696 27.0024 13.7146 27.0024Z"
            fill="#FEC20C"
          />
        </svg>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 100,0 100,100 0,90"
            stroke="#6B7280"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 top-0 flex flex-col z-0 text-center">
          <div
            className="imageSection w-[6.5rem] h-[6.5rem] md:w-[9rem] md:h-[9rem] lg:w-[10.5rem] lg:h-[10.5rem] xl:w-[12.5rem] xl:h-[12rem] 2xl:w-[12rem] 2xl:h-[12rem] overflow-hidden mx-auto"
            style={{
              backgroundImage: `url('${imagePath}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="border-t-[0.5px] h-[2.5rem] md:h-[3.5rem] lg:h-[4rem] xl:h-[4.5rem] 2xl:h-[5.5rem] border-gray-500 text-left pt-1 md:pt-1.5 lg:pt-2 xl:pt-2.5 2xl:pt-3 px-[0.4rem] md:px-[0.7rem] lg:px-[0.8rem] xl:px-[1rem] 2xl:px-[1.2rem]">
            <h2 className="font-pxg font-thin leading-[0.9rem] md:leading-[1.2rem] lg:leading-[1.4rem] xl:leading-[1.6rem] 2xl:leading-[1.8rem] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">{Name}</h2>
            <p className="text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base font-thin font-pxg text-[#FEC20C]">
              {Designation}
            </p>
          </div>

          {/* Links Section */}
          {isExpanded && (
            <div className="flex items-center justify-around border-dashed border-gray-500 border-t-[0.5px] px-1 md:px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 pt-1.5 md:pt-2 lg:pt-2.5 xl:pt-3 2xl:pt-4 mt-1.5 lg:mt-2 xl:mt-2.5 2xl:mt-3 mx-[0.4rem] md:mx-[0.7rem] lg:mx-[0.8rem] xl:mx-[1rem] 2xl:mx-[1.2rem]">
              {links.map((link, index) => {
                const domain = getDomainFromUrl(link);
                const icon = domain && domainToIconMap[domain] ? domainToIconMap[domain] : "default.jpg";

                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/${icon}`}
                      alt={domain || "link"}
                      className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 object-contain"
                    />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

// In your parent component
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center">
  <Card
    Name="John Doe"
    Designation="Developer"
    imagePath="/team/john.jpg"
    links={["https://linkedin.com/in/john"]}
  />
  <Card
    Name="Jane Smith"
    Designation="Designer"
    imagePath="/team/jane.jpg"
    links={["https://instagram.com/jane"]}
  />
  {/* Add more cards */}
</div>
