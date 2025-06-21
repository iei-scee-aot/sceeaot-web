import React, { useState } from "react";
import Image from "next/image";

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
}) => {
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
    <div className="h-[242px]">
      <div
        className={`relative cursor-pointer w-[140px] flex flex-col items-center justify-start transition-all duration-0 overflow-hidden ${
          isExpanded ? "h-[16.4rem]" : "h-[13.9rem]"
        }`}
        onClick={toggleCard}
      >
        <svg
          className="absolute top-0 right-[0.8rem] z-10"
          width="28"
          height="37"
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
          {/* <!-- Gray Border --> */}
          <polygon
            points="0,0 100,0 100,100 0,90"
            stroke="#6B7280"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

        {/* <!-- Inner Content --> */}
        <div className=" absolute inset-0 top-0 flex flex-col z-0 text-center">
          <div
            className="imageSection w-full h-[133.33px] overflow-hidden"
            style={{
              backgroundImage: `url('${imagePath}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="border-t-[0.5px] h-[3.5rem] border-gray-500 text-left pt-1 px-[0.6rem]">
            <h2 className="font-pxg font-thin leading-[1.1rem] text-base">{Name}</h2>
            <p className="text-sm  font-thin font-pxg text-[#FEC20C]">
              {Designation}
            </p>
          </div>

          {/* Links Section */}
          {isExpanded && (
            <div className="flex  items-center justify-around border-dashed border-gray-500 border-t-[0.5px] px-1 pt-2 mt-2 mx-[0.6rem]">
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
                      src={`/${icon}`} // Use the mapped icon or fallback to "default.jpg"
                      alt={domain || "link"}
                      className="w-3 h-3 object-contain"
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
