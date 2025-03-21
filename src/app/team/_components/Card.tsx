import React from "react";

const Card = () => {
  return (
    <>
      <div className="relative w-20 h-24 flex items-center justify-center text-white text-xs font-bold">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* <!-- Gray Border --> */}
          <polygon
            points="0,0 100,0 100,90 0,100"
            stroke="gray"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* <!-- Inner Content --> */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          image <br />
          name <br />
          designation <br />
        </div>
      </div>
    </>
    // <div className="Card  relative w-20 h-32 border-gray-500 border-[0.5px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_80%)]">
    //   <div className="image_section  ">img</div>
    //   <div className="info">
    //     <h1>Name</h1>
    //     <h2>Designation</h2>
    //   </div>
    // </div>
  );
};

export default Card;
